<template>
  <li :class="$style['list-item']">
    <div
      :class="[
        $style['list-item__checkbox'],
        {
          [$style['list-item__checkbox--checked']]: todo.completed
        }
      ]"
      @click="updateTodo"
    >
      <span v-if="todo.completed"> &#10004; </span>
    </div>
    <div>
      <h3>{{ todo.title }}</h3>
      <p v-if="todo.user">
        Todo from: <b>{{ todo.user?.name }}</b>
      </p>
    </div>
    <button :class="$style['list-item__delete-btn']" @click="deleteTodo">
      &#10008;
    </button>
  </li>
</template>

<script lang="ts">
import { defineComponent, toRef } from 'vue'

export default defineComponent({
  name: 'TodoItem',
})
</script>

<script lang="ts" setup>
import type TodoItem from '@/interfaces/todo/todo-item'
import type TodoEmitBody from '@/interfaces/todo/todo-emit-body'

import { useCssModule } from 'vue'
import { gql } from 'apollo-boost'

const $style = useCssModule()
const $props = defineProps<{
  todo: TodoItem
}>()
const $emits = defineEmits<{
  (e: 'update', body: TodoEmitBody): TodoEmitBody
  (e: 'deleteTodo', body: TodoEmitBody): TodoEmitBody
}>()

const todo = toRef($props, 'todo')

function updateTodo () {
  const query = gql`
    mutation ChangeStatus {
      updateTodo( id: ${todo.value.id}, input: {completed: ${!todo.value.completed}} ) {
        id
        completed
      }
    }
  `

  $emits('update', {
    id: todo.value.id,
    query
  })
}

function deleteTodo () {
  const query = gql`
    mutation DeleteTodo {
      deleteTodo( id: ${todo.value.id} )
    }
  `

  $emits('deleteTodo', {
    id: todo.value.id,
    query
  })
}
</script>

<style module>
.list-item {
  border: 2px solid #3f254b;
  border-radius: 6px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 12px;
}

.list-item:not(:last-child) {
  margin-bottom: 24px;
}

.list-item__checkbox {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 5px;
  border: 1px solid #3f254b;
}

.list-item__checkbox span {
  color: white;
}

.list-item__checkbox--checked {
  background: #3f254b;
}

.list-item__delete-btn {
  margin-left: auto;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 5px;
  border: none;
  outline: none;
  background: #3f254b;
  color: white;
  line-height: 1;
}
</style>
