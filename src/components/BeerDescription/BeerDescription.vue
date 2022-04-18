<template>
  <section class="beer-card">
    <h3 class="beer-card__title">Beer description</h3>
    <ul v-for="(item, index) in beerInfo" :key="index" class="beer-card__list">
      <li class="beer-card__item">{{ index }}</li>
      <li class="beer-card__item beer-card__item_accent">{{ item }}</li>
    </ul>
  </section>
</template>

<script>
import './BeerDescription.css';

export default {
  name: 'BeerDescription',
  data() {
    return {
      beerInfo: {
        brand: 'someBrand',
        name: 'someName',
        style: 'someStyle',
        alc: 'someAlc',
        ibu: 'someIbu',
        blg: 'someBlg',
      },
    };
  },
};
</script>
