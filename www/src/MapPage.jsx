import NavBar from "./components/Navigation/NavBar";
import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

export default function MapPage() {
	return (
		<div>
			<NavBar />
			<div class="w-vw h-vh flex flex-col items-center justify-center">
				<MapPiece />
                <DrawerComponent></DrawerComponent>
			</div>
		</div>
	);
}

const MapPiece = () => {
	return (
		<div class="w-[80vw] h-[80vw] bg-slate-200 mt-16">
			<p>This is a map!</p>
		</div>
	);
};

const DrawerComponent = () => {
	return (
		<Drawer>
			<DrawerTrigger class="bg-sky-100 rounded-lg p-2">Open</DrawerTrigger>
			<DrawerContent>
                <div class="h-[90vh]">
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
