import type Id from '@/types/id'
import type User from '@/interfaces/user'

interface TodoItem {
  id: Id
  title: string
  completed: boolean
  user: User | null | undefined
}

export default TodoItem