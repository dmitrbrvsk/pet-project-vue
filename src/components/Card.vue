<template>
  <router-link
    :to="{ name: 'card', params: { id: card.id } }"
    :class="{ 'card-list__item_big': card.type == 'double' }"
    :style="{ 'backgroundImage': `url(${card.image_url})` }"
    class='card-list__item'
  >
    <div class='card-list__header'>
      <div class='card-list__title'>
        {{ card.title }}
      </div>
      <div class='card-list__description'>
        {{ card.description }}
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: [
    'card'
  ]
}
</script>

<style lang='scss' scoped>
  $width-card: 300px;
  $double-width-card: $width-card * 2;
  $mobile-width-card: 95%;

  .card-list {
    margin: 0 10px;

    &__header {
      padding: 10px;
      background-color: hsla(0,0%,7%,.5);
      opacity: 0;
      transition: opacity .3s ease;

      @media only screen and (max-width: 1024px) {
        opacity: 1;
      }
    }

    &__title {
      margin: 10px 0;
      font-size: 18px;
      font-weight: bold;
    }

    &__description {
      font-size: 15px;
    }

    &__item {
      width: $width-card;
      height: 200px;
      margin: 5px;
      border-radius: 4px;
      border: 1px solid #f5f5f7;
      background-position: center;
      background-size: cover;
      text-align: center;
      color: #fff;
      text-decoration: none;

      &:hover {
        .card-list__header {
          opacity: 1;
        }
      }

      &_big {
        width: $double-width-card;
      }

      @media only screen and (max-width: 1024px) {
        max-width: $width-card - 10px;

        &_big {
          max-width: $double-width-card;
        }
      }

      @media only screen and (max-width: 480px) {
        width: $mobile-width-card;
        max-width: initial;
        min-width: 300px;
        margin: 0 0 10px 0;

        &_big {
          max-width: $mobile-width-card;
        }
      }
    }
  }
</style>
