import { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";

export default function MapPiece(){
	const [center, setCenter] = useState([32.78, -79.93]);
	const [zoom, setZoom] = useState(11);

	const locations = [
        [32.768, -79.93],
        [32.778, -79.95],
        [32.788, -79.91],
    ];

	const marks = locations.map((loc) => {
		return (
			<Marker anchor={loc}>
				<HeatPiece scaleFactor={1} />
			</Marker>
		);
	});
	return (
		<div class="w-full h-full">
			<Map
				defaultCenter={center}
				defaultZoom={zoom}
				onBoundsChanged={({ center, zoom }) => {
					setCenter(center);
					setZoom(zoom);
				}}
			> 
				{marks}
			</Map>
		</div>
	);
};

const HeatPiece = () => {
	return (
		<div class={`bg-red-700 bg-opacity-40 rounded-xl w-[1.5rem] h-[1.5rem] relative top-[1rem] left-[0.2rem]`}></div>
	);
};
