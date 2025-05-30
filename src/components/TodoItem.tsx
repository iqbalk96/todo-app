
interface TodoItemProps {
  text: string
  onDelete: () => void
}

export function TodoItem({ text, onDelete }: TodoItemProps) {
  return (
    <li className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
      <span>{text}</span>
      <button onClick={onDelete} className="text-red-500 hover:text-red-700 text-sm">
        Delete
      </button>
    </li>
  )
}
