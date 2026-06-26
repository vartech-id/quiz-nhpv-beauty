<script setup>
const props = defineProps({
  selected: {
    type: Boolean,
    default: false,
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  strokeColor: {
    type: String,
    default: "#bd5bb5",
  },

  selectedColor: {
    type: String,
    default: "#075b64",
  },

  loveColor: {
    type: String,
    default: "#ce93d8",
  },
});

defineEmits(["click"]);

const bubbleStyle = computed(() => ({
  "--bubble-fill": "#ffffff",
  "--bubble-stroke": props.selected ? props.selectedColor : props.strokeColor,

  "--love-fill": props.loveColor,
}));
</script>

<template>
  <div
    class="bubble-wrapper flex gap-10"
    :style="bubbleStyle"
  >
    <svg
      class="love-svg"
      viewBox="0 0 64.53 63.02"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        class="love-shape"
        d="M63.79,35.06c-3.66,13.67-24.12,21.52-39.52,27.25-5.83,2.17-12.3-.84-14.43-6.69-2.86-7.85-5.44-16.66-7.94-23.65C-8.94,1.55,29.68-14.17,35.04,16.96c14.06-12.91,33.54.32,28.75,18.1Z"
      />
    </svg>

    <button
      type="button"
      class="chat-bubble"
      :class="{ selected }"
      :disabled="disabled"
      @click="$emit('click')"
    >
      <svg
        class="bubble-svg"
        viewBox="0 0 804 163"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          class="bubble-shape"
          d="M806.49,160.61c-.67,3.11-16.79,4.64-29.28-2.44-.67-.38-1.3-.77-1.88-1.16-8.05,5.37-17.72,8.49-28.12,8.49H53.29c-28.05,0-50.79-22.74-50.79-50.79v-61.42C2.5,25.24,25.24,2.5,53.29,2.5h693.92c28.05,0,50.79,22.74,50.79,50.79v61.42c0,7.87-1.79,15.32-4.98,21.96.89,3.74,2.08,6.66,3.05,8.71,3.32,7,7.93,12.12,7.93,12.12,2.02,2.24,2.63,2.47,2.49,3.11Z"
        />
      </svg>

      <div class="bubble-content">
        <slot />
      </div>
    </button>
  </div>
</template>

<style scoped>
.chat-bubble {
  font-family: "Instrument Sans";
  line-height: 3rem;
  position: relative;

  width: 90%;
  padding: 40px 60px; /* y and x selections */
  
  border: 0;
  background: transparent;

  color: var(--bubble-text);
  text-align: left;
  cursor: pointer;

  transition: transform 0.25s ease;
}

.chat-bubble:hover:not(:disabled) {
  transform: scale(1.01);
}

.chat-bubble.selected {
  transform: scale(1.02);
}

.chat-bubble:disabled {
  cursor: not-allowed;
}

.bubble-svg {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  overflow: visible;
  pointer-events: none;
}

.bubble-shape {
  fill: var(--bubble-fill);
  stroke: var(--bubble-stroke);
  stroke-width: 5;

  transition:
    fill 0.25s ease,
    stroke 0.25s ease;
}

.bubble-content {
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
}

.love-svg {
  width: 64px;
  height: auto;
  display: block;
  overflow: visible;
  filter: drop-shadow(0.92px 0.92px 0 rgb(0 0 0 / 20%));
}

.love-shape {
  fill: var(--love-fill);
  transition: fill 0.25s ease;
}
</style>
