import { BlockTypeSelect, BoldItalicUnderlineToggles, ListsToggle, MDXEditor, UndoRedo, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, toolbarPlugin } from '@mdxeditor/editor'

import { Save, Trash } from "lucide-react"
import { Button } from "./ui/button"
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Input } from "./ui/input"


export default function Note() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="border border-foreground/20 hover:border-foreground/40 rounded-xl p-4 bg-white/5 hover:bg-white/10 backdrop-blur-md transition">
                    <div className="flex justify-between mb-2">
                        <h1>Note Title</h1>

                        <div className="flex gap-1">
                            {/* TODO: */}
                            <Trash className="text-rose-500/50 w-4 h-4" />
                        </div>
                    </div>
                    <div>
                        <p className="text-muted-foreground text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit numquam dicta ut ex inventore amet, et ipsum iste consectetur perspiciatis.
                        </p>
                    </div>
                </div>
            </DialogTrigger>

            {/* Form */}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit</DialogTitle>
                </DialogHeader>
                <Input placeholder="Note Title" value={"Note Title"} />
                <MDXEditor
                    className='h-56 dark-theme dark-editor z-[1000]'
                    // TODO:
                    markdown={"# Hello world"}
                    plugins={[
                        headingsPlugin(),
                        listsPlugin(),
                        quotePlugin(),
                        thematicBreakPlugin(),
                        toolbarPlugin({
                            toolbarContents: () => (
                                <>
                                    <UndoRedo />
                                    <BlockTypeSelect />
                                    <BoldItalicUnderlineToggles />
                                    <ListsToggle />
                                </>
                            )
                        })
                    ]}
                    onChange={e => console.log(e)
                    }
                    contentEditableClassName="prose"
                />
                <DialogClose className="w-full">
                    <Button className="w-full">
                        <Save className="w-4 h-4 mr-2" />
                        Save</Button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}