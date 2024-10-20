import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/Navigation/NavBar";
import RequestCard from "./components/RequestCard";
import HelperCard from "./components/HelperCard";
import { Progress } from "./components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// eslint-disable-next-line react/prop-types
function RequestCardList({progress, isLoaded}) {
  if (!isLoaded) {
    return (
      <Progress className='mt-4' value={progress}/>
    )
  }

  return (
    <div className='space-y-2 mt-2'>
      <RequestCard title='Tree on house' name='Lily Hollis' type='utility' distance={5} urgent={true} img='https://images.unsplash.com/photo-1591497108596-436c1a1a5c8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFsbGVuJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D' />
      <RequestCard title='Car flipped over' name='Jack Brackley' type='utility' distance={10} urgent={true} completed={true} img='data:image/jpeg;base64,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' />
      <RequestCard title='Generator for medical equipment' name='Rickey Hall' type='power' distance={15} features={['Elderly']} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdhdXpJR2OwKCvBeSOkHuqBKO4W5cRbM04g&shttps://images.unsplash.com/photo-1591497108596-436c1a1a5c8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFsbGVuJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D' />
      <RequestCard title='Need water' name='Aidan Nuzun-Clark' type='food' distance={17} features={['Family']} />
      <RequestCard title='Pipe burst' name='Peyton McGinnis' type='utility' distance={19} completed={true} img='https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-burst-pipe.jpeg.jpg' />
    </div>
  )
}

// eslint-disable-next-line react/prop-types
function HelperCardList({progress, isLoaded}) {
  if (!isLoaded) {
    return (
      <Progress value={progress}/>
    )
  }

  return (
    <div className='space-y-2'>
      <HelperCard name='Doug Hamilton' supplies={['Chainsaw', 'Truck']} distance={5} helped={3} matches={true} />
      <HelperCard name='Venkat Ramsesh' supplies={['Crane', 'Groundsaw']} distance={25} helped={6} matches={false} />
    </div>
  )
}

function App() {
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)

  function load() {
    const interval = setInterval(() => {
      setProgress(progress + 33)
    }, 666)
    setTimeout(() => {
        setLoaded(true)
        clearTimeout(interval)
    }, 2000)
  }

  useEffect(() => load())

	return (
    <>
      <NavBar />
      <main className='px-4 mt-24 mb-8 space-y-2 phone-size'>
        <aside className='flex flex-col bg-red-600 p-2 rounded-md text-white shadow-md'>
          <div className='flex flex-row align-middle'>
            <img width='16' height='24' className="mt-1 self-start" src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/White_alert_icon.svg/1280px-White_alert_icon.svg.png'></img>
            <h2 className='text-sm font-bold ml-1'>LOCAL EMERGENCY</h2>
          </div>
          <p className='text-sm'>Local flooding within 25 miles of your current location. May be damaging to costal homes.</p>
          <p className='text-sm font-bold mt-2'>Find an evacuation route &gt;</p>
        </aside>
        <Tabs defaultValue="help">
          <TabsList className='w-full'>
            <TabsTrigger className='w-full' value="help">I want to help</TabsTrigger>
            <TabsTrigger className='w-full' value="request">I need help</TabsTrigger>
          </TabsList>
          <TabsContent value="help">
              <p className='text-xs text-neutral-700 -mt-4 mb-4 pt-4 pb-3 px-3 bg-neutral-100 rounded-b-lg'>Help people in your community</p>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Apply a filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="week">This Week</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            <RequestCardList progress={progress} isLoaded={loaded}/>
          </TabsContent>
          <TabsContent value="request">
            <p className='text-xs text-neutral-700 -mt-4 mb-4 pt-4 pb-3 px-3 bg-neutral-100 rounded-b-lg'>Find help in your situation</p>
            <p className='text-xs text-neutral-400 m-2'>All helpers have been individually vetted using federal identification.</p>
            <HelperCardList progress={progress} isLoaded={loaded}/>
          </TabsContent>
        </Tabs>
      </main>
    </>
	);
}

export default App;
