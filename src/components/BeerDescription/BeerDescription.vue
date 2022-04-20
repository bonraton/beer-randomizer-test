<template>
  <section
    :class="
      isVisible
        ? 'beer-card beer-card_description'
        : 'beer-card beer-card_description beer-card_hidden'
    "
  >
    <h3 class="beer-card__title">Beer description</h3>
    <ul
      v-show="index !== 'id'"
      v-for="(item, index) in beerInfo"
      :key="index"
      class="beer-card__list"
    >
      <li class="beer-card__item">{{ index }} :</li>
      <li class="beer-card__item beer-card__item_accent">{{ item }}</li>
    </ul>
  </section>
</template>

<script>
import './BeerDescription.css';
import { defaultBeer } from '../../helpers/constant';

export default {
  name: 'BeerDescription',
  data() {
    return {
      defaultInfo: defaultBeer,
    };
  },
  props: {
    beerInfo: {
      type: Object,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
    computed: {
      beerInfoComputed() {
        return defaultBeer.alc;
      },
    },
  },
};
</script>
