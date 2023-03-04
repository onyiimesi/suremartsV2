<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  label: String,
  type: String,
  placeholder: String,
  modelValue: String,
});


</script>

<template>
  <div>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :id="id"
      @change="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
input {
  width: 400px;
  height: auto;
  padding: 7px 15px;
  outline: 0;
  border-radius: 5px 0 0 5px;
  border: 1px solid #16a9d6;
  margin: 0 auto;
}
</style>
