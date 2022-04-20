<template>
  <span v-show="isVisible" class="preloader"></span>
</template>

<script>
import './PreloaderComponent.css';

export default {
  name: 'PreloaderComponent',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
