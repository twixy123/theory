import { mount } from '@vue/test-utils'
import TodoList from '@/components/todo/list.vue'

describe('TODO LIST', () => {
  const todos = [
    {
      id: 1,
      text: 'smthg txt',
      completed: false
    }
  ]

  const wrapper = mount(TodoList)

  test('first test example', () => {
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe('Something text')
  })

  test('second test example', async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    const input = wrapper.get('[data-test="new-todo"]')
    await input.setValue('new Todo')
    // expect(input)

    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })
})