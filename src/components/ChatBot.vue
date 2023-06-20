<template>
  <div>
    <h1>Chatbot</h1>

    <div id="chat-container">
      <div v-for="message in messages" :key="message.id" :class="['message', message.type]">
        {{ message.text }}
      </div>
    </div>

    <input type="text" id="chat-input" v-model="userInput" placeholder="Type your message..." autofocus @keydown.enter="processUserInput" />
  </div>
</template>

<script>
import chatGPT from "../services/OpenAi";

export default {
  data() {
    return {
      messages: [],
      userInput: ''
    };
  },
  methods: {
    addUserMessage(message) {
      this.messages.push({ id: Date.now(), text: message, type: 'user-message' });
    },
    addBotMessage(response) {
      const botResponse = response;
      this.messages.push({ id: Date.now(), text: botResponse, type: 'bot-message' });
    },
    async processUserInput() {
      const userInput = this.userInput.trim();
      
      if (userInput) {
        this.addUserMessage(userInput);
        
        // Get the most recent user message
        const mostRecentUserMessage = this.messages[this.messages.length - 1];
        
        // Access the most recent user message's text
        const mostRecentUserMessageText = mostRecentUserMessage.text;
        
        try {
          // Send the most recent user message to the OpenAI API
          const response = await chatGPT.response(mostRecentUserMessageText);
          this.addBotMessage(response);
        } catch (error) {
          console.error(error);
        }
        
        this.userInput = '';
      }
    }
  }
};
</script>

<style scoped>
#chat-container {
  width: 100%;
  height: 500px; /* Adjust the height as needed */
  border: 1px solid #ccc;
  overflow-y: scroll;
  padding: 10px;
  box-sizing: border-box;
}

.message {
  margin-bottom: 10px;
}

.user-message {
  background-color: #e6e6e6;
}

.bot-message {
  background-color: #f2f2f2;
}

#chat-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
