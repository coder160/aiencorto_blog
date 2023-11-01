<template>
  <v-dialog v-model="view_card.dialog" fullscreen transition="dialog-bottom-transition">
    <v-card :theme="tema_card" class="mx-auto" v-show="view_card.dialog">
      <v-card-item>
        <v-card-title :class="estilo_titulo_card">
          {{ view_card.titulo }}
        </v-card-title>
        <v-img :src="view_card.imagen" :class="estilo_imagen_card" />
        <v-card-title :class="estilo_encabezado_card">
          <v-icon start :color="estilo_iconos_card" :icon="icono_calendario" />
          <span :class="estilo_fecha_card">
            {{ view_card.fecha }}
          </span>
          <v-spacer />
          <v-chip :color="view_card.categoria_color" size="small" variant="tonal">
            <v-icon start :color="estilo_iconos_card" :icon="view_card.icono" />
            {{ view_card.categoria }}
          </v-chip>
        </v-card-title>
        <v-card-subtitle :class="estilo_autor_card">
          {{ view_card.autor }}
        </v-card-subtitle>
        <v-chip-group selected-class="text-primary" column>
          <v-chip v-for="etiqueta in view_card.etiquetas" :key="etiqueta">
            {{ etiqueta }}
          </v-chip>
        </v-chip-group>
        <v-card-text :class="estilo_subtitulo_card">
          <a target="_blank" :href="view_card.url"> {{ view_card.subtitulo }}</a>
        </v-card-text>

      </v-card-item>
      <v-card-text :class="estilo_contenido_card">
        {{ view_card.contenido }}
      </v-card-text>
      <v-divider />
      <v-card-item>
        <div :class="estilo_botones">
          <v-btn :icon="icono_like" @click="like_togepi()" />
          <v-spacer />
          <v-btn :icon="icono_darkMode" @click="modo_oscuro()" />
          <v-spacer />
          <router-link :to="{ name: 'Home'}">
            <v-btn :color="view_card.categoria_color" :prepend-icon="icono_lectura" variant="flat" class="me-2 text-none"
              @click="view_card.dialog = false">
              Cerrar
            </v-btn>
          </router-link>

          <v-btn border :prepend-icon="icono_articulo" variant="text" class="text-none" target="_blank"
            :href="view_card.url">
            Artículo
          </v-btn>
        </div>
      </v-card-item>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { Entradas } from '../assets/entradas.js'


function obtener_entrada(entradas, url) {
  for (let i = 0; i < entradas.length; i++) {
    if (entradas[i].url === url) {
      entradas[i].dialog = true;
      return entradas[i];
    }
  }
  return {};
}
function like_togepi() {
  icono_like.value = icono_like.value == 'mdi-heart' ? "mdi-heart-outline" : "mdi-heart"
}
function modo_oscuro() {
  tema_card.value = tema_card.value == '' ? "dark" : ""
}




const route = useRoute()
const entrada_url = route.params.url
const view_card = obtener_entrada(Entradas, entrada_url);

const estilo_titulo_card = "text-h5 d-flex font-weight-bold"
const estilo_imagen_card = "mt-8 mb-6 rounded w-100"
const estilo_encabezado_card = "text-body-2 d-flex align-center"
const estilo_fecha_card = "text-medium-emphasis font-weight-bold"
const estilo_autor_card = "text-p"
const estilo_subtitulo_card = "text-h6 font-weight-bold"
const estilo_contenido_card = "text-p font-weight-light"
const estilo_iconos_card = "text-white"
const estilo_botones = "d-flex align-center pb-3"
const tema_card = ref("dark")
const icono_calendario = "mdi-calendar"
const icono_lectura = "mdi-book-open-page-variant-outline"
const icono_articulo = "mdi-open-in-app"
const icono_like = ref("mdi-heart-outline")
const icono_darkMode = ref("mdi-theme-light-dark")


</script>