<script setup>
const { whatsappLink } = useCategoryWhatsAppLink();
</script>
<template>
  <div class="wrapper end-page-wrapper end-love-and-guarded pt-[31rem]">
    <div class="qr-end-wrapper bg-fourth-blue rounded-2xl">
      <AppQrCode :value="whatsappLink" />
    </div>
    <NextButton
      to="/"
      button-class="long-btn-end bg-fourth-blue text-tertiary-btn"
      >Mulai ulang</NextButton
    >
  </div>
</template>
<style>
.end-love-and-guarded {
    background: url("/images/question/love-and-guarded/end.png");
}
</style>
