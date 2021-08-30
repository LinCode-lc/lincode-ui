<template>
  <div class="lin-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "LinRadioGroup",
  props: {
    value: null
  },

  provide() {
    return {
      RadioGroup: this
    };
  }
};
</script>

<style>
</style>