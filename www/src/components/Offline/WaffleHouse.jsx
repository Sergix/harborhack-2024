export default function WaffleHouse() {
    const index = 1;
    const indexStrings = ["Green", "Yellow", "Red"];
    const indexColors = ["bg-green-700", "bg-yellow-500", "bg-red-700"];
    return (
        <div class={`rounded-md p-4 ${indexColors[index]} text-white mt-4`}>
            <h2 class="text-sm font-bold mb-2">Most recent Waffle House index: {indexStrings[index]}</h2>
            <p></p>
        </div>
    );
}