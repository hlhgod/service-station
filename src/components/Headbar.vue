<template>
  <div class="container">
    <slot name="left"></slot>
    
    <p>{{ title }}</p>
    
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props: ["title"],
  data() {
      return {
          location:"蒙自"
      }
  },
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #39a9ed;
  height: 40px;
  width: 96%;
  padding: 0 2%;
  position: fixed;
  display: flex;
  // line-height: 40px;
  text-align: center;
  justify-content: space-around;
  p {
    font-size: 24px;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
    line-height: 40px;
    text-align: center;
  }
  // i{
  //   font-size: 32px;
  //   line-height: 40px;
  //   text-align: center;
  //   color: #eee;
  // }
  // .location{
  //       align-self: flex-end;  
  //   }
}
</style>