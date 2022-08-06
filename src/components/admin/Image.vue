<template>
  <div>
    <Head>
      <template slot="Admin">
        <h1 id="h1" class="slide-in-right">图片管理</h1>
      </template>
      <template slot="En">
        <h3 id="h3" class="slide-in-right">Image Management</h3>
      </template>
    </Head>

    <div id="table">
      <image-vue></image-vue>
    </div>
  </div>
</template>

<script>
import Head from './Head.vue'
import ImageVue from '../component/Image.vue'
export default {
  components: { 
    Head,
	ImageVue
  },
  data() {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
  
</style>