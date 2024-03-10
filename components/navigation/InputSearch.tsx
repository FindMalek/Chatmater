"use client"

import { useState, useEffect } from "react";

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@component/ui/Command"
import { Input } from "@component/ui/Input";
import { placeholderTexts } from "@/config/search";

export function InputSearch() {
    const [open, setOpen] = useState(false)
    const [placeholderText, setPlaceholderText] = useState(placeholderTexts[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const nextIndex = (placeholderTexts.findIndex((text) => text === placeholderText) + 1) % placeholderTexts.length;

            setPlaceholderText(placeholderTexts[nextIndex]);
        }, 6000);
        return () => clearInterval(intervalId);
    }, [placeholderText]);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <div className="flex items-center w-full">
            <Input
                onClick={() => setOpen(true)}
                className="flex-grow max-h-8 px-3"
                placeholder={placeholderText}
            />
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        <CommandItem>Calendar</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>

    )
}