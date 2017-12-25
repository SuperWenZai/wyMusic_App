<template>
  <form>
    <div class="search_maim_center">
      <div class="item_one"><span>#</span></div>
      <div class="search"><input type="search" name="search" id="search" placeholder="搜索歌曲、歌手、专辑"/></div>
      <div class="item_twe"><span></span></div>
    </div>
  </form>
</template>

<script>
    export default {
      name : 'searchInput'
    }
</script>
<style lang="less">
  form{
    width: 100%;
    height: 100%;
    .search_maim_center{
      display: flex;
      height: 100%;
      padding: 0 1rem;
      .item_one{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex: 1;
        span{
          display: flex;
          justify-content: flex-end;
          align-items: center;
          width: 2.2rem;
          height: 2.5rem;
          border-radius: 2rem 0 0 2rem;
          background-color: #ebecec;
        }
      }
      .item_twe{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 1;
        span{
          width: 1.5rem;
          height: 2.5rem;
          border-radius: 0 2rem 2rem 0;
          background-color: #ebecec;
        }
      }
      .search{
        display: flex;
        align-items: center;
        flex: 12;
        input{
          width: 100%;
          height: 2.5rem;
          font-size: 1rem;
          background-color: #ebecec;
          border: 0 solid transparent;
        }
      }
    }
  }
</style>
