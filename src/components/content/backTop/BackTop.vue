<!--  -->
<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  //  methods: {
  //    backclick(){
  //      //回到顶部
  //      this.$emit('backclick')
       
  //    }
  //  }

  // components: {},

  //computed: {},

  //mounted: {},

 
}

</script>
<style scoped>
.back-top{
 position: fixed;
 right: 10px;
 bottom: 52px;
}
.back-top img{
  width: 40px;
  height: 40px;
}
</style>