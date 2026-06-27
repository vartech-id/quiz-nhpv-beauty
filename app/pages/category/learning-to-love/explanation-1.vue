<script setup></script>
<template>
  <div class="wrapper learning-to-love-exp-1 first-exp pt-[85rem]">
    <NextButton
      to="/category/learning-to-love/end"
      button-class="virus-btn bg-secondary-lavender text-primary-btn"
      ><img
        class="virus-icon"
        src="/images/question/virus.svg"
        alt=""
        aria-hidden="true"
      >
      <div class="virus-exp-btn">
        <p>Kanker serviks? Memangnya seberapa serius penyakit ini?</p>
        <p>Tanya NONA untuk jawaban lengkapnya →</p>
      </div>
    </NextButton>
  </div>
</template>
<style>
.learning-to-love-exp-1 {
  background: url("/images/question/learning-to-love/explanation-1.png");
}

.first-exp {
  display: flex;
  justify-content: center;
}

.virus-btn {
  border-radius: 1.5rem;
  padding: 2rem;
  font-size: 2rem;
  line-height: 2.2rem;
  display: flex;
  gap: 2rem;
}

.virus-icon {
  width: 63px;
  height: 63px;
}
</style>
