<script setup>
const { whatsappLink } = useCategoryWhatsAppLink();
</script>
<template>
  <div class="wrapper end-page-wrapper end-learning-to-love pt-[34.5rem]">
    <div class="qr-end-wrapper bg-secondary-lavender rounded-2xl">
      <AppQrCode :value="whatsappLink" />
    </div>
    <NextButton
      to="/"
      button-class="long-btn-end bg-secondary-lavender text-primary-btn"
      >Mulai ulang</NextButton
    >
  </div>
</template>
<style>
.end-learning-to-love {
    background: url("/images/question/learning-to-love/end.png");
}
</style>

