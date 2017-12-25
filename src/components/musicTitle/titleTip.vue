<template>
  <h2 v-text="title"></h2>
</template>

<script>
    export default {
      name: 'titleTiph2',
      props : {
        title : {
          type : String,
        }
      },
      data(){
        return{}
      }
    }
</script>
<style lang="less" scoped>
  h2{
    position: relative;
    margin: 1rem 0;
    padding-left: 1rem;
    font-size: 1.5rem;
  }
  h2:after{
    position: absolute;
    content: ' ';
    background-color: #d43c33;
    left: 0;
    top: 50%;
    width: .2rem;
    height: 1.5rem;
    margin-top: -.7rem;
  }
</style>
