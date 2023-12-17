<template>
  <div>
    <NuxtPage />
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Ephesis&family=Nunito:wght@300;400;500;600;700&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Nunito', sans-serif;
  background-color: #cffafe;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
</style>