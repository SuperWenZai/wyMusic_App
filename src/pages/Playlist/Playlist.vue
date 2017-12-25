<template>
    <div class="Playlist">
      <div class="all_height">
        <div class="playlist_header">
          <div class="playlist_header_img">
            <img src="../../../static/images/listim.jpg"/>
            <span class="hot_num">44.5w</span>
            <span class="music_list_logo">歌单</span>
          </div>
          <div class="playlist_header_text">
            <h2 class="playlist_header_text_top">中国风曾是这样的</h2>
            <a class="playlist_header_text_bottom">
              <div class="text_bottom_logo">
                <img src="../../../static/images/listim.jpg"/>
              </div>
              <span class="text_bottom_name">明子mingzi</span>
            </a>
          </div>
        </div>
        <div class="playlist_center">
          <div class="playlist_center_top">
            <label>标签：</label>
            <span class="playlist_center_top_span">华语</span>
            <span class="playlist_center_top_span">影视原声</span>
            <span class="playlist_center_top_span">思念</span>
          </div>
          <div class="playlist_center_bottom" @click="isflex3 = !isflex3">
            <div :class="['playlist_center_bottom_main',{'flex3' : isflex3}]">
              <span>简介：<br/></span>
              <span>封面剧照：<不能说的秘密> 2007<br/></span>
              <span><br/></span>
              <span>光影流年 曾几何时，单车成为了一些电影中的重要道具，伴着相宜难忘的配乐，一起承载电影所要表达的各种情感，如无悔活过的青春、血浓于水的亲情、刻骨铭心的爱情、弥足珍贵的友谊、甚至一段快意的恩仇。这些电影因为有了单车与配乐，有助主题进一步升华。<br/></span>
              <span><br/></span>
              <span>让我们在声光回忆中，一起找寻曾有的单车情结 ....<br/></span>
            </div>
            <span class="tb">
              <img src="../../../static/images/top.png" :class="{'xz' : !isflex3}" />
            </span>
          </div>
        </div>
        <m-playlist_music :tittle="'歌曲列表'">
          <m-listtwe :newitems="items" :pdindex="true" :isnumone="true"></m-listtwe>
        </m-playlist_music>
        <m-playlist_music :tittle="'评论列表'">
          <m-comment :newitems="Comment_items"></m-comment>
        </m-playlist_music>
        <div class="playlist_bottom">
          更多精彩评论
        </div>
        <div class="bottom">
          <a class="bottom_button">收藏歌单</a>
        </div>
      </div>
    </div>
</template>

