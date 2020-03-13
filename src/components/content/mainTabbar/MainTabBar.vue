<!--  -->
<template>
    <tab-bar class="tab-bar">
      <tab-bar-item path ="/home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/homes.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
       <tab-bar-item path ='/category' >
          <img slot="item-icon" src="~assets/img/tabbar/fenlei.svg" alt="">
          <img slot="item-icon-active" src="~assets/img/tabbar/fenleis.svg" alt="">
        <div slot="item-text">分类</div>
       </tab-bar-item>
        <tab-bar-item path='/cart'>
           <img slot="item-icon" src="~assets/img/tabbar/购物车黑.svg" alt="">
           <img slot="item-icon-active" src="~assets/img/tabbar/购物车粉.svg" alt="">
        <div slot="item-text">购物车</div>
        </tab-bar-item>
         <tab-bar-item path ='/profile'>
            <img slot="item-icon" src="~assets/img/tabbar/我的.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/我的 (1).svg" alt="">
        <div slot="item-text">我的</div>
         </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
components:{
  TabBar,
  TabBarItem
}
}

</script>
<style scoped>
.tab-bar{
  z-index: 9;
}

</style>
