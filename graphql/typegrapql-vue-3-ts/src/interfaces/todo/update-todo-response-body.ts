import type TodoItem from '@/interfaces/todo/todo-item'

type UpdateTodoResponseBody = Pick<TodoItem, 'completed' | 'id'>

export default UpdateTodoResponseBody