import NavBar from "../components/Navigation/NavBar";
import MapPiece from "./Map";
import RequestCard from "../components/RequestCard";
import Menu from "./menu";
import { useState } from 'react';

export default function MapPage() {
	const [showCard, setShowCard] = useState(false);
	const [requestId, setRequestId] = useState(1);
	const [maxDistance, setMaxDistance] = useState(10);
	const handleClick = (id) =>{
		if (requestId === id) {
			setShowCard(!showCard);
			return;
		}
		setRequestId(id);
		setShowCard(true);
	}

	return (
		<div class="relative">
			<NavBar />
			<Menu maxDistance={maxDistance} setMaxDistance={setMaxDistance}/>
			<div class="w-[100vw] h-[calc(100vh)] absolute top-0 bg-slate-200 flex flex-col items-center justify-center">
				<MapPiece setRequestId={(num)=>{handleClick(num)}} maxDistance={maxDistance}/>
				{showCard && (
				<div class="absolute bottom-6">
					<RequestCard requestNumber={requestId}/>
				</div> 
			)}
			</div>
		</div>
	);
}
