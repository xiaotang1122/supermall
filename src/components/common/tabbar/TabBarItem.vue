<!--  -->
<template>
          <div class="tab-bar-item" @click="itemclick">
            <div v-if="!isactive">
               <slot  name="item-icon"></slot>
            </div>
            <div  v-else >
              <slot name="item-icon-active"></slot>
            </div>
           <div :style="activeStyle">
             <slot name ="item-text"></slot>
             </div> 
        </div>
</template>

<script>
export default {
  data () {
    return {
      // isactive:true
    };
  },
  computed: {
    isactive() {
      return this.$route.path.indexOf(this.path)  !== -1
    },
    activeStyle() {
      return this.isactive ? {color:this.activeColor} : {}
    }
  },
    props:{
    path:String,
    activeColor:{
      type:String,
      default:'#D4237A'
    }
  },
    methods: {
    itemclick(){
      this.$router.replace(this.path)
    }
  },
}

</script>
<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  font-size: 16px;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img{
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
}

</style>