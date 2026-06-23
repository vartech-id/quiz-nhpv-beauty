<script setup>
const instagramLink = "https://www.instagram.com/ngobrolinhpv";
</script>
<template>
  <main>
    <h1>IG</h1>
    <AppQrCode :value="instagramLink" :size="300" />
    <NuxtLink to="/nona-welcome">Lanjut</NuxtLink>
  </main>
</template>
