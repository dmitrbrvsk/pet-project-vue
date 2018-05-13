<template>
  <div class='app-layout'>
    <div class='content'>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  components: {
    CardList: () => import('./CardList.vue')
  }
}
</script>
<style lang='scss' scoped>
  .content {
    display: flex;
    justify-content: center;
  }
</style>
