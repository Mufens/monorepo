<template>
  <div class="home">
    <h1>Vue3 + Vite 子应用</h1>
    <p>这是 Vue3 子应用的主页</p>

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

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { formatDate, setStorage, getStorage } from "common";

const formattedDate = ref("");

onMounted(() => {
  formattedDate.value = formatDate(new Date());
});

const handleSave = () => {
  setStorage("demo", "Hello from Vue3 App");
  alert("已保存");
};

const handleLoad = () => {
  const value = getStorage("demo", "");
  alert("读取的值：" + value);
};
</script>

<style scoped>
.home {
  padding: 2rem;
  text-align: center;
}
</style>
