<!--  -->
<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>

export default {
name:'TabBar',
components:{
  
}

}

</script>
<style scoped>
#tab-bar{
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f6f6f6;
  box-shadow: 0 0px 3px #cccccc;

}


</style>