<style lang="less" scoped="">
  .Playlist{
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    margin: 0 auto;
    background-color: #f8f8f8;
    font-size: 1.5rem;
    .playlist_header{
      display: flex;
      box-sizing: border-box;
      padding: 2rem 1rem;
      width: 100%;
      height: 14rem;
      background-color: #673F45;
      color: white;
      .playlist_header_img{
        position: relative;
        height: 10rem;
        width: 10rem;
        img{
          width: 100%;
          height: 100%;
        }
        .hot_num{
          position: absolute;
          font-size: 1rem;
          top:.2rem;
          right: .5rem;
        }
        .music_list_logo{
          position: absolute;
          top: 10%;
          left: 0;
          padding: .1rem .6rem .1rem .8rem;
          font-size: 1rem;
          background-color: rgba(217,48,48,.8);
          border-radius: 0 .5rem .5rem 0;
        }
      }
      .playlist_header_text{
        flex: 1;
        margin-left: 1rem;
        .playlist_header_text_top{
          padding: 1rem 0;
          font-size: 1.5rem;
        }
        .playlist_header_text_bottom{
          display: inline-block;
          box-sizing: border-box;
          color: hsla(0,0%,100%,.7);
          margin-top: 2rem;
          font-size: 1.3rem;
          width: 100%;
          height: 2.5rem;
          .text_bottom_logo{
            display: inline-block;
            width: 2.5rem;
            height: 2.5rem;
            img{
              border-radius: 50%;
              vertical-align: middle;
              width: 100%;
              height: 100%;
            }
          }
          .text_bottom_name{
            vertical-align: middle;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-box-orient: vertical;
            word-wrap: normal;
            word-break: normal;
            white-space: nowrap;
            width: 10rem;
          }
        }
      }
    }
    .playlist_center{
      box-sizing: border-box;
      padding: 1rem;
      font-size: 1.3rem;
      color: #333333;
      .playlist_center_top{
        box-sizing: border-box;
        width: 100%;
        padding-bottom: 1rem;
        .playlist_center_top_span{
          border: 1px solid #ebebeb;
          border-radius: 5rem;
          padding: .1rem .5rem;
          margin-right: .5rem;
        }
      }
      .playlist_center_bottom{
        position: relative;
        width: 100%;
        padding-bottom: 1rem;
        box-sizing: border-box;
        .playlist_center_bottom_main{
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          word-wrap: break-word;
          word-break: break-all;
          white-space: normal;
          &.flex3{
            -webkit-line-clamp: 3;
          }
        }
        .tb{
          position: absolute;
          right: 0;
          bottom: 0;
          height: 1rem;
          width: 1rem;
          img{
            width: 100%;
            height: 100%;
          }
          .xz{
            transform:rotate(180deg);
          }
        }
      }
    }
    .playlist_bottom{
      width: 100%;
      height: 5rem;
      font-size: 1.4rem;
      color: #888;
      box-sizing: border-box;
      padding: 1rem 1.5rem 8.5rem 1.5rem;
      text-align: center;
    }
    .bottom{
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: white;
      width: 100%;
      height: 4.5rem;
      box-sizing: border-box;
      display: flex;
      padding: .5rem 2rem;
      .bottom_button{
        box-sizing: border-box;
        border-radius: 5rem;
        text-align: center;
        vertical-align: middle;
        flex: 1;
        color: white;
        background-color: #d43b32;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

</style>

<script>
  import mListtwe from  '@/components/musicList/listTwe'
  import mComment from  '@/components/Comment/Comment'
  import mPlaylist_music from  '@/components/playlist_music/playlist_music'
    export default {
        name: 'Playlist',
        data() {
            return {
              isflex3 : true,
              items : [
                {one : 'safdgvfdgvdfa', twe : 'dfdsvfdgfdgvbfd'},
                {one : 'safd123', twe : 'dfdsvfdgf124324'},
                {one : 'safdgv432543dfa', twe : 'dfdsvf54366dgvbfd'},
                {one : 'sghdfg', twe : 'retredgtrhtrbfd'},
                {one : 'regr', twe : 'dfdsvftwrtr'},
                {one : 'safdgv432543dfa', twe : 'dfdsvf54366dgvbfd'},
                {one : 'sghdfg', twe : 'retredgtrhtrbfd'},
                {one : 'regr', twe : 'dfdsvftwrtr'},
                {one : 'safdgv432543dfa', twe : 'dfdsvf54366dgvbfd'},
                {one : 'sghdfg', twe : 'retredgtrhtrbfd'},
                {one : 'regr', twe : 'dfdsvftwrtr'},
              ],
              Comment_items : [
                {name : '隔壁的王老虎',time : '2017年8月21日',dznum : '233',main : '首先封面表白我女神…然后说说我的单车故事吧。那次我想去学校车棚租个单车带女朋友出去玩，结果她坐在我后面说：你腰好细啊，我都抱不到……'}
                ,{name : '隔壁的王老虎',time : '2017年8月21日',dznum : '233',main : '首先封面表白我女神…然后说说我的单车故事吧。那次我想去学校车棚租个单车带女朋友出去玩，结果她坐在我后面说：你腰好细啊，我都抱不到……'}
                ,{name : '隔壁的王老虎',time : '2017年8月21日',dznum : '233',main : '首先封面表白我女神…然后说说我的单车故事吧。那次我想去学校车棚租个单车带女朋友出去玩，结果她坐在我后面说：你腰好细啊，我都抱不到……'}
                ,{name : '隔壁的王老虎',time : '2017年8月21日',dznum : '233',main : '首先封面表白我女神…然后说说我的单车故事吧。那次我想去学校车棚租个单车带女朋友出去玩，结果她坐在我后面说：你腰好细啊，我都抱不到……'}
              ]
            }
        },
      components: {
        mListtwe,
        mComment,
        mPlaylist_music
      },
    }
</script>
