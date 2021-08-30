<template>
  <label class="lin-radio" :class="{'is-checked':label===model}">
    <span class="lin-radio__input">
      <span class="lin-radio__inner"></span>
      <input type="radio" class="lin-radio__original" :name="name" :value="label" v-model="model" />
    </span>
    <span class="lin-radio__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "LinRadio",
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.RadioGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    isGroup() {
      return !!this.RadioGroup;
    }
  },
  methods: {},
  inject: {
    RadioGroup: {
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.lin-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  &__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .lin-radio__inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .lin-radio__original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .lin-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.lin-radio.is-checked {
  .lin-radio__input {
    .lin-radio__inner {
      border-color: rgb(251, 114, 153);
      background-color: rgb(251, 114, 153);
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .lin-radio__label {
    color: rgb(251, 114, 153);
  }
}
</style>