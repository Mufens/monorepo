<template>
  <div class="home">
    <h1>Vue2 + Webpack 子应用</h1>
    <p>这是 Vue2 子应用的主页</p>

    <div class="common-card" style="max-width: 500px; margin: 20px auto">
      <h3>公共工具库示例</h3>
      <p>当前时间：{{ formattedDate }}</p>
      <div style="margin-top: 20px">
        <button class="common-btn primary" @click="handleSave">保存</button>
        <button
          class="common-btn success"
          @click="handleLoad"
          style="margin-left: 10px"
        >
          读取
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate, setStorage, getStorage } from "common";

export default {
  name: "Home",
  data() {
    return {
      formattedDate: "",
    };
  },
  mounted() {
    this.formattedDate = formatDate(new Date());
  },
  methods: {
    handleSave() {
      setStorage("demo", "Hello from Vue2 App");
      alert("已保存");
    },
    handleLoad() {
      const value = getStorage("demo", "");
      alert("读取的值：" + value);
    },
  },
};
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}
</style>
