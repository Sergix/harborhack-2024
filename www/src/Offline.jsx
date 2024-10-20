import NavBar from "./components/Navigation/NavBar"
import BlueToothMesh from "./components/Offline/BluetoothMesh"
import EmergencyContact from "./components/Offline/EmergencyContact"
import WaffleHouse from "./components/Offline/WaffleHouse"
import { Button } from "@/components/ui/button"
import BeatLoader from "react-spinners/BeatLoader";
import { useState } from "react";
import { Badge } from '@/components/ui/badge';


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
            {/* <NavBar /> */}
        <main className='px-4 mb-8 pt-4 bg-neutral-900 text-white h-screen'>
                <img className='bg-neutral-500 acrylic fixed w-32 px-4 py-2 rounded-md' src='/logo.png'></img>
                <div className='rounded-sm pt-2 mt-24'>
                    <h1 className='text-3xl'>You are offline.</h1>
                    <p className='my-2 text-xs font-bold'>INFORMATION BELOW ACCURATE AS OF <Badge className='ml-1 bg-sky-900'>5:42 PM</Badge></p>
                </div>
                <div className="flex gap-2 items-center">
                    <Button className='bg-white text-black hover:bg-neutral-200' onClick={()=>{
                        checkConnection();
                    }}>Test Connection</Button>
                {!loading && connectionChecked && <p className='text-xs font-bold'>CONNECTION LAST CHECKED AT {connectionChecked}</p>}
                {loading && <BeatLoader color={"#fff"} size={8} />}
                </div>
                <EmergencyContact />
                <BlueToothMesh />
                <WaffleHouse />
            </main>
        </>
    )
}