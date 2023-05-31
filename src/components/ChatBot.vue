<template>
  <div class="right-side">
    <div class="text-output">
      This is place holder text for the really cool chatbot
    </div>
    <div class="text-input">
      <textarea></textarea>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.right-side {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  height: 90vh;
  width: 100%;
}

.text-output {
  flex-grow: 8;
  overflow-y: scroll;
  border: 1px solid #ccc;
  height: 80vh;
  width: 80vh;
}

.text-input {
  flex-grow: 2;
  overflow-y: scroll;
  border: 1px solid #ccc;
  height: 10vh;
  width: 80vh;
}
textarea {
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  border: none;
  outline: none;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  overflow: hidden;
}
</style>