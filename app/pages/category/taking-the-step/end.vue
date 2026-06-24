<script setup>
const { categorySlug } = useCategorySlug();
</script>
<template>
  <main>
    <h1>end-1</h1>
    <h2>{{ categorySlug }}</h2>
    <NextButton
      to="/"
      button-class="w-30 rounded-full bg-tertiary-pink px-6 py-3 text-white"
      >Back</NextButton
    >
  </main>
</template>
