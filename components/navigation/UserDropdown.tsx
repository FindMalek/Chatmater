import Link from "next/link";

import {
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuContent
} from "@component/ui/DropdownMenu";
import { ThemeSwitch } from "@component/config/ThemeSwitch";
import { SignoutButton } from "@component/config/SignoutButton";

export function UserDropdown() {
    return (
        <DropdownMenuContent className="min-w-[250px]">
            <DropdownMenuLabel>
                Settings
            </DropdownMenuLabel>
            <DropdownMenuItem>
                <Link href="/account" className="w-full">
                    Account
                </Link>
            </DropdownMenuItem>
            <div className="flex flex-row justify-between items-center p-2">
                <p className="text-sm">Theme</p>
                <ThemeSwitch />
            </div>
            <SignoutButton />
        </DropdownMenuContent>
    );
}
