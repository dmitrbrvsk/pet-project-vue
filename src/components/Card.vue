<template>
  <div class='card-list__item'>
    <div class='card-list__title'>
      {{ title }}
    </div>
    <div class='card-list__description'>
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'title',
    'description'
  ]
}
</script>

<style lang='scss' scoped>
</style>
