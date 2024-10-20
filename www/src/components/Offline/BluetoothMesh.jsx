import RingLoader from "react-spinners/RingLoader";
export default function BlueToothMesh() {
	return (
		<div class="rounded-md p-4 bg-blue-700 text-white mt-4">
			<div class="flex items-center justify-between"><h2 class="text-sm font-bold mb-2">Bluetooth Mesh</h2><RingLoader
				color={"white"}
				loading={true}
				// cssOverride={override}
				size={30}
				aria-label="Loading Spinner"
				data-testid="loader"
			/></div>
			<p>Searching for bluetooth mesh network.</p>
			
		</div>
	);
}
