<!--  -->
<template>  
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <scroll class="content" ref="scroll" :probe-type ='3' @scroll="contentscroll"
    :pull-up-load="true" @pillingUp='loadMore'>
      <home-swper :banners = 'banners' ></home-swper>
      <recommend-view :recommends ='recommends'/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" @tabClick='tabClick' class="tab-control"/>
      <goods-list :goods="goods[currentType].list" />
    </scroll>
<back-top @click.native='backclick' v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>

import HomeSwper from './childcomps/HomeSwiper.vue'
import recommendView from './childcomps/RecommendView'
import FeatureView from './childcomps/FeatureView'

import NavBar from 'components/common/navbar/NavBar.vue'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata,getHomegoods} from '../../network/home'
import{debounce} from "common/Utils"

export default {
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      },
      currentType: 'pop',
      isShowBackTop:false
    }
  },
  components:{
   HomeSwper,
   recommendView,
   FeatureView,
   NavBar,
   TabControl,
   GoodsList,
   Scroll,
   BackTop

  },
  created() {
    //**1.请求多个数据
        this.getHomeMultidata()
    //**2.请求商品数据
        this.getHomegoods('pop')
        this.getHomegoods('new')
        this.getHomegoods('sell')

      },

  mounted(){
    debounce(this.$refs.scroll.refresh,50)
    // **3.监听item中图片加载完成
        this.$bus.$on('itemImageload', () => {
         this.$refs.scroll.refresh()
        console.log('goods加载成功了');
        
        })
  },
  methods:{
      /**
       * //*事件监听相关的方法
       */

      tabClick(index) {
        console.log(index);

        switch (index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }


      },
        backclick(){

          this.$refs.scroll.scrollTo(0,0)
        },
        contentscroll(position) {
          // position.y>1000
          this.isShowBackTop = (-position.y) > 1000

        },
        loadMore(){
          console.log('加载中');

          this.getHomegoods(this.currentType)
          ths.$refs.scroll.scroll.refesh()

        },

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
       getHomeMultidata().then((res)=>{
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list

    })
    },
    getHomegoods(type) {
      const page = this.goods[type].page + 1
      getHomegoods(type,page).then((res)=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        this.$refs.scroll.finishPullUp()
    })
    }


  }
}

</script>
<style scoped>
#home{
  padding-top:44px;
  height: 100vh;
  position: relative;
}
.home-nav{
  background:#FF8E96;
   color:whitesmoke;

   position: fixed;
   left: 0;
   right: 0;
   top: 0;
   z-index: 9;

}
.tab-control{
  position: sticky;
  top: 44px;
  background: white;
  opacity: 0.8;
  z-index: 9;
}
.content{
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;

}
</style>
