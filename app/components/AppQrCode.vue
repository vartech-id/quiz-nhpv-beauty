<script setup>

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 300,
  },
});

const qrSrc = ref("");
const errorMessage = ref("");

async function createQr() {
  try {
    errorMessage.value = "";

    qrSrc.value = await generateQrCode(props.value, {
      width: props.size,
    });
  } catch (error) {
    qrSrc.value = "";
    errorMessage.value = error.message;
  }
}

watch(() => [props.value, props.size], createQr, {
  immediate: true,
});
</script>

<template>
  <div>
    <img v-if="qrSrc" :src="qrSrc" :width="size" :height="size" alt="QR Code" >
    <p v-else-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>
