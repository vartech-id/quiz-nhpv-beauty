<script setup>
defineProps({
  to: {
    type: String,
    default: null,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  buttonClass: {
    type: String,
    default: "",
  },
});

defineEmits(["click"]);
</script>

<template>
  <!-- Mode link: untuk routing langsung -->
  <NuxtLink
    v-if="to && !disabled"
    :to="to"
    class="inline-flex items-center justify-center"
  >
    <span
      class="next-button inline-flex items-center justify-center"
      :class="buttonClass"
    >
      <slot>Next</slot>
    </span>
  </NuxtLink>

  <!-- Mode button: untuk menjalankan logic parent -->
  <button
    v-else
    type="button"
    class="next-button inline-flex items-center justify-center"
    :class="buttonClass"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot>Next</slot>
  </button>
</template>

<style scoped>
.next-button:not(:disabled) {
  animation: next-button-scale 1.8s ease-in-out infinite;
  transform-origin: center;
  will-change: transform;
}

@keyframes next-button-scale {
  0%,
  100% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.09);
  }
}
</style>