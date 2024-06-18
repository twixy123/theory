<template>
  <main>
    <h1>Home view</h1>
    <p>Counter - {{ counter.count }}</p>
    <div class="counter-btns">
      <button @click="onIncrement">+</button>
      <button @click="onDecrement">-</button>
    </div>
  </main>
</template>

<script setup lang="ts">
import {useCounterStore} from "@/stores/counter";
import {onBeforeUnmount, onMounted} from "vue";

const counter = useCounterStore();

const STATE_KEY = 'tabState';

onMounted(() => {
  getState();

  window.addEventListener('storage', onStorageUpdate);
})

onBeforeUnmount(() => {
  window.removeEventListener('storage', onStorageUpdate)
})

function onStorageUpdate(event: StorageEvent) {
  if (event.key === STATE_KEY) {
    getState();
  }
}

function getState() {
  const state = localStorage.getItem(STATE_KEY);
  if (!state) return;

  const currentCount = JSON.parse(state)?.counter || counter.count
  if (currentCount === counter.count) return;

  counter.count = JSON.parse(state).counter
}

function setState(newState: number) {
  localStorage.setItem(STATE_KEY, JSON.stringify({counter: newState}));
}

const onIncrement = () => {
  counter.increment();
  setState(counter.count);
}

const onDecrement = () => {
  counter.decrement();
  setState(counter.count);
}

</script>

<style>
.counter-btns {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 16px;
}

.counter-btns button {
  width: 30px;
  height: 24px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
