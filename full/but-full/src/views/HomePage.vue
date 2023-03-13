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
    editMemeCallback(memeId) {
      this.passedMemeId = memeId
    },
    closeMemeCallback() {
      this.passedMemeId = null
    },
    testDraggable() {
      console.log("Test")
    }
  },
}

</script>

<template>
  <main>
    <h1>Your Meme collection:</h1>
    <RouterLink to="/addCard" class="meme-goback">🆕 New Meme</RouterLink>
    <div class="cards-container">
      <Card 
        v-for="obj in data.memes" 
        :data="obj" 
        @edit-meme="editMemeCallback(obj.id)"/>
    </div>
    <EditModal 
    :passedMemeId="passedMemeId"
    @close-meme="closeMemeCallback"/>
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
