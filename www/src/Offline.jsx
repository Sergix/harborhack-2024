import NavBar from "./components/Navigation/NavBar"

export default function Offline() {
    return (
        <>
            <NavBar />
            <main className='px-4 mt-24 mb-8'>
                <h1>You are offline.</h1>
                <div className="rounded-md p-4 bg-red-700 text-white mt-4">
                    <h2 className="text-sm font-bold mb-2">EMERGENCY LOCATION</h2>
                    <p>blah</p>
                </div>
            </main>
        </>
    )
}