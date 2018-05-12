<template>
  <div class='app-layout'>
    <div class='content'>
      <CardList/>
    </div>
  </div>
</template>
<script>
import CardList from './CardList.vue'

export default {
  components: { CardList }
}
</script>
<style lang='scss' scoped>
  .content {
    display: flex;
    justify-content: center;
  }
</style>
