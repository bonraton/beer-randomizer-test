<template>
  <div class="beer-card">
    <h3 class="beer-card__title">BAC calculator</h3>
    <form class="form">
      <InputComponent />
      <InputComponent />
      <p class="beer-card__text">Your Bac 999%</p>
      <p class="beer-card__text beer-card__text_small">You are dead</p>
      <button class="beer-card__button">Calculate</button>
    </form>
  </div>
</template>

<script>
import './BacCalculator.css';
import InputComponent from '../Input/InputComponent.vue';

export default {
  components: {
    InputComponent,
  },
  name: 'BacCalculator',
};
</script>
