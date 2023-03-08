<script>
  import { data } from '../store.js'

  export default{
    data(){
      return {
        search: '',
        apiUsername: import.meta.env.VITE_IMGFLIP_USERNAME,
        apiPassword: import.meta.env.VITE_IMGFLIP_PASSWORD,
        name: '',
        textBox0: '',
        textBox1: '',
        newMeme: '',
        matchingMemes: []
      }
    },
    methods: {
      searchMeme: async function(e){
        return fetch( "https://api.imgflip.com/get_memes" )
            .then(response => response.json())
            .then( ({data}) => {
                this.matchingMemes = data.memes.filter( meme => {
                    return this.formattedName( meme.name ).indexOf( this.formattedName(this.search) ) > -1
                })    
            })
            .catch(error => {
                console.log(error)
            })
      },
      addMeme: async function(){
        var selectedMeme = document.querySelector('option')

        const options = {
          method: 'POST',
          headers: {
            cookie: 'claim_key=M09Hir332NYnO9N0RfJLn09eIhB6bhgl',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({
            username: this.apiUsername,
            password: this.apiPassword,
            text0: this.textBox0 || ' ',
            text1: this.textBox1 || ' ',
            template_id: parseInt(selectedMeme.getAttribute('data-id'))
          })
        }

        const fetchRes = await fetch('https://api.imgflip.com/caption_image', options);
        console.log(fetchRes);
        const fetchData = await fetchRes.json()
        data.memes.push({
            name: selectedMeme.value,
            id: parseInt(selectedMeme.getAttribute('data-id')),
            imgSrc: fetchData.data.url
        })
        alert("Your Meme has been created!")
      },
      formattedName: function(string){
        return string.toLowerCase()
      }
    },
    mounted(){
        console.log(import.meta.env)
        const opts = document.getElementById('selected-meme').childNodes;
        const dinput = document.getElementById('search');
        let eventSource = null;
        let value = '';
        dinput.addEventListener('keydown', (e) => {
            eventSource = e.key ? 'input' : 'list';
        });
        dinput.addEventListener('input', (e) => {
            value = e.target.value;
            if (eventSource === 'list') {
                console.log(value)
            }
        });
    }
  } 
</script>

<template>
  <main>
    <section class="meme-editor">
        <RouterLink to="/" class="meme-goback">⬅️ GO Back</RouterLink>
        <div>
            Search for a meme first: <input type="text" name="search" id="search" v-model="search" list="selected-meme" @keyup="searchMeme">
            <datalist id="selected-meme">
                <option v-for="meme in matchingMemes" :value="meme.name" :data-id="meme.id" :data-url="meme.url">{{ meme.url }}</option>
            </datalist>
        </div>
        <p>New <strong>top</strong> text: <input type="text" v-model="textBox0"></p>
        <br>
        <p>New <strong>bottom</strong> text: <input type="text" v-model="textBox1"></p>
        <button @click="addMeme" class="meme-button" :disabled="textBox0.length == 0 && textBox1.length == 0">Create Meme</button>
        <img id="output" src="">
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