<template>
  <header>
      <div class="header_left item">
        <div class="header_left_text">
          <div class="header_left_text_img">
            <img src="../../../static/images/wyMumi_logo.png"/>
          </div>
          <span class="header_left_text_logo">网易云音乐</span>
        </div>
      </div>
      <div class="header_right item">
        <div class="header_right_text">
          <a class="header_right_text_top">下载APP</a>
        </div>
      </div>
  </header>
</template>

<script>
export default {
  name : 'mHeadertop',
}
</script>

<style lang="less">
header{
  position: fixed;
  display: flex;
  top:0;
  left: 0;
  height: 5rem;
  width: 100%;
  min-width: 320px;
  z-index: 999;
  padding: 1rem .8rem;
  box-sizing: border-box;
  background-color: #d43c33;
  .item{
    flex: 1;
  }
  .header_left{
    width: 100%;
    height: 100%;
    .header_left_text{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      .header_left_text_img{
        display: inline-block;
        box-sizing: border-box;
        position: relative;
        top: 2px;
        width: 2rem;
        height: 2rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .header_left_text_logo{
        display: inline-block;
        padding-left: .3rem;
        color: white;
        font-size: 2rem;
      }
    }
  }
  .header_right{
    width: 100%;
    height: 100%;
    .header_right_text{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100%;
      .header_right_text_top{
        box-sizing: border-box;
        border: 1px solid white;
        border-radius: 20px;
        padding: .5rem;
        font-size: 1.2rem;
        color: white;
      }
    }
  }
}
</style>
