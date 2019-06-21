import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

export function createStore () {
  return new vuex.Store({
    state: {
       type:'',
       data:{article:{}}
    },
    getters:{
      activeType({type}){
        return type;
      },
      activeData(state,getters){
        return state.data[getters.activeType]

      }
    },
    mutations: {
      SET_TYPE:(state,{type})=>{
        state.type = type;
      },
      SET_INFO : (state, {type,data}) => {
        if(data){
          // 按type为键存入对象
          Vue.set(state.data, type,data)
        }
      }
    },
    actions: {
      FETCH_INFO: ({commit}, {type}) => {

        return new  Promise((resolve,reject)=>{
          let data = undefined;

          if(type == 'article') {
            data = {
              id: new Date().getTime(),
              'html': '<h1>这是内容，需要通过浏览器查看网站源代码方法能看到。</h1>'
            }
          }
          if(data){
            commit('SET_TYPE', {type} );
            commit('SET_INFO', {type,data} );
            resolve();
          }else {
            reject();
          }
        })
      }
    }
  })
}
