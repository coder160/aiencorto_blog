<template>
  <v-card :width="ancho_card" :theme="tema_card" class="mx-auto mt-6">
    <v-card-item>
      <v-card-title :class="estilo_encabezado_card">
        <v-icon start :color="color_iconos_card" :icon="icono_calendario" />
        <span :class="estilo_fecha_card">
          {{ card.fecha }}
        </span>
        <v-spacer />
        <v-chip :color="card.categoria_color" size="small" variant="tonal">
          <v-icon start :color="color_iconos_card" :icon="card.icono" />
          {{ card.categoria }}
        </v-chip>
      </v-card-title>
      <v-img :src="card.imagen" :class="estilo_imagen_card" :gradient="card.gradiente_imagen"
        :content-class="estilo_imagen_contenido_card" height="180px" cover />
      <v-card-title :class="estilo_titulo_card">
        {{ card.titulo }}
        <v-chip-group selected-class="text-primary" column>
          <v-chip v-for="etiqueta in card.etiquetas" :key="etiqueta">
            {{ etiqueta }}
          </v-chip>
        </v-chip-group>
      </v-card-title>
    </v-card-item>

    <v-divider />
    <v-card-item>
      <div :class="estilo_botones">
        <v-btn :icon="icono_like" @click="like_togepi()" />
        <v-spacer />
        <v-btn :color="card.categoria_color" :prepend-icon="icono_lectura" variant="flat" class="me-2 text-none"
          @click="card.dialog = true">
          En Corto
        </v-btn>
        <v-btn border :prepend-icon="icono_articulo" variant="text" class="text-none" target="_blank" :href="card.url">
          Artículo
        </v-btn>
      </div>
    </v-card-item>
  </v-card>
  <PostView :card="card" />
</template>


<script setup>
import { ref } from 'vue'
import PostView from './Post.vue'
const props = defineProps({
  card: Object
})

function like_togepi() {
  icono_like.value = icono_like.value == 'mdi-heart' ? "mdi-heart-outline" : "mdi-heart"
}
const estilo_encabezado_card = "text-body-2 d-flex align-center text-white"
const estilo_fecha_card = "text-medium-emphasis font-weight-bold"
const estilo_titulo_card = "text-h5 text-white"
const estilo_imagen_card = "mt-2 mb-2 rounded"
const estilo_imagen_contenido_card = "d-flex flex-column justify-space-between"
const estilo_botones = "d-flex align-center py-0"

const ancho_card = 333
const tema_card = "dark"
const color_iconos_card = "white"
const icono_calendario = "mdi-calendar"
const icono_lectura = "mdi-book-open-page-variant-outline"
const icono_articulo = "mdi-open-in-app"
const icono_like = ref("mdi-heart-outline")
</script>