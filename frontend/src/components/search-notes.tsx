import { useState } from "react";
import { Input } from "./ui/input";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";

export default function SearchNotes() {
    const [open, setOpen] = useState(true)

    return (
        <div>
            <Input
                onClick={() => setOpen(true)}
                placeholder="Search notes..."
                className="border-foreground/40 hover:border-foreground/70 transition rounded-xl" />

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type to search..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>

                    {/* Todo */}
                    <CommandGroup>
                        <CommandItem>Calendar</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Calculator</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    )
}
