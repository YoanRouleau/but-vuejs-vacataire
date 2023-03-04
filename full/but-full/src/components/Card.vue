<script>
    export default{
        props: ['data']
    }
</script>

<template>
    <div class="meme-item">
        <p>{{ data.name }}</p>
        <img :src="data.imgSrc" class="meme-image"/>
    </div>
</template>

<style>
    .meme-item{
        padding: 20px;
        background-color: #F8F8F8;
        height: fit-content;
        text-align: center;
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