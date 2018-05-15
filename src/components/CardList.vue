<template>
  <div class='card-list__container'>
    <div v-if='cards.length' class='card-list'>
      <Card
        v-for='(card, index) in cards'
        :key='index'
        :card='card'
      />
    </div>
    <Jumper v-if='!cards.length'></Jumper>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { Jumper } from 'vue-loading-spinner'
  import Card from './Card.vue'

  export default {
    components: { Card, Jumper },
    computed: {
      ...mapGetters([
        'cards'
      ]),
    },
    methods: {
      ...mapActions([
        'getCards'
      ])
    },
    created() {
      this.getCards()
    }
  }
</script>

<style lang='scss' scoped>
  .card-list {
    display: flex;
    flex-flow: row wrap;
    max-width: 950px;
    margin-top: 50px;

    @media only screen and (max-width: 1024px) {
      max-width: 700px;
      justify-content: center;
    }

    @media only screen and (max-width: 480px) {
      margin-top: 10px;
      max-width: 400px;
    }
  }
</style>
