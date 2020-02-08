import axios from 'axios'

const KEY = 'AIzaSyC2sBFCmtyS48M64gTJB6sNYyr7F7qz5us'

export const baseParams = {
    part: "snippet",
    maxResults: 5,
    key: KEY
};

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResult: 5,
        key: KEY
    }
})