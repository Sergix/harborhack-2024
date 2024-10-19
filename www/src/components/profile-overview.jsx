import { useEffect, useState } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// eslint-disable-next-line react/prop-types
function Profile({isLoaded}) {
    if (!isLoaded) {
        return (
            <div className='rounded-sm bg-neutral-900 text-white px-4 pb-6 pt-4 my-4'>
            <h2 className="font-bold text-sm">YOUR PROFILE</h2>
            <div className='flex flex-row align-middle mt-2'>
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px] bg-neutral-700" />
                        <Skeleton className="h-4 w-[200px] bg-neutral-700" />
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='rounded-sm bg-neutral-900 text-white px-4 pb-6 pt-4 my-4'>
        <h2 className="font-bold text-sm">YOUR PROFILE</h2>
        <div className='flex flex-row align-middle mt-2'>
            <div>
                <Avatar className='mt-2 mr-3'>
                    <AvatarImage src='https://northsidecharleston.com/wp-content/uploads/2023/07/profile.jpg'/>
                    <AvatarFallback>PM</AvatarFallback>
                </Avatar>
                <img width="16" height="16" className='-mt-3 ml-7 z-10 relative' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png'></img>
            </div>
            <div>
                <p>
                    Peyton McGinnis
                </p>
                <address className="mb-2 text-xs">
                    1234 Joe Street<br/>
                    Mama, SC 29420
                </address>
            </div>
        </div>
        <p className='text-xs text-left w-full italic text-neutral-300'>(No one can see your personal info until you choose to connect with them.)</p>
    </div>
    )
}

export function ProfileOverview() {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 2000)
    })

    return (
        <Profile isLoaded={loaded}></Profile>
    )
}