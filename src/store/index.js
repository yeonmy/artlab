import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state () {
    return {
      works: [
        { id: 1, imgUrl: require('@/assets/image2/1 (1).png'), workName: '追光的少女', likes: '8.3k', brief: '在自己的世界呆久了，相当于变相的画地为牢。拨开困扰你的叶子，或许就有一大片暖暖的阳光洒在你身上。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 2, imgUrl: require('@/assets/image2/1 (2).png'), workName: '摄影少年', likes: '1.5k', brief: '镜头下的梦想之旅，摄影少年带你感受摄影的美丽，走进大自然和烟火生活，见证少年的勇气和决心。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 3, imgUrl: require('@/assets/image2/1 (3).png'), workName: '清廉', likes: '2.3k', brief: '南朝·宋·范晔《后汉书·羊续传》：“续敝衣薄食，车马羸败，府丞尝献其生鱼，续乃出前所县者，以杜其意。”', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 4, imgUrl: require('@/assets/image2/1 (4).png'), workName: '少女的卧室', likes: '1.3k', brief: '如果是说每个女孩都有一个公主梦，那这里肯定就是梦里面的那个房间。浪漫甜美的马卡龙配色，简约的欧式家具，每一个角落都十分精致，真的很美。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 5, imgUrl: require('@/assets/image2/1 (5).png'), workName: '林间阳光', likes: '1.4k', brief: '在晴朗天气里，重点观察穿过山林的阳光洒在树木、草丛等植物上，所形成的各种反光，透光和光影交错的现象，并选用恰当材质或方法展现在画面上。', author: '愿为西南风', authorImgUrl: require('@/assets/image3/Ellipse_160.png') },
        { id: 6, imgUrl: require('@/assets/image2/1 (6).png'), workName: '悲伤', likes: '2.3k', brief: '你会永远看不到我在你面前流下的一滴泪，因为当你不在的时候，我才会有哭泣的。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 7, imgUrl: require('@/assets/image2/1 (7).png'), workName: '葡萄', likes: '1.2k', brief: '葡萄美酒夜光杯，欲饮琵琶马上催。醉卧沙场君莫笑，古来征战几人回？', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 8, imgUrl: require('@/assets/image2/1 (8).png'), workName: '海底的光', likes: '1.6k', brief: '大海的深处贩卖着蓝色的孤独，温柔的人会带你离开海底。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 9, imgUrl: require('@/assets/image2/1 (9).png'), workName: '柔情似水', likes: '1.3k', brief: '第一眼就心动的人，再看多少眼都还是会心动', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 10, imgUrl: require('@/assets/image2/1 (10).png'), workName: '云端的少女', likes: '1.3k', brief: '流水爱高山，它滋养苍绿千千万万年。飞鸟爱天空，他不留痕迹，划过白昼与黑暗。而你，有没有如此热爱过，像此间人生不能重复般炽热地、绵长地、锱铢必较或不求回报地热爱。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 11, imgUrl: require('@/assets/image2/1 (11).png'), workName: '玻璃', likes: '1.2k', brief: '温柔的晚风，傍晚的晚霞，冒泡的可乐，人间的美好多着呢，你要相信你配得上世间所有的温柔。', author: '愿为西南风', authorImgUrl: require('@/assets/image3/Ellipse_160.png') },
        { id: 12, imgUrl: require('@/assets/image2/1 (12).png'), workName: '烟火', likes: '2.3k', brief: '将生活嚼得有滋有味，把日子过得活色生香往往靠的不只是嘴，还要有一颗浸透人间烟火的心。', author: '长逝入君怀', authorImgUrl: require('@/assets/image3/Ellipse_160-3.png') },
        { id: 13, imgUrl: require('@/assets/image2/1 (13).png'), workName: '特立独行', likes: '1.3k', brief: '做自己喜欢的事情，奔赴真实简单的生活，是是非非总是少不了，闲言碎语平常心就好，毕竟日子是自己的。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 14, imgUrl: require('@/assets/image2/1 (14).png'), workName: '荷叶精灵', likes: '1.6k', brief: '她可以褪色，可以枯萎，怎样都可以，但我只要看她一眼，万般柔情就涌上心头。', author: '长逝入君怀', authorImgUrl: require('@/assets/image3/Ellipse_160-3.png') },
        { id: 15, imgUrl: require('@/assets/image2/1 (15).png'), workName: '逆光而来', likes: '5.3k', brief: '有孤夜寂寥。不要怕，回头看看，家人就在身后，打着那束温暖的光。', author: '愿为西南风', authorImgUrl: require('@/assets/image3/Ellipse_160.png') },
        { id: 16, imgUrl: require('@/assets/image2/1 (16).png'), workName: '特立独行', likes: '1.3k', brief: '做自己喜欢的事情，奔赴真实简单的生活，是是非非总是少不了，闲言碎语平常心就好，毕竟日子是自己的。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 17, imgUrl: require('@/assets/image2/1 (17).png'), workName: '窥视者', likes: '1.3k', brief: '人的两只眼睛，全是平行的，看人却不平等。人的两只耳朵，分在两侧，却总是偏听。人只有一张嘴，却总能说出两面话。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 18, imgUrl: require('@/assets/image2/1 (18).png'), workName: '奋斗人生', likes: '1.3k', brief: '人的两只眼睛，全是平行的，看人却不平等。人的两只耳朵，分在两侧，却总是偏听。人只有一张嘴，却总能说出两面话。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 19, imgUrl: require('@/assets/image2/1 (19).png'), workName: '书中自有颜如玉', likes: '1.6k', brief: '我曾踏月而来，只因你在山中。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 20, imgUrl: require('@/assets/image2/1 (20).png'), workName: '挑灯夜读', likes: '10.3k', brief: ' 现实是此岸，理想是彼岸，中间隔着湍急的河流，行动则是架在川上的桥梁。', author: '愿为西南风', authorImgUrl: require('@/assets/image3/Ellipse_160.png') },
        { id: 21, imgUrl: require('@/assets/image2/1 (21).png'), workName: '奇幻暗夜', likes: '1.5k', brief: '无数的彩灯像是一颗颗星星从天而降，洒在面上，显得非常美丽可怖。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 22, imgUrl: require('@/assets/image2/1 (22).png'), workName: '冰冷海底', likes: '9.6k', brief: '我们都清楚生活是幽暗的海 但是当你拉着我的手出舱走到甲板上时 这浪漫又普通的一切都在告诉着我 爱能拯救我。', author: '月光族', authorImgUrl: require('@/assets/image3/Ellipse_160-2.png') },
        { id: 23, imgUrl: require('@/assets/image2/1 (23).png'), workName: '水域海怪', likes: '1.3k', brief: '月光照在微波粼粼的海面上，海面上映托着石头的倒影。星星在一旁眨着快活的眼睛。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 24, imgUrl: require('@/assets/image2/1 (24).png'), workName: '笔中仙', likes: '2.7k', brief: '天下有两难：登天难，求人更难。地上有两苦：黄连苦，没钱更苦。世界有两险：江湖险，人心更险。人间有两薄：春饼薄，人情更薄。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 25, imgUrl: require('@/assets/image2/1 (25).png'), workName: '焚烧万物', likes: '4.3k', brief: '净土何如乐土真，金莲开处善根成。西来孰谓南无佛，今见南楼一佛生。', author: '月光族', authorImgUrl: require('@/assets/image3/Ellipse_160-2.png') },
        { id: 26, imgUrl: require('@/assets/image2/1 (26).png'), workName: '山中女鬼', likes: '2.3k', brief: '临异境，林石涌奇峰。万笏朝天惊鬼斧，千岩竞秀诧神工。人在画图中。', author: '月光族', authorImgUrl: require('@/assets/image3/Ellipse_160-2.png') },
        { id: 27, imgUrl: require('@/assets/image2/1 (27).png'), workName: '病态', likes: '1.1k', brief: '人间没有永恒的夜晚，世界没有永恒的冬天。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 28, imgUrl: require('@/assets/image2/1 (28).png'), workName: '樱花树下', likes: '3.6k', brief: '不是只有礼物和鲜花才浪漫，愿意听我碎碎念也很浪漫。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 29, imgUrl: require('@/assets/image2/1 (29).png'), workName: '未来科技', likes: '5.3k', brief: '世界灿烂盛大，欢迎回家。', author: '向野的野象', authorImgUrl: require('@/assets/image2/1 (1).png') },
        { id: 30, imgUrl: require('@/assets/image2/1 (30).png'), workName: '眼睛里的湖泊', likes: '2.3k', brief: '我喜欢星辰大海喜欢落日夕阳，那天太阳落山时，我喜欢的事物有了着落，当然还有那天夜晚悄悄亲吻我的你', author: '愿为西南风', authorImgUrl: require('@/assets/image3/Ellipse_160.png') }
      ]
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home,
    user
  }
})
