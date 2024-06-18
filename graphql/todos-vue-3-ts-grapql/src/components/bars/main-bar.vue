<template>
  <div :class="[$style['block']]">
    <form @submit.prevent="onAdd">
      <input v-model.trim="add" type="text">
      <button type="submit">
        Add
      </button>
    </form>
    <form @submit.prevent="onSearch">
      <input v-model.trim="search" type="text">
      <button type="submit">
        Search
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MainBar',
})
</script>

<script lang="ts" setup>
import { useCssModule, shallowRef, computed } from 'vue'

const $style = useCssModule()
const $emits = defineEmits<{
  (e: 'search', val: string): string
  (e: 'add', val: string): string
}>()

const add = shallowRef<string>('')
const search = shallowRef<string>('')
const isAddEmpty = computed(() => {
  return add.value === ''
})
const isSearchEmpty = computed(() => {
  return search.value === ''
})

function onAdd () {
  if (!isAddEmpty.value) {
    $emits('add', add.value)
  }
}

function onSearch () {
  if (!isSearchEmpty.value) {
    $emits('search', search.value)
  }
}
</script>

<style module>
.block {
  width: 100%;
  border-bottom: 2px solid;
  border-bottom-color: var(--main-purple);
  padding-bottom: 24px;
  margin-bottom: 24px;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 24px;
}

.block form {
  width: calc(50% - 12px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.block input {
  flex: 1 10000000 auto;
  padding: 10px 24px;
  font-size: 24px;
  border: 1px solid;
  border-color: var(--main-purple);
  border-radius: 12px 0 0 12px;
}

.block button {
  padding: 11px 24px;
  background: #3f254b;
  color: white;
  border-radius: 0 12px 12px 0;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 24px;
}
</style>
