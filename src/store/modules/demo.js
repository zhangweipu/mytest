//导入需要调用的api,导入的是方法名
import {
  test
}
  from 'api/test'
//导入固定值
import {
  SET_DEMO
} from "../../constants/demo";
//美元符号只是个标志吧
const $demo={

  state:{
    mydate:[]
  },
  mutations:{
    [SET_DEMO](state,data){
      state.mydata=data
    }
  },
  //前端调用的接口
  actions:{
    mydemo({commit},keyword){
      return test(keyword).then(res=>{
        //把值放入mydata
        commit(SET_DEMO,res.data);
        return res.data;
      })
    }
  }
}
