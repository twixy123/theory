import type Id from '@/types/id'
import type { DocumentNode } from 'graphql'

interface TodoEmitBody {
  id: Id,
  query: DocumentNode
}

export default TodoEmitBody