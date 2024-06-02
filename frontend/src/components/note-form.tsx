import { Pencil } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2, "Title must be at least 2 characters long"),
})

export default function NoteForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // TODO: create note
        toast.success(values.name, {
            description: "Your note has been created.",
        })

        form.reset()
    }


    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    New note
                    <Pencil className="w-3 h-3 ml-2" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create a note</DialogTitle>
                    <DialogDescription>
                        Make a note by adding a title. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>

                {/* Form */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter a name" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-red-500 text-destructive" />
                                </FormItem>
                            )}
                        />
                        <DialogClose asChild>
                            <Button
                                disabled={!form.formState.isValid}
                                type="submit">Save</Button>
                        </DialogClose>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
