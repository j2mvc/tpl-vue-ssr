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
    return store.dispatch('FETCH_INFO',route.params)
  },
  computed: {
      info(){
        console.log('[home computed.]')
        return this.$store.getters.activeData
      }
  },
  created(){
    console.log('[home created.]')
    this.$store.dispatch('FETCH_INFO',{type:'article'});
  }
}
</script>
