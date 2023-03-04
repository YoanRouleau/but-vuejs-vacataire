<script setup>
import Card from '../components/Card.vue'
import { data } from '../store.js'
</script>

<template>
  <h1>Your Meme collection:</h1>
  <main>
    <div class="cards-container">
      <Card v-for="obj in data.memes" :data="obj"/>
    </div>
  </main>
</template>

<style>
  .cards-container{
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    padding: 40px;
  }
</style>