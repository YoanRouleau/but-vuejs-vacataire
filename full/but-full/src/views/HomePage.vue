<script>
import draggable from 'vuedraggable'
import Card from '../components/Card.vue'
import EditModal from '../components/EditModal.vue'
import { data } from '../store.js'

export default {
  components: { 
    EditModal, 
    Card,
    draggable
  },
  data() {
    return {
      passedMemeId: null,
      data1: data.memes1,
      data2: data.memes2
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
      
    }
  },
}

</script>

<template>
  <main>
    <h1>Your Meme collection:</h1>
    <RouterLink to="/addCard" class="meme-goback">🆕 New Meme</RouterLink>
    <div class="cards-wrapper">
      <div class="cards-container">
        <h3>List 1</h3>
        <draggable
          class="list-group"
          :list="data1"
          itemKey="name">
          <template #item="{ element }">
            <Card 
              :data="element" 
              @edit-meme="editMemeCallback(element.id)"/>
          </template>
        </draggable>
      </div>
      <div class="cards-container">
        <h3>List 2</h3>
        <draggable
          class="list-group"
          :list="data2"
          itemKey="name">
          <template #item="{ element }">
            <Card 
              :data="element" 
              @edit-meme="editMemeCallback(element.id)"/>
          </template>
        </draggable>
      </div>
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
  .cards-wrapper{
    display: flex;
  }
</style>
