import mListone from '../musicList/listOne.vue'
import mListtwe from  '../musicList/listTwe'
import titleTiph2 from  '../musicTitle/titleTip'
export default {
  name: 'Home',
  components: {
    mListone,
    mListtwe,
    titleTiph2,
  },

  mounted() {

  },

  created() {

  },

  data() {
    return {
      titleone : '推荐歌单',
      titletwe : '最新音乐',
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
      ]
    }
  }
}
