<template>
  <div class="lin-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LinForm",
  provide() {
    return {
      Form: this
    };
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: "120px"
    }
  }
};
</script>
<style lang="scss" scoped>
</style>