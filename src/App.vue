<template>
<link-banner></link-banner>
<ben-home></ben-home>
</template>

<script>
import LinkBanner from './components/LinkBanner.vue'
import BenHome from './views/BenHome.vue'
export default {
  name: 'App',
  components: {
    BenHome,
    LinkBanner,
  }
}
</script>

<style>
body{
cursor: url("./assets/images/cursor.cur"), auto;
}
.mouse-fix{
  cursor: url("./assets/images/cursor.cur"), auto;
}
</style>
