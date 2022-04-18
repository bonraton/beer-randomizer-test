<template>
  <div class="">
    BacCalculator
    <InputComponent />
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
