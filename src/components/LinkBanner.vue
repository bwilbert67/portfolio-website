<template>
  <div class="banner">
    <router-link class = "mouse-fix" to="/">Home</router-link>
    <router-link class = "mouse-fix" to="/about">About Me</router-link>
    <router-link class = "mouse-fix" to="/projects">Projects</router-link>
    <router-link class = "mouse-fix" to="/blog">Blog</router-link>
    <router-link class = "mouse-fix" to="/contact">Contact</router-link>
    <router-link class = "mouse-fix" to="/scratch-pad">Scratch Pad</router-link>
  </div>
</template>

<script>
export default {
  name: 'LinkBanner',
};
</script>

<style scoped>
.banner {
  background-color: #f2f2f2;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
a {
    text-decoration: underline;
    color: black;
}
.mouse-fix{
  cursor: url("../assets/images/cursor.cur"), auto;
}
</style>
