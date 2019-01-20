import {
  poem
} from 'api/single'
import {SET_DATA} from "../../constants/singledata";

const $single = {
  state: {
    data: []
  },
  mutations: {
    [SET_DATA](state, data) {
      state.data = data
    }
  },
  //前端调用的接口
  actions: {
    singleaction({commit}, keyword) {
      return poem(keyword).then(res => {
        //把值放入mydata
        commit(SET_DATA,res.data);
        return res.data;
      })
    }
  }
}
export default $single
