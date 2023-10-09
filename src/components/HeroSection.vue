<template>
  <v-parallax :height="hero_data.altura" :src="hero_data.imagen" class="elevation-4">
    <v-container :class="container_class">
      <h4 class="text-h6"> {{ hero_data.encabezado }}</h4>
      <h1 class="text-h4 font-weight-bold font-italic"> {{ hero_data.titulo }}</h1>
      <h2 class="text-h6"> {{ hero_data.subtitulo }}</h2>
    </v-container>
  </v-parallax>
</template>

<script setup>
const props = defineProps({
  hero_data: Object
})
const container_class = "d-flex flex-column fill-height justify-center align-center text-white pt-8 pb-0"
</script>