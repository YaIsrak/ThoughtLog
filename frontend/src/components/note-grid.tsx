import Note from "./note";


export default function NotesGrid() {
    return (
        <div className="col-span-2">
            <h1 className="text-xl mb-4">Notes 📘</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4  items-start w-full">
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
            </div>
        </div>
    )
}

