
import { useTodos } from "../hooks/useTodos"
import { TodoItem } from "../components/TodoItem"

export default function Home() {
  const { todos, input, setInput, addTodo, removeTodo } = useTodos()

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Todo App</h1>
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border flex-1 px-3 py-2 rounded"
            placeholder="Add new todo..."
          />
          <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <TodoItem key={index} text={todo} onDelete={() => removeTodo(index)} />
          ))}
        </ul>
      </div>
    </div>
  )
}
