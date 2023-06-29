<template>
  <div class="container">
    <div class="left">
      <img src="../assets/images/me.jpg" alt="A picture of Ben in a suit and tie">
      <h2>
        Hi, my name is Bennett Wilbert and welcome to my portfolio page! 
      </h2>
      <h2>Got any questions? Ask my AI bot, BenGPT => </h2>
    </div>
    <div class="right">
      <ChatBot></ChatBot>
    </div>
  </div>
</template>

<script>
import ChatBot from "./ChatBot"
export default {
  components: {
    ChatBot,
  }
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 40px;
}

.left {
  flex: 1;
  margin-right: 60px;
}

.right {
  flex: 2.5;
  background-color: #CFB86D;
}

.left img {
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}

p {
  text-align: justify;
  line-height: 1.5;
}
h2{
  color: white;
}

</style>
