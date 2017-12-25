<template>
  <div class="list_music">
    <div class="list_music_sm"  v-for="(item,index) in newitems" :key="index">
      <div :class="['number',{'numone' : isnumone},{'numtwe' : isnumtwe}]" v-if="pdindex">{{index+1 >=10 ? index+1 : '0'+(index+1) }}</div>
      <div class="item">
        <p class="fontone font" v-text="item.one"></p>
        <p class="fonttwe font" v-text="item.twe"></p>
      </div>
      <div class="text_item">
        <img src="../../../static/images/bf.png"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'mListtwe',
      props : {
        newitems : {
          type : Array
        },
        pdindex : {
          type : Boolean
        },
        isnumone : {
          type : Boolean,
          default : false
        },
        isnumtwe : {
          type : Boolean,
          default : false
        }
      },
      data(){
        return{
        }
      }
    }
</script>
<style lang="less">
  .list_music{
    padding-left: 1rem;
    .list_music_sm{
      display: flex;
      border-bottom: .01rem solid #f1f1f1;
      padding:.5rem 0;
      .item{
        flex: 1;
        width: 0;
        .fontone{
          padding-bottom: .3rem;
          font-size: 1.5rem;
        }
        .fonttwe{
          font-size: 1rem;
          color: #888;
        }
        .font{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-break: normal;
        }
      }
      .text_item{
        display: flex;
        align-items: center;
        padding: 0 1rem;
        width: 2.5rem;
        img{
          width: 2.5rem;
          height: 2.5rem;
        }
      }
      .number{
        font-size: 1.5rem;
        padding-right: .5rem;
        margin: auto 0;
        &.numone{
          color: #d43c33;
        }
        &.numtwe{
          color: #999;
        }
      }
    }
  }

</style>
