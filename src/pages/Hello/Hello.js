import mHeader from '@/components/musicNav/header'
import mHeadertop from '@/components/musicNav/headerTop'
import mHome from '@/components/Home/home.vue'
import mHotmusic from '@/components/HotMusic/hotmusic.vue'
import mSearch from '@/components/Search/search.vue'
export default {
    name: 'index',
    components: {
        mHeader,
        mHeadertop,
        mHome,
        mHotmusic,
        mSearch
    },
    data() {
        return {
            url: "/home",
            selectId: 0
        }
    },
    methods: {

    },
    created() {
        switch (this.$route.path) {
            case "/home":
                this.selectId = 0;
                break;
            case "/hotmusic":
                this.selectId = 1;
                break;
            case "/search":
                this.selectId = 2;
                break;
        }
    },
    mounted() {

    },
}