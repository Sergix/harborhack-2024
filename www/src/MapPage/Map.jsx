import { useEffect, useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import key from "./map_api_key";

export default function MapPiece({ setRequestId, maxDistance}) {
	const [center, setCenter] = useState([32.78, -79.93]);
	const [zoom, setZoom] = useState(11);


	//set your current location
	const [currentLocation, setCurrentLocation] = useState(null);
	navigator.geolocation.getCurrentPosition((loc) =>
		setCurrentLocation([loc.coords.latitude, loc.coords.longitude])
	);
   

	const locations = [
		// [32.768, -79.93],
		[32.778, -79.95],
		// [32.788, -79.91],
        // [32.798, -79.95],
        [32.808, -79.81],
        // [32.818, -79.95],
        // [32.828, -79.91],
        [32.828, -79.99],
        [32.798, -79.93],
        // [32.878, -79.75],
        [32.878, -79.89],
	];

	const requestIds = Array.from({ length: locations.length }, (_, i) => i + 1);

    
	const marks = locations
		.filter((loc) => haversineDistance(currentLocation, loc) <= maxDistance)
		.map((loc) => {
			return (
				<Marker
					anchor={loc}
					onClick={() => {
						setRequestId(requestIds[locations.indexOf(loc)]);
					}}
					style={{ pointerEvents: "auto" }}
				>
					<HeatPiece />
				</Marker>
			);
		});


        const MAPTILER_ACCESS_TOKEN = key;
        const MAP_ID = 'streets-v2'
        function mapTiler (x, y, z, dpr) {
            return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
          }
	return (
		<div class="w-full h-full">
			<Map
                provider={mapTiler}
				defaultCenter={center}
				defaultZoom={zoom}
				onBoundsChanged={({ center, zoom }) => {
					setCenter(center);
					setZoom(zoom);
				}}
			>
				{marks}
				<Marker anchor={currentLocation} payload={1} />
			</Map>
		</div>
	);
}

const HeatPiece = () => {
	return (
		<div className={`bg-red-700 bg-opacity-40 rounded-xl w-[1.5rem] h-[1.5rem] relative top-[1rem] left-[0.2rem]`}></div>
	);
};


const haversineDistance = (coords1, coords2) => {
    if (!coords1) return 0;

    const toRad = (x) => (x * Math.PI) / 180;
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRad(coords2[0] - coords1[0]);
    const dLon = toRad(coords2[1] - coords1[1]);
    const lat1 = toRad(coords1[0]);
    const lat2 = toRad(coords2[0]);

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
};
