<!--  -->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    };
  },

}

</script>
<style scoped>

.nav-bar{
  display: flex;
  line-height: 44px;
  height: 44px;
  box-shadow: 0 1px 1px rgba(100, 100,100,100,.1)

}
.left,.right{
  width: 60px;
  /* background: #FF8E96; */
}
.center{
  flex: 1;
  /* background:#FF8E96; */
  text-align: center;
  font-size: 16px;
  /* color:whitesmoke; */
  font-weight: bold;
}

</style>
