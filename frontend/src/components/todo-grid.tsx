import Todo from "./todo";

export default function TodoGrid() {
    return (
        <div className="space-y-4">
            <div>
                <h1 className="text-xl mb-4">Todo ☑️</h1>
                <div className="flex flex-col gap-2">
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                    <Todo />
                </div>
            </div>

            <div>
                <h1 className="text-xl mb-4">Completed ✅</h1>
                <div className="flex flex-col gap-2">
                    <Todo isComplete />
                    <Todo isComplete />
                    <Todo isComplete />
                    <Todo isComplete />
                    <Todo isComplete />
                    <Todo isComplete />
                </div>
            </div>
        </div>
    )
}
