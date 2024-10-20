"use client";

import { useNavigate } from "react-router-dom";

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// eslint-disable-next-line react/prop-types
export default function NavBar({ page }) {
	const navigate = useNavigate();

	function getPageStyle(v) {
		if (page === v) {
			return ' !text-neutral-500'
		}
	}

	return (
		//colors tbd
		<header className="w-full fixed top-0 z-50 ">
			<div className='m-2 shadow-xl px-3 py-2 rounded-full bg-neutral-200 justify-center content-center acrylic'>
			<NavigationMenu className='mx-auto'>
				<NavigationMenuList>
					<img className="w-24 mr-auto pr-4" src='/logo.png'></img>
					<NavigationMenuItem onClick={()=>navigate("/")}>
						<NavigationMenuLink className={'!bg-neutral-200 hover:!bg-neutral-300 acrylic ' + navigationMenuTriggerStyle() + getPageStyle('home') }>
							Browse
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem onClick={()=>navigate("/request")}>
						<NavigationMenuLink className={'!bg-neutral-200 hover:!bg-neutral-300 acrylic ' + navigationMenuTriggerStyle() + getPageStyle('request')}>
							Request
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem onClick={()=>navigate("/map")}>
						<NavigationMenuLink className={'!bg-neutral-200 hover:!bg-neutral-300 acrylic ' + navigationMenuTriggerStyle() + getPageStyle('map')}>
							Map
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			</div>
		</header>
	);
}
