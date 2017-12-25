<template>
  <div class="hotop">
    <div class="hotop_main">
      <div class="hotop_main_one" v-text="music">
      </div>
      <div class="hotop_main_twe" v-text="musichot">
      </div>
      <div class="hotop_main_three" v-text="musictime">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name : 'mHotop',
      data(){
        return{
          music : '云音乐',
          musichot : '热歌榜',
          musictime : '更新日期：08月03日'
        }
      }
    }
</script>
<style lang="less">
  .hotop{
    width: 100%;
    height: 12rem;
    background-color: #AA6857;
    box-sizing: border-box;
    padding-left: 2rem;
    .hotop_main{
      width: 100%;
      height: 100%;
      position: relative;
      div{
        color: white;
        position: absolute;
      }
      .hotop_main_one{
        font-size: 1.5rem;
        font-style: italic;
        top:2rem;
      }
      .hotop_main_twe{
        font-size: 4rem;
        font-weight: bold;
        top:3.5rem;
      }
      .hotop_main_three{
        font-size: 1rem;
        top: 8.5rem;
      }
    }
  }
</style>
