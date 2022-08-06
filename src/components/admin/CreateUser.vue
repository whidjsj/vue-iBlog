<template>
  <div>
    <Head>
      <template slot="Admin">
        <h1 id="h1" class="slide-in-right">创建用户</h1>
      </template>
      <template slot="En">
        <h3 id="h3" class="slide-in-right">Create User</h3>
      </template>
    </Head>

    <create-user-vue id="form"></create-user-vue>
  </div>
</template>

<script>
import Head from '@/components/admin/Head.vue'
import CreateUserVue from '@/components/component/CreateUser.vue'
export default {
  components: { 
    Head,
    CreateUserVue
  }
}
</script>

<style scoped>
#form{
  width: 60vw;
  height: 60vh;
  margin: auto;
}
</style>