<!--  -->
<template>
  <div class="recommend">
    <div v-for ="(item,a) in recommends" class="recommend-item"  :key="a">
    <a :href="item.link">
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
    </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }

  },
}

</script>
<style scoped>
.recommend{
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 15px;
  border-bottom: 10px solid #eee;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 75px;
  height: 75px;
  margin-bottom:5px; 
}


</style>