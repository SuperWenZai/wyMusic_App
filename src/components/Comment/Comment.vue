<template>
  <div id="comment">
    <a class="playlist_music_comment" v-for="(item,index) in newitems" :key="index">
      <div class="playlist_music_comment_left">
        <div class="comment_img">
          <img src="../../../static/images/listim.jpg"/></div>
      </div>
      <div class="playlist_music_comment_right">
        <div class="comment_user">
          <p class="comment_username" v-text="item.name"></p>
          <p class="comment_time" v-text="item.time"></p>
          <span class="dz">
                {{ item.dznum }}
                <i class="dz_img">
                <img src="../../../static/images/dz.png"/>
                </i>
              </span>
        </div>
        <div class="comment_main">
                <span v-text="item.main"></span>
        </div>
      </div>
    </a>
  </div>

</template>

<script>
    export default {
        name: 'Comment',
        props : {
            newitems : {
              type : Array
            }
        },
        data() {
            return {
            }
        }
    }
</script>
<style lang="less" scoped>
  .playlist_music_comment{
    box-sizing: border-box;
    display: flex;
    width: 100%;
    padding: .5rem 0 0 1rem;
    font-size: 1.3rem;
    .playlist_music_comment_left{
      height: 100%;
      margin-right: 1rem;
      display: inline-block;
      .comment_img{
        display: inline-block;
        width: 3rem;
        height: 3rem;
        img{
          width: 100%;
          height: 100%;
          vertical-align: middle;
          border-radius: 50%;
        }
      }
    }
    .playlist_music_comment_right{
      box-sizing: border-box;
      padding-right: 1rem;
      height: 100%;
      flex: 1;
      border-bottom: .01rem solid #f1f1f1;
      .comment_user{
        position: relative;
        height: 3rem;
        width: 100%;
        .comment_username{
          width: 10rem;
          .sc;
        }
        .comment_time{
          font-size: 1rem;
          color: #888;
          .sc;
        }
        .sc{
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .dz{
          position: absolute;
          font-size: 1rem;
          color: #888;
          margin-right: .2rem;
          top: 25%;
          right: 0;
          .dz_img{
            display: inline-block;
            height: 1.5rem;
            width: 1.5rem;
            img{
              height: 100%;
              width: 100%;
              vertical-align: sub;
            }
          }
        }
      }
      .comment_main{
        box-sizing: border-box;
        padding: .8rem .4rem 1rem 0;
        span{
          word-wrap: break-word;
          word-break: break-all;
          white-space: normal;
          line-height: 1.5rem;
        }
      }
    }
  }
</style>
