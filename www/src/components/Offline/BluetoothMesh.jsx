import RingLoader from "react-spinners/RingLoader";
export default function BlueToothMesh() {
	return (
		<div class="rounded-md p-4 bg-blue-700 text-white mt-4">
			<div class="flex items-center justify-between"><h2 class="text-sm font-bold mb-2">BLUETOOTH MESH</h2><RingLoader
				color={"white"}
				loading={true}
				// cssOverride={override}
				size={30}
				aria-label="Loading Spinner"
				data-testid="loader"
			/></div>
			<p className="text-xs">Searching for bluetooth mesh network...</p>
			<p className='text-xs font-mono mt-2'>
				DEVICE ID SLIDAq6Hs2!a_5<br/>
				LATLONG 35.54042144415137, -79.7480894614109<br/>
				AJLRP
			</p>
		</div>
	);
}
