<template>
  <nav>
    <div class="content_text">

      <div class="content_left item"
           v-for="(v,i) in navArray"
           @click="selectId = i,$parent.selectId = i"
           :key="i">
        <span :class="{'action': selectId == i}" v-text="v.name"></span>
      </div>

    </div>
  </nav>
</template>

<script>
  /**
   *  头部导航
   *  例子：   <m-header />
   *  arr     {Array}    [{name: '', name: '',....}]
   *  action  {Number}   index = 0,1,2,3,4,  minLength = 2, maxLengt = 5
   */
export default {
  name: 'mHeader',
  props: {
    action: {
      default: 0,
      type: Number
    }
  },

  data() {
    return{
      navArray: [{name: '推荐音乐'},{name:'热歌榜'}, {name:'搜索'}],
      selectId: this.action,
    }
  }
}
</script>

<style lang="less">
  nav{
    position: fixed;
    left: 0;
    right: 0;
    width: 100%;
    min-width: 320px;
    height: 3.5rem;
    z-index: 999;
    border-bottom: .013333rem solid #d9d9d9;
    background-color: #fff;
    .item{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      flex: 1;
      font-size: 1.4rem;
    }
    .content_text{
      display: flex;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      max-width: 640px;
      span{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 100%;
      }
      .action{
        color: #d43c33;
        border-bottom: 0.2rem solid #d43c33;
        z-index: 99;
        position: relative;
        top: 1px;
        position: relative;
        top:.1rem;
      }
    }
  }
</style>
