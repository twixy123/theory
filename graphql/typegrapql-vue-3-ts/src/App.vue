<template>
  <MainLoader />
  <div :class="$style['block']">
    <h1>TODOS</h1>
    <MainBar @search="getTodos" @add="onAdd" />
    <TodoList
      :todos="todos"
      @update="onUpdateTodo"
      @delete-todo="onDeleteTodo"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<script lang="ts" setup>
import type TodoItem from '@/interfaces/todo/todo-item'
import type TodoEmitBody from '@/interfaces/todo/todo-emit-body'
import type UpdateTodoResponseBody from '@/interfaces/todo/update-todo-response-body'

import MainBar from '@/components/bars/main-bar.vue'
import TodoList from '@/components/Todos/todo-list.vue'
import MainLoader from '@/components/ui/main-loader.vue'

import { onMounted, ref, useCssModule } from 'vue'
import { useApollo } from '@/helpers/apollo'
import { gql } from 'apollo-boost'

const { query, mutate } = useApollo
const $style = useCssModule()

const todos = ref<TodoItem[]>([])

onMounted(() => {
  getTodos()
})

async function getTodos (search: string = '') {
  const result = await query<{ todos: { data: TodoItem[] } }>({
    query: gql`
      query ($search: String!) {
        todos(
          options: {
            sort: { field: "id", order: DESC }
            slice: { limit: 100, start: 0 }
            search: { q: $search }
          }
        ) {
          data {
            id
            title
            completed
            user {
              id
              name
            }
          }
        }
      }
    `,
    variables: {
      search,
    },
  })

  if (result.error) {
    console.log('Error getTodos: ', result.error)
  } else {
    todos.value = result.data!.todos.data
  }
}

async function onUpdateTodo ({ id, query }: TodoEmitBody) {
  const result = await mutate<{ updateTodo: UpdateTodoResponseBody }>({
    mutation: query,
  })

  if (result.error) {
    console.log('Error onUpdateTodo: ', result.error)
  } else {
    const todo = todos.value.find((todo) => todo.id === id)

    if (todo) {
      todo.completed = !todo.completed
    }
  }
}

async function onDeleteTodo ({ id, query }: TodoEmitBody) {
  const result = await mutate<{ deleteTodo: boolean }>({
    mutation: query,
  })

  if (result.error) {
    console.log('Error onUpdateTodo: ', result.error)
  } else {
    todos.value = todos.value.filter((todo) => todo.id !== id)
  }
}

async function onAdd (add: string) {
  const result = await mutate<{ createTodo: TodoItem }>({
    mutation: gql`
      mutation ($title: String!) {
        createTodo(input: { title: $title, completed: false }) {
          id
          title
          completed
        }
      }
    `,
    variables: {
      title: add,
    },
  })

  if (result.error) {
    console.log('Error onUpdateTodo: ', result.error)
  } else {
    const createdTodo = result.data!.createTodo

    todos.value.unshift(createdTodo)
  }
}
</script>

<style module>
.block {
  max-width: 940px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 80px;
}

.block h1 {
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
}
</style>
