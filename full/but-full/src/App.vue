<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <span class="header-title">The Memes Warehouse</span>
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
  .header-title{
    font-size: 2.5em;
    font-weight: bold;
    margin-bottom: 30px;
  }
  nav a{
    text-decoration: unset;
    margin-right: 10px;
    color: white; 
  }
  nav a.router-link-active{
    text-decoration: underline;
  }
</style>
