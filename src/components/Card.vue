<template>
  <div class='card-list__item'>
    <div class='card-list__title'>
      {{ title }}
    </div>
    <div class='card-list__description'>
      {{ description }}
    </div>
    <router-link :to="{ name: 'card', params: { id } }" class='card-list__link-more'>Подробнее</router-link>
  </div>
</template>

<script>
export default {
  props: [
    'id',
    'title',
    'description'
  ]
}
</script>

<style lang='scss' scoped>
</style>
