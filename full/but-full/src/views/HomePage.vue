<script>
import Card from '../components/Card.vue'
import EditModal from '../components/EditModal.vue'
import { data } from '../store.js'

export default {
  components: { 
    EditModal, 
    Card
  },
  data() {
    return {
      passedMemeId: null,
      data
    }
  },
  methods: {
    editMeme(memeId) {
      console.log('test')
      this.passedMemeId = memeId
    }
  },
}

</script>

<template>
  <main>
    <h1>Your Meme collection:</h1>
    <div class="cards-container">
      <Card v-for="obj in data.memes" :data="obj" @edit-meme="editMeme(obj.id)"/>
    </div>
    <EditModal :passedMemeId="passedMemeId"/>
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
