<template>
  <section class="main__illustrations">
    <img
      :class="`main__illustration ${isStarted ? 'main__illustration_left' : ''}`"
      src="../../images/beer_left.svg"
      alt="pint-beer"
    />
    <img
      :class="`main__illustration ${isStarted ? 'main__illustration_right' : ''}`"
      src="../../images/beer_right.svg"
      alt="pint-beer"
    />
  </section>
</template>

<script>
import './BeerIllustrations.css';

export default {
  props: {
    isStarted: {
      type: Boolean,
      required: true,
    },
  },
  name: 'BeerIllustrations',
};
</script>
