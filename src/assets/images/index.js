import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: 'WEBTN1912',
    age: 15,
    sex: true, //true表示男,false表示女
    salary: 9765.33,
    extends: {
      education: '本科',
      isMarry:true//true表示已婚,false表示未婚
    },
    products: [
      {
        productName: '纽曼（Newman）V98 全网通老人手机',
        salePrice:256
      },
      {
        productName: '荣耀20青春版 AMOLED屏幕',
        salePrice:1199
      },
      {
        productName: 'Apple iPhone 11 (A2223) 128GB 黑色 ',
        salePrice:5999
      },
      {
        productName: '荣耀9X 麒麟810 4000mAh续航',
        salePrice:1299
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
