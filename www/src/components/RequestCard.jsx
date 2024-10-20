//placeholder
import { Badge } from "@/components/ui/badge"
import { PropTypes } from 'prop-types'
import { Button } from '@/components/ui/button'

// eslint-disable-next-line react/prop-types
function ButtonOrComplete({completed}) {
    if (!completed) {
        return (
            <Button className='my-2 bg-emerald-500 hover:bg-emerald-600'>Help</Button>
        )
    }
    return null
}

function IfImage({src}) {
    if (src) {
        return (
            <img className='object-cover rounded-lg ml-auto mt-2 mr-2' width='128' height='128' src={src}/>
        )
    }
    return null
}

// eslint-disable-next-line react/prop-types
export default function RequestCard({title, type, distance, urgent, features, completed, img}){
    const types = ['utility', 'food', 'power']

    function getTypeStyles() {
        if (completed) {
            return 'border-emerald-500 opacity-50 bg-neutral-200'
        }

        if (urgent) {
            return 'border-red-500'
        }

        switch (type) {
            case 'utility':
                return 'border-blue-500'
            case 'power':
                return 'border-yellow-500'
            case 'food':
                return 'border-emerald-500'
        }
    }

    if (!types.includes(type)) {
        return
    }

    const badges = []
    if (completed) {
        badges.push(
            <Badge className='bg-emerald-400'>HELPED!</Badge>
        )
    }
    if (urgent) {
        badges.push(
            <Badge variant='destructive'>URGENT</Badge>
        )
    }
    for (const item in features) {
        badges.push(
            <Badge variant='outline'>{features[item]}</Badge>
        )
    }

    return (   
        <div className={"rounded-sm shadow-md pt-2 px-2 pb-4 w-full border border-slate-300 flex flex-row  " + getTypeStyles()}>
            <div>
                <div className='flex flex-row align-middle ml-1'>
                    <img width='32' height='32' src={`/${type}.png`} alt={type}/>
                    <p className='text-sm font-bold my-auto ml-2 text-neutral-800'>{type.toUpperCase()}</p>
                </div>
                <div className='pl-2 mt-2'>
                    <p>{title}</p>
                    {/* <p className="text-sm">{name.toUpperCase()}</p> */}
                    
                    <div className="flex flex-row mt-2 space-x-1">
                        {badges}
                    </div>
                    <ButtonOrComplete completed={completed}/>
                    <p className='text-xs font-semibold text-neutral-400 mt-2'>{distance} miles from you</p>
                </div>
            </div>
            <IfImage src={img}/>
        </div>
    )
}
RequestCard.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    distance: PropTypes.number
}