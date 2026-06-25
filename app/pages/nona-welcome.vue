<script setup></script>
<template>
  <div class="nona-welcome-wrapper flex items-center">
    <div class="mx-auto">
      <NextButton
        to="/question"
        button-class="rounded-3xl bg-primary-green h-[100px] w-[550px] text-white text-5xl mt-[52rem]"
        >Yuk Mulai!</NextButton
      >
    </div>
  </div>
</template>
<style>
.nona-welcome-wrapper {
  background: url("./images/welcome-nona.png");
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
