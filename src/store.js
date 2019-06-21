import Vue from 'vue'
import vuex from 'vuex'

import {getInfo} from './api'

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
      SET_INFO : (state, {type,info}) => {
        if(info){
          // 按type为键存入对象
          Vue.set(state.data, type,info)
        }
      }
    },
    actions: {
      FETCH_INFO: ({commit}, {type}) => {
        return getInfo(type).then(info=>{
          commit('SET_TYPE', {type} );
          commit('SET_INFO', {type,info} );
        })
      }
    }
  })
}
