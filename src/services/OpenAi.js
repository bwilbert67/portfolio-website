import axios from 'axios';

const http = axios.create({
  baseURL: "https://api.openai.com/v1/chat/completions",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.API_KEY}`
  }
});

export default {
  async response(userInput) {
    const promptPrimer = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Yo are BenGPT, a chatbot made to answer questions about Bennett Wilbert. He is a Java Developer with 1 year of experience. Please respond appropriately to the following message:  " + userInput}]
    };

    try {
      const response = await http.post('', promptPrimer);
      const content = response.data.choices[0].message.content;
      return content;
    } catch (error) {
      console.error(error);
      return "Oooops!"; // or handle the error case accordingly
    }
  }
};
