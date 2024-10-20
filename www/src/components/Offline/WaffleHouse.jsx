import { Badge } from '@/components/ui/badge'

export default function WaffleHouse() {
    const index = 1;
    const indexStrings = ["Green", "Yellow", "Red"];
    const indexColors = ["border-green-700", "border-yellow-600", "border-red-700"];
    return (
        <div className='mt-4'>
            <h2 className='bg-yellow-600 rounded-t-md p-2 text-xs font-bold'>WAFFLE HOUSE INDEX</h2>
            <div className={`border ${indexColors[index]} text-white rounded-b-md px-3 py-4`}>
                {/* <h2 class="text-sm mb-1">Most recent Waffle House index</h2> */}
                <Badge className=''>Green</Badge>
                <Badge className={`${indexColors[index]}`}>{indexStrings[index]}</Badge>
                <Badge className=''>Red</Badge>
                <p></p>
            </div>
        </div>
    );
}