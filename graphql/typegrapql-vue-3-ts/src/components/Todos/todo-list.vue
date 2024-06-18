<template>
  <ul v-if="todos.length" :class="$style['list']">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @update="onUpdate"
      @delete-todo="onDelete"
    />
  </ul>
  <p v-else>
    No data to display
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TodosList',
})
</script>

<script lang="ts" setup>
import TodoItem from '@/components/Todos/todo-item.vue'

import type TodoEmitBody from '@/interfaces/todo/todo-emit-body'
import type TodoItemType from '@/interfaces/todo/todo-item'

import { useCssModule, toRef } from 'vue'

const $style = useCssModule()
const $props = defineProps<{
  todos: TodoItemType[]
}>()
const $emits = defineEmits<{
  (e: 'update', query: TodoEmitBody): TodoEmitBody
  (e: 'deleteTodo', query: TodoEmitBody): TodoEmitBody
}>()

const todos = toRef($props, 'todos')

function onUpdate (query: TodoEmitBody) {
  $emits('update', query)
}

function onDelete (query: TodoEmitBody) {
  $emits('deleteTodo', query)
}
</script>

<style module>
.list {
}
</style>
