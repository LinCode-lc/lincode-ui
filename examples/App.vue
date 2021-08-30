<template>
  <div id="app">
    <lin-button @click="visible = true">按钮</lin-button>
    <lin-dialog width="50%" top="200px" :visible.sync="visible" title="温习提示">
      <h1>你好</h1>
      <template v-slot:footer>
        <lin-button>确认</lin-button>
        <lin-button>取消</lin-button>
      </template>
    </lin-dialog>
    <lin-input placeholder="请输入用户名" type="text"></lin-input>
    <lin-input placeholder="请输入用户名" type="password"></lin-input>

    <lin-switch v-model="active" active-color="gray" inactive-color="rgb(251, 114, 153)"></lin-switch>

    <lin-radio-group v-model="gender">
      <lin-radio label="0">男</lin-radio>
      <lin-radio label="1">女</lin-radio>
    </lin-radio-group>

    <lin-checkbox v-model="ischeck"></lin-checkbox>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      visible: false,
      active: false,
      gender: "1",
      ischeck: false
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
