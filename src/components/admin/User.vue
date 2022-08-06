//用户管理

<template>
  <div>
    <Head>
      <template slot="Admin">
        <h1 id="h1" class="slide-in-right">用户信息修改</h1>
      </template>
      <template slot="En">
        <h3 id="h3" class="slide-in-right">User Management</h3>
      </template>
    </Head>
    
    <div id="table">
      
    <UserTable></UserTable>
      
    </div>
  </div>

</template>

<script>
import Head from './Head.vue'
import UserTable from '@/components/component/UserTable.vue'

export default {
  
  data() {
    return {
      userTable: UserTable,
    }
  },
  components: { 
    Head,
    UserTable
  },
  methods: {
    async Del(){

    }
  },
}
</script>

<style scoped>

</style>