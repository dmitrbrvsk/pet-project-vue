<template>
  <div class='card-page'>
    <div v-if='card' class='card-page__content'>
      <div class='card-page__number'>Номер карточки: {{ card.id }}</div>
      <div class='card-page__title'>{{ card.title }}</div>
      <div class='card-page__description'>{{ card.description }}</div>
      <div class='card-page__text'>{{ card.text }}</div>
      <img :src='card.image_url' class='card-page__image' />
      <router-link :to="{ name: 'home' }" class='card-page__link-back'>На главную</router-link>
    </div>
    <Jumper v-if='!card'></Jumper>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { Jumper } from 'vue-loading-spinner'

  export default {
    components: { Jumper },
    computed: {
      ...mapGetters([
        'cards'
      ]),
      card() {
        const cardId = parseInt(this.$route.params.id)
        return this.cards.find(c => c.id == cardId)
      }
    },
    methods: {
      ...mapActions([
        'getCards'
      ])
    },
    created() {
      if (!this.cards.length) {
        this.getCards()
      }
    }
  }
</script>

<style lang='scss' scoped>
  .card-page {
    &__content {
      max-width: 800px;
      margin-top: 30px;
      padding: 15px;
      border: 1px solid #e4e4ef;

      @media only screen and (max-width: 480px) {
        margin-top: 10px;
      }
    }

    &__number {
      margin-top: 10px;
      text-align: center;
    }

    &__title {
      font-size: 18px;
    }

    &__title,
    &__text,
    &__description {
      margin: 10px 0;
    }

    &__image {
      width: 100%;
      height: auto;
    }

    &__link-back {
      display: block;
      text-align: center;
    }
  }
</style>

