import NavBar from "../components/Navigation/NavBar";
import MapPiece from "./Map";

export default function MapPage() {
	return (
		<div className="overflow-hidden">
			<NavBar />
			<div className="w-[100vw] h-[calc(100vh)] absolute top-0 bg-slate-200 flex flex-col items-center justify-center">
				<MapPiece />
			</div>
		</div>
	);
}
