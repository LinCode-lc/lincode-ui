<template>
  <div class="lin-switch" :class="{'is-checked':value}" @click="handleClick">
    <span class="lin-switch__core" ref="core">
      <span class="lin-switch__button"></span>
    </span>
    <input type="checkbox" class="lin-switch__input" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: "LinSwitch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  methods: {
    async handleClick() {
      this.$emit("input", !this.value);
      //父组件还没改掉我就setColor,所以要等到value发生改变才调用
      //数据修改完后，等待dom跟新，再修改按钮的颜色
      // vue种dom更新是异步的，父组件更新后子组件才能拿到正确的value
      // console.log(this.value);
      await this.$nextTick();
      //   console.log(this.value);
      this.$refs.input.checked = this.value;
      this.setColor();
    },
    setColor() {
      if (this.activeColor || inactiveColor) {
        let color = this.value ? this.activeColor : this.inactiveColor;
        this.$refs.core.style.borderColor = color;
        this.$refs.core.style.backgroundColor = color;
      }
    }
  },
  mounted() {
    this.setColor();
  }
};
</script>

<style lang="scss" scoped>
.lin-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  &__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .lin-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  // checked style
  &.is-checked {
    .lin-switch__core {
      border-color: #409eff;
      background-color: #409eff;
      .lin-switch__button {
        transform: translateX(20px);
      }
    }
  }
}
// hide input
.lin-switch__input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>