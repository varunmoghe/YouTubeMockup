import axios from 'axios';

const KEY = 'AIzaSyCfkHtuGduNpKUF8EoINv19KS3UQn7msD8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    },
})
