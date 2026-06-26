<script setup>
import gsap from "gsap";

const choices = [
  {
    label: "HPV? Apa Itu?",
    explanation: "Aku mau tahu lebih banyak tentang HPV",
    answer: "LEARNING_TO_LOVE",
    to: "/category/learning-to-love",
    loveColor: "#ce93d8",
  },
  {
    label: "Aku tahu HPV, tapi...",
    explanation: "Masih ada pertanyaan soal vaksin dan pencegahan",
    answer: "TAKING_THE_STEP",
    to: "/category/taking-the-step",
    loveColor: "#f7b2c4",
  },
  {
    label: "Pencegahan HPV? Udah dong!",
    explanation: "Aku sudah vaksin atau sudah aktif jaga kesehatan",
    answer: "LOVE_AND_GUARDED",
    to: "/category/love-and-guarded",
    loveColor: "#8ed8cf",
  },
];

const stageRef = ref(null);

const showIntro = ref(true);
const choicesReady = ref(false);

const selectedChoice = ref(null);
const isSubmitting = ref(false);

let gsapContext;

function selectChoice(choice) {
  if (!choicesReady.value || isSubmitting.value) return;

  selectedChoice.value = choice;
}

async function goNext() {
  const choice = selectedChoice.value;

  if (!choice || isSubmitting.value) return;

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

onMounted(() => {
  gsapContext = gsap.context(() => {
    const timeline = gsap.timeline();

    gsap.set(".choice-button", {
      autoAlpha: 0,
    });

    gsap.set(".next-button", {
      autoAlpha: 0,
    });

    timeline
      // Box 1 masuk
      .fromTo(
        ".intro-box",
        {
          autoAlpha: 0,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 2,
          delay: 0.5,
          ease: "expoScale",
        },
      )

      // Box 1 terlihat selama beberapa saat
      .to(".intro-box", {
        duration: 1,
      })

      // Box 1 keluar
      .to(".intro-box", {
        autoAlpha: 0,
        duration: 0.5,
        ease: "expoScale",
      })

      // Setelah exit selesai, hapus Box 1 dari DOM
      .call(() => {
        showIntro.value = false;
      })

      // Box 2, 3, 4 muncul berurutan
      .to(".choice-button", {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        stagger: 1,
        ease: "expoScale",
      })

      // Tombol next muncul setelah choices
      .to(
        ".next-button",
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "expoScale",
        },
        "-=0.1",
      )

      // Pilihan baru bisa diklik setelah animasi selesai
      .call(() => {
        choicesReady.value = true;
      });
  }, stageRef.value);
});

onUnmounted(() => {
  gsapContext?.revert();
});
</script>

<template>
  <div class="wrapper nona-question flex justify-center items-center pt-80">
    <div ref="stageRef" class="animation-stage">
      <section v-if="showIntro" class="intro-box pl-25 pb-38">
        <img class="w-full" src="/images/question/intro.png" alt="intro-image" >
      </section>

      <section class="choices-section flex flex-col gap-14">
        <div class="flex flex-col gap-8 text-primary-green">
          <ChatBubbleButton
            v-for="choice in choices"
            :key="choice.answer"
            class="choice-button"
            :selected="selectedChoice?.answer === choice.answer"
            :disabled="!choicesReady || isSubmitting"
            :love-color="choice.loveColor"
            stroke-color="#bd5bb5"
            selected-color="#dddd20"
            @click="selectChoice(choice)"
          >
            <h2 class="text-[2.6rem]">
              {{ choice.label }}
            </h2>

            <p class="text-[1.9rem]">
              {{ choice.explanation }}
            </p>
          </ChatBubbleButton>
        </div>
          <NextButton
            :disabled="!selectedChoice || !choicesReady || isSubmitting"
            :button-class="
              selectedChoice && choicesReady && !isSubmitting
                ? 'w-full px-[2rem] py-[2rem] rounded-3xl text-[2.25rem] cursor-pointer bg-primary-green  text-white'
                : 'w-full px-[2rem] py-[2rem] rounded-3xl text-[2.25rem] cursor-not-allowed bg-gray-300 text-gray-500'
            "
            @click="goNext"
          >
            {{ isSubmitting ? "Menyimpan..." : "Lihat Hasilnya" }}
          </NextButton>
      </section>
    </div>
  </div>
</template>

<style scoped>
.nona-question {
  background: url("./images/nona-question.png");
}

.animation-stage {
  position: relative;
}

/*
  Choices tetap berada di normal document flow.
  Jadi tinggi choices tetap menentukan tinggi parent.
*/
.choices-section {
  position: relative;
}

/*
  Intro ditumpuk di atas choices dan menggunakan area yang sama.
*/
.intro-box {
  position: absolute;
  inset: 0;
  z-index: 10;

  display: flex;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
