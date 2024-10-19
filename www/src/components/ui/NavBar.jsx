"use client";

import * as React from "react";

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
	return (
		<NavigationMenu class="">
            <NavigationMenuList>
			<NavigationMenuItem>
				<NavigationMenuLink className={navigationMenuTriggerStyle()}>
					Home
				</NavigationMenuLink>
			</NavigationMenuItem>
            <NavigationMenuItem>
				<NavigationMenuLink className={navigationMenuTriggerStyle()}>
					Help
				</NavigationMenuLink>
			</NavigationMenuItem>
            </NavigationMenuList>
		</NavigationMenu>
	);
}

