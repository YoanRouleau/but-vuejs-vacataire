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
            text0: this.newTextBox0 || ' ',
            text1: this.newTextBox1 || ' ',
            template_id: this.memeToEdit.id
          })
        }
        console.log(options.body.values())

        const res = await fetch('https://api.imgflip.com/caption_image', options);
        console.log(res);
        const data = await res.json()
        console.log(data)
        this.memeToEdit.imgSrc = data.data.url
        if( this.newName.length ) this.memeToEdit.name = this.newName
      }
    },
    mounted(){
      console.log(import.meta.env)
    }
  } 
</script>

<template>
  <main>
    <section class="meme-editor">
      <RouterLink to="/" class="meme-goback">⬅️ GO Back</RouterLink>
      <p>Meme name: <input type="text" v-model="memeToEdit.name"></p>
      <br>
      <p>New <strong>top</strong> text: <input type="text" v-model="newTextBox0"></p>
      <br>
      <p>New <strong>bottom</strong> text: <input type="text" v-model="newTextBox1"></p>
      <br>
      <div class="meme-item">
        <p>{{ memeToEdit.name }}</p>
        <img :src="memeToEdit.imgSrc" class="meme-image"/>
      </div>
      <br>
      <pre>
        {{ memeToEdit }}
      </pre>
      <button @click="editMeme" class="meme-button" :disabled="newTextBox0.length == 0 && newTextBox1.length == 0">Edit my Meme</button>
    </section>
  </main>
</template>

<style>
  .meme-editor{
    padding: 40px;
  }
  .meme-goback {
    display: block;
    margin-bottom: 20px;
  }
</style>