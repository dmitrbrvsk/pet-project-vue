<template>
  <div :class="{'card-list__item_big': type == 'double'}" class='card-list__item'>
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
    'type',
    'title',
    'description'
  ]
}
</script>

<style lang='scss' scoped>
  $width-card: 200px;
  $double-width-card: $width-card * 2;
  $mobile-width-card: 95%;

  .card-list__item {
    width: $width-card;
    height: 150px;
    margin: 0 20px 20px 0;
    border-radius: 4px;
    border: 1px solid #f5f5f7;

    &_big {
      width: $double-width-card;
    }
  }

  @media only screen and (max-width: 480px) {
    .card-list__item {
      width: $mobile-width-card;
      min-width: 300px;
      margin: 0 0 10px 0;

      &_big {
        width: $mobile-width-card;
      }
    }
  }
</style>
