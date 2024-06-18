import { mount, shallowMount } from '@vue/test-utils'
import type { VueWrapper } from '@vue/test-utils'
import TodoList from '@/components/todo/list.vue'

describe('TODO LIST', () => {
  const todos = [
    {
      id: 1,
      text: 'smthg txt',
      completed: false
    }
  ]

  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(TodoList)
  })

  test('first test example', () => {
    wrapper.vm.updateTodosForTest(todos)
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe('Something text')
  })

  test('second test example', async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1)

    await wrapper.get('[data-test="new-todo"]').setValue('new Todo')
    await wrapper.get('[data-test="form"]').trigger('submit')

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)
  })

  test('third test example', async () => {
    const todos = wrapper.findAll('[data-test="todo"]')

    expect(todos).toHaveLength(1)
    expect(todos[0].text()).toBe('Something text')
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })

  test('try to rewrite data', async () => {
    wrapper = mount(TodoList, {
      data() {
        return {
          todos
        }
      }
    })
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe('Something text')
  })
})