<template>
  <button class="my-button">{{ label }}</button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    label: {
      type: String,
      default: '这是定义在全局的MyButton组件'
    }
  }
}
</script>

<style scoped>
.my-button {
  background-color: rgb(228, 13, 13);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

</style>
