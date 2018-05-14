<template>
  <div class='card-page'>
    <div v-if='card' class='card-page__content'>
        <h1>{{ card.id }}</h1>
        <div class='card-page__title'>{{ card.title }}</div>
        <div class='card-page__description'>{{ card.description }}</div>
        <div class='card-page__text'>{{ card.text }}</div>
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

<style>
</style>

