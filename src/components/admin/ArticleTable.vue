<template>
  <div>
    <Head>
      <template slot="Admin">
        <h1 id="h1" class="slide-in-right">文章管理</h1>
      </template>
      <template slot="En">
        <h3 id="h3" class="slide-in-right">Article Management</h3>
      </template>
    </Head>

    <div>
      <article-vue></article-vue>
    </div>
  </div>
</template>

<script>
import Head from './Head.vue'
import articleVue from '@/components/component/ArticleTable.vue'
export default {
  components:{
    Head,
    articleVue
  }
}
</script>

<style scoped>
  
</style>