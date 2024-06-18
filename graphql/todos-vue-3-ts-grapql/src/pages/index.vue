<template>
  <div :class="$style['block']">
    <h1>TODOS</h1>
    <MainBar @search="fetchTodos" @add="onAdd" />
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
  name: 'MainPage',
})
</script>

<script lang="ts" setup>
import type TodoItem from '@/interfaces/todo/todo-item'
import type TodoEmitBody from '@/interfaces/todo/todo-emit-body'
import type UpdateTodoResponseBody from '@/interfaces/todo/update-todo-response-body'

import TodoList from '@/components/Todos/todo-list.vue'
import MainBar from '@/components/bars/main-bar.vue'

import { useCssModule, ref, onMounted } from 'vue'
import fetchWrapper from '@/helpers/graphql-fetch-wrapper'

const $style = useCssModule()

const todos = ref<TodoItem[]>([])

onMounted(fetchTodos)

async function fetchTodos (search: string = '') {
  try {
    const searchQuery = search !== '' ? `search: {q: "${search}"}` : ''
    const getTodos: string = `
      query Todos {
        todos (
          options: {
            sort: {
              field: "id"
              order: DESC
            }
            slice: {
              limit: 100
            }
            ${searchQuery}
          }
        )  {
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
    `
    const {
      data: {
        todos: { data },
      },
    } = await fetchWrapper<{
      data: {
        todos: {
          data: TodoItem[]
        }
      }
    }>(getTodos)

    todos.value = data
  } catch (error) {
    console.log('Error fetchTodos:', error)
  }
}

async function onUpdateTodo ({ id, query }: TodoEmitBody) {
  try {
    const {
      data: { updateTodo: updatedTodo },
    } = await fetchWrapper<{
      data: {
        updateTodo: UpdateTodoResponseBody
      }
    }>(query)

    const todo = todos.value.find((todo) => todo.id === id)

    if (todo) {
      todo.completed = !todo.completed
    }
  } catch (error) {
    console.log('Error onUpdateTodo:', error)
  }
}

async function onDeleteTodo ({ id, query }: TodoEmitBody) {
  try {
    await fetchWrapper<{
      data: {
        deleteTodo: boolean
      }
    }>(query)

    todos.value = todos.value.filter((todo) => todo.id !== id)
  } catch (error) {
    console.log('Error onDeleteTodo:', error)
  }
}

async function onAdd (add: string) {
  try {
    const createTodo: string = `
      mutation CreateTodo {
        createTodo(
          input: {
            title: "${add}"
            completed: false
          }
        ) {
          id
          title
          completed
        }
      }
    `
    const {
      data: { createTodo: createdTodo },
    } = await fetchWrapper<{
      data: {
        createTodo: TodoItem
      }
    }>(createTodo)

    todos.value.unshift(createdTodo)
  } catch (error) {
    console.log('error onAdd: ', error)
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
