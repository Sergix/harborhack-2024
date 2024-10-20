import { useState } from "react";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

import { Slider } from "@/components/ui/slider";

export default function Menu({ maxDistance, setMaxDistance }) {

    const handleSliderChange = (value) => {
        setMaxDistance(value[0]);
    };
	return (
		<Popover>
			<PopoverTrigger class="absolute top-2 left-2 z-10 rounded-lg p-2 shadow-md bg-blue-500">
				Filter
			</PopoverTrigger>
			<PopoverContent>
				<div class="flex p-1">
					<p class="mb-2">MaxDistance: {maxDistance}</p>
				</div>
				<Slider defaultValue={[maxDistance]} onValueChange={handleSliderChange} max={20} min={1} step={1} />
			</PopoverContent>
		</Popover>
	);
}
