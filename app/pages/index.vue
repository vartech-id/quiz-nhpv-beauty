<script setup>
const instagramLink = "https://www.instagram.com/ngobrolinhpv";
</script>
<template>
  <div
    class="wrapper opening flex flex-col gap-12 items-center justify-center pb-50"
  >
    <div class="text-center text-[2.9rem] text-primary-green">
      <h1>Sebelum mulai activity ini,</h1>
      <h2>Yuk Follow dulu akun instagram NgobrolinHPV</h2>
    </div>
    <div class="bg-white p-10 rounded-[3rem]">
      <AppQrCode :value="instagramLink" :size="400" />
    </div>

    <NextButton
      to="/nona-welcome"
      button-class="px-18 py-6 rounded-full bg-primary-green text-white text-5xl leading-none"
      >Lanjut</NextButton
    >
  </div>
</template>
<style>
.wrapper {
  height: 100vh;
}

.opening {
  background: url("./images/border-opening.png");
  background-position: center;
  background-repeat: no-repeat;
}

.long-btn-welcome {
  padding: 2rem 25rem;
  border-radius: 1.5rem;
  font-size: 2.5rem;
  line-height: 2.5rem;
}
</style>
