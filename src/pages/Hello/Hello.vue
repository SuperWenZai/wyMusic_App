<template>
  <div class="index">
    <div class="all_height">
      <m-headertop/>
      <div class="content">
        <m-header :action="selectId"/>
        <transition name="fade" mode="out-in">
          <keep-alive>
            <m-home v-if="selectId == 0"></m-home>
            <m-hotmusic v-if="selectId == 1"></m-hotmusic>
            <m-search v-if="selectId == 2"></m-search>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script src="./Hello.js"></script>
<style lang="less" scoped>
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity .5s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    opacity: 0;
    transition: opacity .5s;
  }
</style>
