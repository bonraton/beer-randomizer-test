<template>
  <label :for="inputName" class="input__label"
    >{{ labelValue }}
    <div class="input-container">
      <span class="input__error">{{ spanError }}</span>
      <input
        @input.prevent="onInputChange"
        class="input"
        :id="inputName"
        :name="inputName"
        type="text"
        :value="inputValue"
        autocomplete="off"
      />
    </div>
  </label>
</template>

<script>
import './InputComponent.css';

export default {
  name: 'InputComponent',
  props: {
    inputName: {
      type: String,
      required: true,
    },
    labelValue: {
      type: String,
      required: true,
    },
    inputValue: {
      type: String,
      required: true,
    },
    spanError: {
      type: String,
      required: true,
    },
  },
  methods: {
    onInputChange(e, value) {
      this.$emit(e.target.name, value);
    },
  },
};
</script>
