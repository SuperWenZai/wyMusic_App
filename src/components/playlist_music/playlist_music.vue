<template>
  <div class="playlist_music">
    <h2 class="playlist_music_tittle">{{ tittle }}<span v-if="false">（123）</span></h2>
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: 'playlist_music',
        props : {
          tittle : String
        },
        data() {
            return {
            }
        }
    }
</script>
<style lang="less" scoped>
  .playlist_music{
    width: 100%;
    box-sizing: border-box;
    .playlist_music_tittle{
      font-size: 1rem;
      width: 100%;
      background-color: #eeeff0;
      box-sizing: border-box;
      padding: .3rem .5rem;
    }
  }
</style>
