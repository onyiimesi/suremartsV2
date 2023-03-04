<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  type: String,
});
</script>

<template>
  <div>
    <button :type="type"><slot /></button>
  </div>
</template>

<style scoped>
button {
  background-color: #16a9d6;
  color: #000;
  padding: 8px;
  border-radius: 0 5px 5px 0;
  transition: 0.5s ease;
  height: auto;
  border: 0;
  text-align: center;
}
button:hover {
  background-color: #1bb5e4;
  color: #fff;
}
</style>
