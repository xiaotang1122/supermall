<!--  -->
<template>
<div class="wrapper">
    <div class="content">
    <h2>分类</h2>
    <ul>
      <button @click="btnclick">按钮</button>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'


export default {
  data() {
    return {
      scroll:null
    };
  },
  //组件创建完后调用
  mounted() {
    	//默认情况下BScroll是不可以实时监听滚动位置
			//probeType 监测
			//0  1  都是不监测实时的位置
			//2  在手指滚动的过程中侦测,手指离开后的惯性滚动过程中不侦测
    this.scroll = new BScroll('.wrapper',{
      probeType:3,
      pullUpLoad:true
    })
    this.scroll.on('scroll',(position) => {
      // console.log(position);
      
    })

    this.scroll.on('pullingUp',() =>{
      console.log('上拉加载函数');
      	//发送网络请求,请求更多页的数据
				//等数据请求完成,并且将新的数据展示出来后
      		setTimeout(() => {
					this.scroll.finishPullUp()
				},2000)
    })
  },
  methods:{
    btnclick(){
      console.log('btnclick');
      
    }
  }

}

</script>
<style scoped>
.wrapper{
  height: 200px;
  background: pink;
  opacity: 0.7;
  overflow:hidden; 
}
</style>
