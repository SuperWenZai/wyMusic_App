
import mListtwe from  '@/components/musicList/listTwe'
import mHotop from  '@/components/musicHotop/hotop'
export default {
  name: 'Home',
  props : {
    data : Number
  },
  components: {
    mListtwe,
    mHotop
  },

  mounted() {

  },

  created() {

  },

  data() {
    return {
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
