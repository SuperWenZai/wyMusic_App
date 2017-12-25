<template>
  <div>
    <div class="content_between">
      <m-hotop></m-hotop>
      <m-listtwe :newitems="items" :pdindex="true" :isnumone="true"></m-listtwe>
    </div>
    <footer>
      <a>
        <div class="footer_main">
          查看完整榜单 &gt;
        </div>
      </a>
    </footer>
  </div>

</template>
<script type="text/javascript" src="./hotmusic.js"></script>
<style lang="less" scoped src="./hotmusic.less"></style>
