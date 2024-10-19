//placeholder
import { Badge } from "@/components/ui/badge"
import { PropTypes } from 'prop-types'

export default function RequestCard({title, name, type, distance}){
    const types = ['utility', 'food', 'power']

    // function getTypeColor() {
    //     switch (type) {
    //         case 'utility':
    //             return ''
    //     }
    // }

    if (!types.includes(type)) {
        return
    }

    return (   
        <div className="rounded-lg shadow-sm pt-2 px-2 pb-4 w-full border border-slate-300">
            <div className='flex flex-row align-middle'>
                <img width='32' height='32' src={`/${type}.png`} alt={type}/>
                <p className='text-sm font-bold my-auto ml-2 text-neutral-800'>{type.toUpperCase()}</p>
            </div>
            <div className='pl-2 mt-2'>
                <p className='font-bold'>{title}</p>
                <p className="text-sm">{name}</p>
                
                <div className="flex flex-row mt-2 space-x-1">
                    <Badge variant='outline'></Badge>
                    <Badge variant='destructive'>URGENT</Badge>
                </div>
                <p className='text-xs font-semibold text-neutral-400 mt-2'>{distance} miles from you</p>
            </div>
        </div>
    )
}
RequestCard.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    distance: PropTypes.number
}