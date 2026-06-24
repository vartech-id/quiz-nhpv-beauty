<script setup>
const instagramLink = "https://www.instagram.com/ngobrolinhpv";
</script>
<template>
  <main>
    <h1>IG</h1>
    <AppQrCode :value="instagramLink" :size="300" />
    <NextButton
      to="/nona-welcome"
      button-class="w-30 rounded-full bg-primary-green px-6 py-3 text-white"
      >Lanjut</NextButton
    >
  </main>
</template>
