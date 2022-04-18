<template>
  <section :class="isVisible ? 'beer-card' : 'beer-card beer-card_hidden'">
    <h3 class="beer-card__title">BAC calculator</h3>
    <form class="beer-card__form">
      <InputComponent
        inputName="weight"
        labelValue="Your weight in KG"
        :inputValue="weight"
        spanError="error"
        @input="onInputChange"
      />
      <InputComponent
        inputName="pintAmount"
        labelValue="Pint amount"
        :inputValue="pintAmount"
        spanError="error"
        @input="onInputChange"
      />
      <p class="beer-card__text">Your BAC is around {{ bac }} %</p>
      <p class="beer-card__text beer-card__text_small">You are dead</p>
      <button @click.prevent="onSubmit" class="beer-card__button">Calculate</button>
    </form>
  </section>
</template>

<script>
import './BacCalculator.css';
import InputComponent from '../Input/InputComponent.vue';
import { calculateBac } from '../../helpers/functions';

export default {
  components: {
    InputComponent,
  },
  name: 'BacCalculator',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      bac: 0,
      weight: '70',
      pintAmount: '1',
    };
  },
  methods: {
    onSubmit() {
      this.bac = calculateBac(localStorage.getItem('alcohol'), this.weight, this.pintAmount);
      console.log(this.bac);
    },
    onInputChange(e) {
      this[e.target.id] = e.target.value;
    },
  },
};
</script>
