"use client";

import * as React from "react";
import { useNavigate } from "react-router-dom";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
	// const navigate = useNavigate();
	const navigate = useNavigate();
	const test = "asdf";

	return (
		//colors tbd
		<header class="w-screen h-16 bg-secondary fixed justify-center content-center top-0 z-50 p-2">
			<NavigationMenu class="">
				<NavigationMenuList>
					<img className="w-32 mr-auto" src='/logo.png'></img>
					<NavigationMenuItem onClick={()=>navigate("/")}>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Home
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem onClick={()=>navigate("/request")}>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Request
						</NavigationMenuLink>
					</NavigationMenuItem>
					<NavigationMenuItem onClick={()=>navigate("/map")}>
						<NavigationMenuLink className={navigationMenuTriggerStyle()}>
							Map
						</NavigationMenuLink>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</header>
	);
}
