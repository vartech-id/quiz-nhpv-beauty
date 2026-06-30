<script setup>
const isExporting = ref(false);
const errorMessage = ref("");

async function exportResults() {
  errorMessage.value = "";
  isExporting.value = true;

  try {
    const response = await fetch("/api/results/export");

    if (!response.ok) {
      throw new Error("Export gagal");
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "quiz-results.xlsx";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  } catch (error) {
    errorMessage.value = error.message || "Export gagal";
  } finally {
    isExporting.value = false;
  }
}
</script>

<template>
  <div class="export-page">
    <h1>Export Results</h1>

    <button
      type="button"
      class="export-button"
      :disabled="isExporting"
      @click="exportResults"
    >
      {{ isExporting ? "Exporting..." : "Download Excel" }}
    </button>

    <p
      v-if="errorMessage"
      class="export-error"
    >
      {{ errorMessage }}
    </p>
    <NuxtLink to="/" class="export-button">Home</NuxtLink>
  </div>
</template>

<style>
.export-page {
  width: 1080px;
  height: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  color: #00525c;
}

.export-page h1 {
  font-size: 4rem;
  line-height: 1;
}

.export-button {
  border: 0;
  border-radius: 1.5rem;
  padding: 1.5rem 7rem;
  background: #00525c;
  color: white;
  font-size: 2.5rem;
  line-height: 1;
  cursor: pointer;
}

.export-button:disabled {
  opacity: 0.7;
  cursor: wait;
}

.export-error {
  font-size: 2rem;
  color: #661041;
}
</style>
