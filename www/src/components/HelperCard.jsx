//placeholder
import { Badge } from "@/components/ui/badge"
import { PropTypes } from 'prop-types'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

// eslint-disable-next-line react/prop-types
function MatchesYourRequest({matches}) {
    console.log(matches)
    if (matches) {
        return (
            <div className='flex flex-row my-1 ml-1'>
                <img width="16" height="16" className='mr-1' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/800px-Twitter_Verified_Badge.svg.png'></img>
                <p className='text-sky-700 font-bold text-xs'>MATCHES YOUR REQUEST</p>
            </div>
        )
    }
    return null
}

export default function HelperCard({name, supplies, distance, helped, matches}){

    const supplyBadges = []
    for (const item in supplies) {
        supplyBadges.push(
            <Badge>{supplies[item]}</Badge>
        )
    }

    return (   
        <div className="rounded-lg shadow-sm pt-2 pb-3 pr-3 pl-1 w-full border border-slate-300">
            <MatchesYourRequest matches={matches}/>
            <div className='flex flex-row ml-2 my-2'>
                <p className='font-bold my-auto text-neutral-800'>{name.toUpperCase()}</p>
            </div>
            <div className='pl-2 mt-2'>
                <div className="flex flex-row mt-2 space-x-1">
                    {supplyBadges}
                </div>
                <div className='flex flex-row mt-4 w-full'>
                    <div className='text-xs mr-auto font-semibold text-neutral-400 space-y-1'>
                        <p>Helped {helped} others!</p>
                        <Separator/>
                        <p>{distance} miles from you</p>
                    </div>
                    <Button className='mt-auto bg-emerald-500 hover:bg-emerald-600'>Connect</Button>
                </div>
            </div>
        </div>
    )
}
HelperCard.propTypes = {
    name: PropTypes.string,
    supplies: PropTypes.list,
    distance: PropTypes.number,
    helped: PropTypes.number,
    matches: PropTypes.boolean
}