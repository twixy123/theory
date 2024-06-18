<template>
  <ul :class="[style['list']]">
    <li v-for="item in todos" :key="item.id" data-test="todo" :class="[item.completed ? 'completed' : '']">
      {{ item.text }}
      <input
        type="checkbox"
        v-model="item.completed"
        data-test="todo-checkbox"
      >
    </li>
  </ul>
  <form data-test="form" @submit.prevent="createTodo">
    <input data-test="new-todo" type="text" v-model="newTodo" />
  </form>
</template>

<script lang="ts">
  import { defineComponent, ref, useCssModule } from 'vue'

  export default defineComponent({
    name: 'TodoList',
    setup(_, {expose}) {
      const style = useCssModule()

      const newTodo = ref('')
      const todos = ref<any[]>([
        {
          id: 1,
          text: 'Something text',
          completed: false,
        },
      ])

      function createTodo() {
        todos.value.push({
          id: todos.value[todos.value.length - 1].id + 1,
          text: newTodo.value,
          completed: false,
        })
        newTodo.value = ''
      }

      function updateTodosForTest(data: any[]) {
        todos.value = [...data]
      }

      expose({updateTodosForTest})

      return {
        style,
        todos,
        newTodo,
        createTodo,
        updateTodosForTest
      }
    },
  })
</script>

<style module>
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
