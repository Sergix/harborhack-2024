import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import RequestCard from "./components/RequestCard";
import { Progress } from "./components/ui/progress"

// eslint-disable-next-line react/prop-types
function CardList({progress, isLoaded}) {
  if (!isLoaded) {
    return (
      <Progress value={progress}/>
    )
  }

  return (
    <>
      <RequestCard title='Tree on house' name='Lily Hollis' type='utility' distance={5} />
      <RequestCard title='Car flipped over' name='Jack Brackley' type='utility' distance={5} />
      <RequestCard title='1 lonely boi' name='Rickey Hall' type='utility' distance={5} />
      <RequestCard title='Need water' name='Aidan Nuzun-Clark' type='utility' distance={5} />
      <RequestCard title='Pipe burst' name='Peyton McGinnis' type='utility' distance={5} />
    </>
  )
}

function App() {
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
      const interval = setInterval(() => {
        setProgress(progress + 33)
      }, 666)
      setTimeout(() => {
          setLoaded(true)
          clearTimeout(interval)
      }, 2000)
  })

	return (
    <>
      <NavBar />
      <main className='px-4 mt-24 mb-8 space-y-2'>
        <h1 className='mb-4'>Browse</h1>
        <CardList progress={progress} isLoaded={loaded}/>
      </main>
    </>
	);
}

export default App;
