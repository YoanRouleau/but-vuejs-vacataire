<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>The Memes Warehouse</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
  header{
    min-height: 120px;
    display: flex;
    align-items: center;
    padding: 40px;
    background-color: black;
    color: white;
  }
</style>
