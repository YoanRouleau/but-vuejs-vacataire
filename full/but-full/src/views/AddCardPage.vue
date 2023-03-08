<script>
  import { data } from '../store.js'
  import Multiselect from 'vue-multiselect'

  export default{
    data(){
      return {
        memeToEdit: '',
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
    components: {
        Multiselect
    },
    methods: {
      searchMeme: async function(){
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
        var selectedId = document.querySelector('input').getAttribute('data-id')

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
            template_id: ''
          })
        }



        const res = await fetch('https://api.imgflip.com/caption_image', options);
        console.log(res);
        const data = await res.json()
        console.log(data)
        this.memeToEdit.imgSrc = data.data.url
        if( this.newName.length ) this.memeToEdit.name = this.newName
      },
      formattedName: function(string){
        return string.toLowerCase()
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
        <div>
            Search for a meme first: <input type="text" name="search" id="search" v-model="search" list="selected-meme" @keyup="searchMeme">
            <datalist id="selected-meme">
                <option v-for="meme in matchingMemes" :value="meme.name">{{ meme.id }}</option>
            </datalist>
        </div>
        <multiselect v-model="newMeme" placeholder="Fav No Man’s Sky path" label="title" track-by="title" :options="matchingMemes" :option-height="104" :show-labels="false">
            <template slot="singleLabel" slot-scope="props"><img class="option__image" :src="props.option.url" alt="No Man’s Sky"><span class="option__desc"><span class="option__title">{{ props.option.name }}</span></span></template>
            <template slot="option" slot-scope="props"><img class="option__image" :src="props.option.url" alt="No Man’s Sky">
            <div class="option__desc"><span class="option__title">{{ props.option.name }}</span><span class="option__small">{{ props.option.desc }}</span></div>
            </template>
        </multiselect>
        <p>New <strong>top</strong> text: <input type="text" v-model="textBox0"></p>
        <br>
        <p>New <strong>bottom</strong> text: <input type="text" v-model="textBox1"></p>
        <br>
        <pre>
            {{ memeToEdit }}
        </pre>
        <button @click="editMeme" class="meme-button" :disabled="textBox0.length == 0 && textBox1.length == 0">Create Meme</button>
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