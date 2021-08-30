<template>
  <div class="lin-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "LinCheckboxGroup",
  provide() {
    return {
      checkboxGroup: this
    };
  },
  props: {
    value: {
      // get an array
      type: Array
    }
  }
};
</script>