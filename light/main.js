// Creating a Vue object from the Vue pkg
const { createApp } = Vue

// Creating the app itself
createApp({
    data() {
        return {
            fetchMessage: 'Loading Sarcasm...',
            fetchStatus: false,
            loaderIcon: 'https://cdn.dribbble.com/users/1787505/screenshots/7300251/shot.gif',
            memes: [],
        }
    },
    computed: {

    },
    methods: {

    },
    mounted() {
        console.log("ready")
        this.memes = fetch( "https://api.imgflip.com/get_memes" )
            .then(response => response.json())
            .then(data => {
                this.memes = data.data.memes
                setTimeout(function(){
                    this.fetchStatus = true
                    console.log(this.fetchStatus)
                }, 1000)
            })
            .catch(error => {
                console.log(error);
                this.fetchStatus = "Something went wrong 👀"
                document.querySelector('#loader-icon').style.display = 'none'
            })
    }
}).mount('#app')