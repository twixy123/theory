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
import {getCounterState} from "@/services/indexedDB";

const counter = useCounterStore();


onMounted(async () => {
  const counterInMounted = await getCounterState();
  // eslint-disable-next-line no-console
  console.log("%c counterInMounted", "color: aqua", counterInMounted);

})

onBeforeUnmount(() => {
})

const onIncrement = () => {
  counter.increment();
}

const onDecrement = () => {
  counter.decrement();
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
