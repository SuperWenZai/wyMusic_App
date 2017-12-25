<template>
  <div class="center_one">
      <router-link to="/Playlist" class="smlistOne" v-for="(item,index) in items" :key="index">
        <div class="imging">
          <img src="../../../static/images/listim.jpg"/>
        </div>
        <span v-text="item.hotNum"></span>
        <p v-text="item.stringName"></p>
      </router-link>
  </div>
</template>
<script>

  export default {
    name : 'listOne',
    data(){
      return{
        items : [
          {hotNum : '40w',stringName : '加大家电销售的第三方'},
          {hotNum : '50w',stringName : '加大家电销售的第三方'},
          {hotNum : '60w',stringName : '加大家电销售的第三方'},
          {hotNum : '70w',stringName : '加大家电销售的第三方'},
          {hotNum : '80w',stringName : '加大家电销售的第三方'},
          {hotNum : '90w',stringName : '加大家电销售的第三方'},
        ]
      }
    },
    components: {
    }
  }
</script>

<style lang="less">
  .center_one{
    display: flex;
    padding-bottom: 1.5rem;
    flex-wrap: wrap;
    justify-content: space-between;
    .smlistOne{
      position: relative;
      width: 32.5%;
      span{
        position: absolute;
        right: .4rem;
        top: .1rem;
        font-size: 1rem;
        color: white;
      }
      p{
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient:vertical;
        overflow: hidden;
        box-sizing: border-box;
        margin: .5rem;
        font-size: 1rem;
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
