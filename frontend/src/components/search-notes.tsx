import { useState } from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function SearchNotes() {
    const [open, setOpen] = useState(false)

    return (
        <div className=" shrink">
            <Button
                variant={"outline"}
                onClick={() => setOpen(true)}
                className="border-foreground/40 hover:border-foreground/70 transition rounded-xl w-80 text-muted-foreground"
            >
                <Search className="w-4 h-4 mr-2" />
                Search notes...
            </Button>
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
