import { reactive } from 'vue'
import jsonData from './assets/data.json' 

export const data = reactive({
    memes: jsonData.memes
})