<script>
import { data } from '../store';

export default{
    props: [
        'passedMemeId'
    ],
    data(){
        return {
            apiUsername: import.meta.env.VITE_IMGFLIP_USERNAME,
            apiPassword: import.meta.env.VITE_IMGFLIP_PASSWORD,
            newName: '',
            newTextBox0: '',
            newTextBox1: '',
            data
        }
    },
    computed: {
        memeToEdit: function(){
          return this.data.memes.find(meme => meme.id === this.passedMemeId)
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
        console.log(this.memeToEdit)
    }
}
</script>

<template>
    <div v-if="this.passedMemeId !== null" class="modal">
        <div class="modal-container">
            <button @click="this.$emit('closeMeme');">Close</button>
            <br>
            <br>
            <p>Meme name: <input type="text" v-model="memeToEdit.name"></p>
            <br>
            <p>New <strong>top</strong> text: <input type="text" v-model="newTextBox0"></p>
            <br>
            <p>New <strong>bottom</strong> text: <input type="text" v-model="newTextBox1"></p>
            <br>
            <div class="meme-item">
                <p>{{ memeToEdit.name }}</p>
                <img :src="memeToEdit.imgSrc" class="meme-image" :alt="memeToEdit.name"/>
            </div>
            <br>
            <pre>
                {{ memeToEdit }}
            </pre>
            <button
                @click="editMeme"
                class="meme-button"
                :disabled="newTextBox0.length === 0 && newTextBox1.length === 0">
              Generate new Meme
            </button>
        </div>
    </div>
</template>

<style scoped>
    .modal {
        position: fixed;
        z-index: 999;
        width: 100vw;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        height: 100vh;
    }
    .modal-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background: white;
        padding: 50px;
    }
</style>
