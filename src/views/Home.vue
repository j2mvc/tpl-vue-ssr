<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>下面是动态获取的内容</h1>
    <div v-html="info.html" v-if="info" class="content"></div>

  </div>
</template>

<script>

export default {
    components: {
  },
  asyncData ({ store, route }) {
    // 添加同步数据方法，用于服务器渲染
    // 触发 action 后，会返回 Promise
    console.log('[home asyncData.]')
    return store.dispatch('FETCH_INFO',{type:'article'})
  },
  computed: {
      info(){
        return this.$store.getters.activeData
      }
  },
  mounted(){
     console.log('[home mounted.]')
     this.$store.dispatch('FETCH_INFO',{type:'article'});
   }
}
</script>
