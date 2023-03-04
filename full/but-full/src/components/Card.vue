<script>
import { data } from '../store';

    export default{
        props: [
            'data'
        ],
        methods: {
            editCard(){
                this.$router.push(`/editCard/${this.data.id}`)
            }
        },
        mounted(){
            console.log(this.data)
        }
    }
</script>

<template>
    <div class="meme-item">
        <p>{{ data.name }}</p>
        <img :src="data.imgSrc" class="meme-image"/>
        <div class="meme-actions">
            <button 
                class="meme-edit" 
                @click="editCard">
                Edit
            </button>
        </div>
    </div>
</template>

<style>
    .meme-item{
        padding: 20px;
        background-color: #F8F8F8;
        height: max-content;
        width: max-content;
        text-align: center;
        position: relative;
    }
    .meme-actions{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
    .meme-item p {
        font-size: 1.5em;
    }
    .meme-image{
        max-width: 150px;
        height: auto;
        padding: 30px;
    }
</style>