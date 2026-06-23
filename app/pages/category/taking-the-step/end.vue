<script setup>
const { categorySlug } = useCategorySlug();
</script>
<template>
  <main>
    <h1>end-1</h1>
    <h2>{{ categorySlug }}</h2>
    <NuxtLink to="/">Back</NuxtLink>
  </main>
</template>
