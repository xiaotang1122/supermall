<!--  -->
<template>
   <swiper>
    <swiper-item v-for='(item,a) in banners' :key="a">
        <a :href="item.link"></a>
        <img :src="item.image" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },

  components: {
    Swiper,
    SwiperItem
  },
}

</script>
<style scoped>
</style>