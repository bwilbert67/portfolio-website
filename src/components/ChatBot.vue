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
        // Add your chatbot logic here to generate a response
        // For example, you can use an API call or predefined responses
        
        // Placeholder bot response
        this.addBotMessage('This is a placeholder bot response.');
        
        this.userInput = '';
      }
    }
  }
};
</script>

<style scoped>
#chat-container {
  width: 400px;
  height: 500px;
  border: 1px solid #ccc;
  overflow-y: scroll;
  padding: 10px;
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
