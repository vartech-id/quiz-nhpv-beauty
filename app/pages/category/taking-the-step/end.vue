<script setup>
const customLink = "https://x.nivi.io/nona_hpv_art1"
</script>
<template>
  <div class="wrapper end-page-wrapper end-taking-the-step pt-[33.3rem]">
    <div class="qr-end-wrapper bg-tertiary-pink rounded-2xl">
      <AppQrCode :value="customLink" />
    </div>
    <NextButton
      to="/"
      button-class="long-btn-end bg-tertiary-pink text-secondary-btn"
      >Mulai ulang</NextButton
    >
  </div>
</template>
<style>
.end-taking-the-step {
    background: url("/images/question/taking-the-step/end.png");
}
</style>
