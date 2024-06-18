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
import {onBeforeUnmount, onMounted, ref} from "vue";

const counter = useCounterStore();

const STATE_KEY = 'tabState';
const channel = ref<BroadcastChannel | null>(null);

onMounted(() => {
  channel.value = new BroadcastChannel('desired-emit-id');
  getState();

  if (channel.value) {
    channel.value.addEventListener('message', onChannelMessage);
  }
})

onBeforeUnmount(() => {
  if (channel.value) {
    channel.value.removeEventListener('message', onChannelMessage)
  }
})

function onChannelMessage(event: MessageEvent<number>) {
  // event.target.name === 'desired-emit-id'
  const newState = event.data || counter.count;
  channelUpdateState(newState)
}

function channelPostMessage(newState: number) {
  if (!channel.value) return;
  channel.value.postMessage(newState);
}

function channelUpdateState(newState: number) {
  if (newState === counter.count) return;
  counter.count = newState;
}

function getState() {
  const state = localStorage.getItem(STATE_KEY);
  if (!state) return;

  const currentCount = JSON.parse(state)?.counter || counter.count;
  channelUpdateState(currentCount);
}

function setState(newState: number) {
  localStorage.setItem(STATE_KEY, JSON.stringify({counter: newState}));
  channelPostMessage(newState);
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
