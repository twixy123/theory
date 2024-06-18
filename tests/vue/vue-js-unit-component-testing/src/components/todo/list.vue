<template>
  <ul :class="[$style['list']]">
    <li v-for="item in todos" :key="item.id" data-test="todo">
      {{ item.text }}
    </li>
  </ul>
  <form data-test="form" @submit.prevent="createTodo">
    <input data-test="new-todo" type="text" v-model="newTodo" />
  </form>
</template>

<script>
  export default {
    name: 'TodoList',
    data() {
      return {
        todos: [
          {
            id: 1,
            text: 'Something text',
            completed: false,
          },
        ],
        newTodo: '',
      }
    },
    methods: {
      createTodo() {
        this.todos.push({
          id: this.todos[this.todos.length - 1].id + 1,
          text: this.newTodo,
          completed: false,
        })
        this.newTodo = ''
      },
    },
  }
</script>

<style module>
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
