import {
  addArticle,
  getSentence,
  getArticle,
  searchAllArticle
} from 'api/article';

import {
  SET_ARTICLE
} from "../../constants/article";

const $article = {
  state: {
    data: []
  },
  mutations: {
    //这个可以是变量
    [SET_ARTICLE](state, data) {
      state.data = data
    }
  },
  actions: {
    addArticleAction({commit}, keyword) {
      console.info("aaaa")
      console.info("addArticle")
      return addArticle(keyword).then(res => {
        //给变量赋值，在引用页面可以直接使用
        // commit(SET_ARTICLE,res.data);
        console.info("调用添加接口")
        console.info(res)
        return res.data;
      })
    },
    getSentence({commit}, keyword) {
      return getSentence(keyword).then(res => {
        console.info("获取数据")
        return res.data;
      })
    },
    getArticleAction({commit},keyword){
      return getArticle(keyword).then(res=>{
        console.info('得到所有文章信息')
        return res.data
      })
    },
    searchAllArticleAction({commit},keyword){
      return searchAllArticle(keyword).then(res=>{
        console.info('得到所有文章信息')
        return res.data
      })
    }
  }
}
export default $article
