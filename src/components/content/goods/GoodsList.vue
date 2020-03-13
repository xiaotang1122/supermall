<!--  -->
<template>
  <div class="goods">
    <grid-view>
    <goods-list-item v-for="(item,a) in goods" :key="a"
    :goods-item ='item'/>
     </grid-view>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
import GridView from './GridView.vue'
export default {
  data () {
    return {
    };
  },
  props:{
    goods:{
      type:Array,
      default(){[]}
    }
  },

  components: {
    GoodsListItem,
    GridView
  },


}

</script>
<style scoped>
</style>