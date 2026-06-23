<script setup>
const choices = [
  {
    label: "HPV? Apa Itu?",
    explanation: "Aku mau tau lebih banyak tentang HPV",
    answer: "LEARNING_TO_LOVE",
    to: "/category/learning-to-love",
  },
  {
    label: "B",
    explanation: "Masih ada pertanyaan soal vaksin & pencegahan",
    answer: "TAKING_THE_STEP",
    to: "/category/taking-the-step",
  },
  {
    label: "C",
    explanation: "Aku sudah vaksin atau sudah aktif jaga kesehatan",
    answer: "LOVE_AND_GUARDED",
    to: "/category/love-and-guarded",
  },
];

const isSubmitting = ref(false);

async function selectAnswer(choice) {
  if (isSubmitting.value) return;

  isSubmitting.value = true;

  try {
    await $fetch("/api/results", {
      method: "POST",
      body: {
        answer: choice.answer,
      },
    });

    await navigateTo(choice.to);
  } catch (error) {
    console.error("Gagal menyimpan jawaban:", error);
    isSubmitting.value = false;
  }
}
</script>
<template>
  <main>
    <h1>question</h1>
    <button
      v-for="choice in choices"
      :key="choice.answer"
      type="button"
      :disabled="isSubmitting"
      @click="selectAnswer(choice)"
    >
      <h2>{{ choice.label }}</h2>
      <p>{{ choice.explanation }}</p>
    </button>
  </main>
</template>
