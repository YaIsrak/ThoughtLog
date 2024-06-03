import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const formSchema = z.object({
    name: z.string().min(2, "Title must be at least 2 characters long"),
    type: z.string(),
})

export default function NoteForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            type: "note",
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // TODO: create note
        toast.success(values.type, {
            description: "Your note has been created.",
        })

        form.reset()
    }


    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button className="rounded-xl">
                    New
                    <Plus className="w-3 h-3 ml-2" />
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
                            name="type"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="note">Note</SelectItem>
                                            <SelectItem value="todo">Todo</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-red-500 text-destructive" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Note name</FormLabel>
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
