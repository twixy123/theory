<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
header {
  margin-bottom: 24px;
}

header a {
  padding: 8px;
  text-transform: uppercase;
  text-decoration: none;
  color: blue;
}

header a:hover {
  text-decoration: underline;
}

header a.router-link-exact-active {
  color: lightcoral;
}
</style>
