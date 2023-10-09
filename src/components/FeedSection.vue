<template>
  <v-toolbar extended floating dense dark rounded color="blue-darken-4" height="100" class="mt-n8 elevation-20">
    <v-col class="d-flex flex-column fill-height justify-center align-center text-white mt-8">
      <v-col>
        <v-text-field v-model="fn_consultaEntrada" clearable hide-details prepend-inner-icon="mdi-magnify"
          placeholder="Buscar" variant="solo" density="comfortable">
        </v-text-field>
      </v-col>
      <v-col>
        <v-row>
          <v-select v-model="fn_filtroEntradas" hide-details :items="fn_filtros" :item-value="item => item.toLowerCase()"
            prepend-inner-icon="mdi-sort" label="Ordenar por" density="comfortable">
          </v-select>
          <v-btn-toggle v-model="fn_ordenEntradas" mandatory>
            <v-btn color="blue" value="asc">
              <v-icon icon="mdi-arrow-up" />
            </v-btn>
            <v-btn color="blue" value="desc">
              <v-icon icon="mdi-arrow-down" />
            </v-btn>
          </v-btn-toggle>
        </v-row>
      </v-col>
    </v-col>
  </v-toolbar>
  <v-card class="mt-12 elevation-20">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col v-for="item in entradasBlog.items" :key="item.name">
          <PostCard :card="item.raw" />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import PostCard from './PostCard.vue'
import { computed } from 'vue'
const props = defineProps(['consultaEntrada', 'filtroEntradas', 'ordenEntradas', 'filtros', 'entradasBlog'])
const emit = defineEmits(['update:consultaEntrada', 'update:filtroEntradas', 'update:ordenEntradas', 'update:filtros'])

const fn_consultaEntrada = computed({
  get() {
    return props.consultaEntrada
  },
  set(value) {
    emit('update:consultaEntrada', value)
  }
})

const fn_filtroEntradas = computed({
  get() {
    return props.filtroEntradas
  },
  set(value) {
    emit('update:filtroEntradas', value)
  }
})

const fn_ordenEntradas = computed({
  get() {
    return props.ordenEntradas
  },
  set(value) {
    emit('update:ordenEntradas', value)
  }
})

const fn_filtros = computed({
  get() {
    return props.filtros
  },
  set(value) {
    emit('update:filtros', value)
  }
})
</script>

