import { cn } from "@/lib/utils";
import { Check, Trash, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

interface TodoProps {
    isComplete?: boolean
}

export default function Todo({ isComplete }: TodoProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="border border-foreground/20 hover:border-foreground/40 rounded-xl p-4 bg-white/5 hover:bg-white/10 backdrop-blur-md transition">
                    <div className="flex justify-between items-center">
                        <h1 className={cn(
                            isComplete && "text-muted-foreground line-through"
                        )}>Note Title</h1>

                        <div className="flex gap-2">
                            {/* TODO: */}
                            {
                                !isComplete ?
                                    <Check className="text-green-500 w-6 h-6 bg-foreground/0 hover:bg-foreground/10 transition p-1 rounded-sm" />
                                    :
                                    <X className="text-green-500 w-6 h-6 bg-foreground/0 hover:bg-foreground/10 transition p-1 rounded-sm" />
                            }
                            <Trash className="text-rose-500/50 w-6 h-6 bg-foreground/0 hover:bg-foreground/10 transition p-1 rounded-sm" />
                        </div>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit</DialogTitle>
                </DialogHeader>
                <div>
                    <Input placeholder="Note Title" value={"Note Title"} />
                </div>
            </DialogContent>
        </Dialog>
    )
}
