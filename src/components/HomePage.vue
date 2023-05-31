<template>
 <div class="container">
  <div class="left">
    <img src="../assets/images/me.jpg" alt="A picture of Ben in a suit and tie">
    <p>
Introducing Bennett Wilbert, the master of software sorcery and the sultan of code comedy! With a keyboard as his wand and a terminal as his stage, Bennett weaves lines of code into hilarious tales of technological triumph. His software skills are so sharp, they could slice through bugs like a hot knife through butter, leaving programmers in fits of laughter and amazement.
When Bennett enters a room, you can hear the sound of binary laughter echoing through the corridors. He can debug a program with a single glance, making bugs run for cover like scared little creatures. His coding style is like a well-rehearsed stand-up routine, with punchlines that make even the most stoic developers crack a smile.</p>
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

<style>
.container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.left {
  flex: 1;
  margin-right: 20px; 
}

.right {
  flex: 1;
}
p {
    text-align: justify;
}

</style>