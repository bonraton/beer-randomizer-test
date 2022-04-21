<template>
  <section :class="beerCardClass">
    <h3 class="beer-card__title">BAC calculator</h3>
    <form class="form">
      <InputComponent
        inputName="weight"
        labelValue="Your weight in KG"
        :inputValue="weight"
        :spanError="weightValidation"
        @input="onInputChange"
      />
      <InputComponent
        inputName="pintAmount"
        labelValue="Pint amount"
        :inputValue="pintAmount"
        :spanError="alcValidation"
        @input="onInputChange"
      />
      <p :class="textClass">Your BAC is around {{ bac }} %</p>
      <p :class="`${textClass} beer-card__text_small`">
        {{ jokeComputed }}
      </p>
      <button @click.prevent="onSubmit" :disabled="isValidated" class="beer-card__button">
        Calculate
      </button>
    </form>
  </section>
</template>

<script>
import './BacCalculator.css';
import InputComponent from '../Input/InputComponent.vue';
import { calculateBac, generateJoke } from '../../helpers/functions';
import { validationMessages, heaviestPerson, beerRecord } from '../../helpers/constant';
import { symbolValidation, rangeValidation } from '../../helpers/validation';

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
      joke: '',
      errors: {
        weight: '',
        amount: '',
      },
      isDisabled: false,
    };
  },
  computed: {
    jokeComputed() {
      return generateJoke(this.bac);
    },
    beerCardClass() {
      return this.isVisible ? 'beer-card beer-card_form' : 'beer-card beer-card_hidden';
    },
    isValidated() {
      return this.weightValidation.length > 1 || this.alcValidation.length > 1;
    },
    weightValidation() {
      const symbol = symbolValidation(this.weight, validationMessages.symbol);
      const range = rangeValidation(this.weight, heaviestPerson, validationMessages.weight);
      return symbol || range;
    },
    alcValidation() {
      const symbol = symbolValidation(this.pintAmount, validationMessages.symbol);
      const range = rangeValidation(this.pintAmount, beerRecord, validationMessages.alc);
      return symbol || range;
    },
    textClass() {
      return this.bac > 0 ? 'beer-card__text' : 'beer-card__text beer-card__text_hidden';
    },
  },
  methods: {
    onSubmit() {
      const alc = localStorage.getItem('alcohol') || '4,5%';
      this.bac = calculateBac(alc, this.weight, this.pintAmount);
    },
    onInputChange(e) {
      this[e.target.id] = e.target.value;
    },
  },
};
</script>
