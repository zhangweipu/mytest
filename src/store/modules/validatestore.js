import {
  loadvalidate
} from 'api/validates'
import {SET_DATA} from "../../constants/validate";


const $validate = {
  state: {
    data: []
  },
  mutations: {
    [SET_DATA](state, data) {
      state.data = data
    }
  },
  actions: {
    //登陆调用的action
    loginsys({commit}, keyword) {
      return loadvalidate(keyword).then(res => {
        commit(SET_DATA,res.data);
        return res.data;
      })
    }
  }
}
export default $validate
