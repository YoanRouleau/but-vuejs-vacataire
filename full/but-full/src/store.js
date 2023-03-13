import { reactive } from 'vue'
import jsonData from './assets/data.json' 

export const data = reactive({
    memes1: jsonData.memes1,
    memes2: jsonData.memes2,
})