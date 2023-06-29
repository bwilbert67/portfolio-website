<template>
  <div id="app" :class="{ 'centered': !showChat }">
    <h1>BenGPT</h1>
    <div v-if="!showChat" id="image-container">
      <div id="image-grid">
        <img src="../assets/images/bot.png" alt="Chatbot" class="bot-image">
      </div>
    </div>

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
    <div id="input-container">
      <input type="text" id="chat-input" v-model="userInput" placeholder="Type your message..." autofocus @keyup.enter="processUserInput(userInput)" />
      <button id="submit-button" @click="processUserInput(userInput)">Submit</button>
    </div>
  </div>
</template>

<script>
import chatGPT from "../services/OpenAi";

export default {
  data() {
    return {
      messages: [],
      userInput: "",
      showChat: false,
      suggestedQuestions: [
        { id: 1, text: "What technical skills does Ben posses?" },
        { id: 2, text: "Where is Ben located?" },
        { id: 3, text: "Tell me a fun fact about Ben." },
        { id: 4, text: "How did Ben become a software engineer?" },
        { id: 5, text: "What are Ben's long term goals?" },
        { id: 6, text: "What are Ben's strengths?" }
      ]
    };
  },
  methods: {
    addUserMessage(message) {
      this.messages.push({ id: Date.now(), text: message, type: "user-message" });
    },
    addBotMessage(response) {
      const botResponse = response;
      this.messages.push({ id: Date.now(), text: botResponse, type: "bot-message" });
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

        this.userInput = "";
      }
    },
    submitQuestion(question) {
      this.processUserInput(question);
    }
  }
};
</script>

<style scoped>
#image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#image-grid {
  position: relative;
}

.bot-image {
  width: 300px;
  height: auto;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.centered {
  justify-content: center;
  align-items: center;
}

#suggested-questions {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  justify-content: center;
  padding: 10px;
  width: 100%;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
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

#input-container {
  display: flex;
  align-items: center;
  width: 100%;
}

#chat-input {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
}

#submit-button {
  padding: 10px 20px;
  margin-left: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
