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
    addBotMessage(message) {
      this.messages.push({ id: Date.now(), text: message, type: 'bot-message' });
    },
    processUserInput() {
  const userInput = this.userInput.trim();
  
  if (userInput) {
    this.addUserMessage(userInput);
    
    // Get the most recent user message
    const mostRecentUserMessage = this.messages.find(
      (message) => message.type === 'user-message'
    );
    
    // Access the most recent user message's text
    const mostRecentUserMessageText = mostRecentUserMessage.text;
    
    // Send the most recent user message to an API or perform any other desired action
    // Example API call:
    // sendUserMessageToAPI(mostRecentUserMessageText);
    
    // Placeholder bot response
    this.addBotMessage(chatGPT.response(mostRecentUserMessageText));
    
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
