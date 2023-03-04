<script>
  import { data } from '../store.js'
  export default{
    data(){
      return {
        memeToEdit: data.memes.filter(e => e.id == parseInt(this.$route.params.id))[0],
        apiUsername: import.meta.env.VITE_IMGFLIP_USERNAME,
        apiPassword: import.meta.env.VITE_IMGFLIP_PASSWORD,
        newName: '',
        newTextBox0: '',
        newTextBox1: ''
      }
    },
    methods: {
      editMeme: async function(){
        const options = {
          method: 'POST',
          headers: {
            cookie: 'claim_key=M09Hir332NYnO9N0RfJLn09eIhB6bhgl',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            username: this.apiUsername,
            password: this.apiPassword,
            text0: this.newTextBox0,
            text1: this.newTextBox1,
            template_id: this.memeToEdit.id
          })
        }

        const res = await fetch('https://api.imgflip.com/caption_image', options);
        const data = await res.json()
        this.memeToEdit.imgSrc = data.data.url
        if( this.newName.length ) this.memeToEdit.name = this.newName
      }
    },
    mounted(){
      // console.log(import.meta.env)
    }
  } 
</script>

<template>
  <main>
    <p>New meme name: <input type="text" v-model="newName"></p>
    <div class="meme-item">
      <p>{{ memeToEdit.name }}</p>
      <img :src="memeToEdit.imgSrc" class="meme-image"/>
    </div>
    <pre>
      {{ memeToEdit }}
    </pre>
    <button @click="editMeme">save</button>
  </main>
</template>

<style>

</style>