<template>
  <ul class="list">
    <li v-for="item in items" :key="item.id">
      <a>{{ item }}</a>
    </li>
  </ul>
</template>

<script>
    export default {
      name : 'mListip',
      data(){
        return{
          items : {
            str1 : 111,
            str2 : 123,
            str3 : 100023,
            str4 : 1321310,
            str5 : "fwef",
            str6 : 5462,
            str7 : 5834
          }
        }
      }
    }
</script>
<style lang="less">
  .list{
    margin: 1rem 0;
    font-size: 1.4rem;
  li{
    margin: 0 1rem 2rem 0;
    float: left;
  a{
    box-sizing: border-box;
    padding: .2rem .6rem;
    border: .01rem solid #eae7e7;
    border-radius: 1.5rem;
  }
  }
  }
</style>
