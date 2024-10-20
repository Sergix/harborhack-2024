
import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

export default function RequestDrawer(){
	return (
		<Drawer>
			<DrawerTrigger class="bg-sky-100 rounded-lg p-2">See Requests</DrawerTrigger>
			<DrawerContent>
				<div className="h-[90vh]">
					<DrawerHeader>
						<DrawerTitle>See Local Requests</DrawerTitle>
						<DrawerDescription>New requests will appear here</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter>
						<DrawerClose>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
                    
				</div>
			</DrawerContent>
		</Drawer>
	);
};
