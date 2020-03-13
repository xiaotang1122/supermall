
<template>
<!--  ref/children-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BSroll from 'better-scroll'
export default {
  data () {
    return {
      scroll:null,

    }
  },
  props:{
    probeType:{
    type:Number,
    default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
},

mounted() {
  //创建BBScroll对象
  this.scroll  = new BSroll(this.$refs.wrapper,{
    click:true,
    probeType:this.probeType,
    pullUpLoad:this.pullUpLoad
  })
  //监听滚动的位置


  if(this.probeType === 2 || this.probeType === 3){

  this.scroll.on('scroll',(position) => {
    // console.log(position);
    this.$emit('scroll',position)
    
  })
  }
  //监听上拉事件
  this.scroll.on('pullingUp',() =>{
    this.$emit('pillingUp')
    
  })
  console.log(this.scroll);
  this.scroll.refresh()

  
  
},
methods: {
  scrollTo(x,y,time=700){
   this.scroll && this.scroll.scrollTo(x,y,time)
  },
  finishPullUp(){
    this.scroll.finishPullUp()
  },

    refresh() {
    this.scroll && this.scroll.refresh && this.scroll.refresh()
    }



},

}

</script>
<style scoped>

</style>