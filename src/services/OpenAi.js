import axios from 'axios';
const http = axios.create({
        baseURL: openAI url 
    });

export default {
    response(userInput) {
        const promptPrimer = "Give the chatbot its background info on Ben" + 
        "Here is their question: " + userInput;
        return axios.post("/endpoint", promptPrimer)
    }
}