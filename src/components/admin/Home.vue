<template>
  <div>
    <head-vue>
      <template slot="Admin">
        <h1 id="h1" class="slide-in-right">首页</h1>
      </template>
      <template slot="En">
        <h3 id="h3" class="slide-in-right">Home</h3>
      </template>
    </head-vue>

    <div>
      <home-vue></home-vue>
    </div>
  </div>
</template>

<script>
import headVue from '@/components/admin/Head.vue'
import HomeVue from '@/components/component/Home.vue'
export default {
  components: { 
    headVue,
    HomeVue
  }
}
</script>

<style scoped>
#head{
  width: 100%;
  height: 10vh;
}
</style>