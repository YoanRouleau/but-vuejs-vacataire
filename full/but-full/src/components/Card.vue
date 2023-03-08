<script>
import EditModal from "./EditModal.vue";
import { data } from '../store';

export default {
    components: {
        EditModal
    },
    props: [
        'data'
    ],
    emits: ['editMeme'],
    methods: {
        editCard(){
            this.$router.push(`/editCard/${this.data.id}`)
        },
        editCardNew(){
            this.$emit('editMeme', data.id);
        }
    },
    mounted(){
    }
}
</script>

<template>
    <div class="meme-item">
        <p>{{ data.name }}</p>
        <img :src="data.imgSrc" class="meme-image"/>
        <div class="meme-actions">
            <button
                class="meme-button"
                @click="editCard">
                Edit
            </button>
            <button
                class="meme-button"
                @click="editCardNew">
                Edit (new)
            </button>
        </div>
    </div>
</template>

<style>
    .meme-item{
        padding: 30px;
        background-color: #F8F8F8;
        height: max-content;
        width: max-content;
        text-align: center;
        position: relative;
    }
    .meme-actions{
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    }
    .meme-item p {
        font-size: 1.5em;
    }
    .meme-image{
        max-width: 200px;
        height: auto;
        padding: 30px;
    }
</style>
