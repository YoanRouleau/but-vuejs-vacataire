<script>
import Card from '../components/Card.vue'
import EditModal from '../components/EditModal.vue'
import { data } from '../store.js'

export default {
  components: {EditModal, Card},
  data() {
    return {
      meme: null,
      data
    }
  },
  methods: {
    callback(memeId) {
      this.meme = memeId;
      console.log(meme)
    }
  },
}

</script>

<template>
  <main>
    <h1>Your Meme collection:</h1>
    <div class="cards-container">
      <Card v-for="obj in data.memes" :data="obj" @edit-meme="callback"/>
    </div>
    <EditModal v-if="meme" />
  </main>
</template>

<style>
  .cards-container{
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
    padding: 40px 0;
  }
</style>
