<script setup>
const config = useRuntimeConfig();
useHead({
  title: config.public.appTitle
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Source+Sans+Pro:wght@300;400;700&family=Unbounded:wght@300;400&display=swap');

body,
html {
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
}

html, body {
  overscroll-behavior-x: none;
}
</style>