<template>
  <main class="app-canvas">
    <NuxtPage />
  </main>
</template>

<style>
html,
body,
#__nuxt {
  margin: 0;
  width: 100%;
  height: 100%;
}

body {
  overflow: hidden;
  background: black;
}

.app-canvas {
  position: relative;
  width: 1080px;
  height: 1920px;
  overflow: hidden;

  background-image: url("/images/bg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>