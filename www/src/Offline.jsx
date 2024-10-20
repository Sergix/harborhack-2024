import NavBar from "./components/Navigation/NavBar"
import BlueToothMesh from "./components/Offline/BluetoothMesh"
import EmergencyContact from "./components/Offline/EmergencyContact"
import WaffleHouse from "./components/Offline/WaffleHouse"
import { Button } from "@/components/ui/button"
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";


export default function Offline() {
    const [loading, setLoading] = useState(false);
    const [connectionChecked, setConnectionChecked] = useState(null);
    const checkConnection = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setConnectionChecked(new Date().toLocaleTimeString());
        }, 2000);
    }
    return (
        <>
            <NavBar />
            <main class='px-4 mt-24 mb-8'>
                <h1>You are offline.</h1>
                <p>Last online 5:42pm</p>
                {connectionChecked && <p>Connection checked at {connectionChecked}</p>}
                <div class="flex gap-2 items-center"><Button onClick={()=>{
                    checkConnection();
                }}>Test Connection</Button>
                {loading && <BeatLoader color={"#000"} size={8} />}
                </div>
                <EmergencyContact />
                <WaffleHouse />
                <BlueToothMesh />
            </main>
        </>
    )
}