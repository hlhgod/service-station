<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link> -->
    
    <router-view></router-view>
    <Footbar class="footbar"></Footbar>
  </div>
</template>

<script>
import Footbar from '@/components/Footbar.vue'
import Headbar from '@/components/Headbar.vue'
export default {
  components: { Footbar, Headbar }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html{
  width: 100%;
  // height: 100%;
  background: #3091f2;
}
li{
  list-style: none;
}
</style>
