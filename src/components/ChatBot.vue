<template>
  <div id="app">
    <div v-if="!showChat" id="suggested-questions">
      <div class="card" v-for="question in suggestedQuestions" :key="question.id" @click="submitQuestion(question.text)">
        {{ question.text }}
      </div>
    </div>

    <div v-if="showChat" id="chat-container">
      <div v-for="message in messages" :key="message.id" :class="['message', message.type]">
        {{ message.text }}
      </div>
    </div>
<input type="text" id="chat-input" v-model="userInput" placeholder="Type your message..." autofocus @keyup.enter="processUserInput(userInput)" />
  </div>
</template>

<script>
import chatGPT from "../services/OpenAi";

export default {
  data() {
    return {
      messages: [],
      userInput: '',
      showChat: false,
      suggestedQuestions: [
        { id: 1, text: 'Example Question 1' },
        { id: 2, text: 'Example Question 2' },
        { id: 3, text: 'Example Question 3' },
        { id: 4, text: 'Example Question 4' },
        { id: 5, text: 'Example Question 5' },
        { id: 6, text: 'Example Question 6' }
      ]
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
   async processUserInput(question) {
  const userInput = question ? question : this.userInput;

  if (userInput) {
    this.showChat = true;
    this.addUserMessage(userInput);

    try {
      const response = await chatGPT.response(userInput);
      this.addBotMessage(response);
    } catch (error) {
      console.error(error);
    }

    this.userInput = '';
  }
},
   submitQuestion(question) {
    this.processUserInput(question);
}

  }
};
</script>

<style scoped>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

#suggested-questions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 10px;
}

.card {
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

#chat-container {
  flex-grow: 1;
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
