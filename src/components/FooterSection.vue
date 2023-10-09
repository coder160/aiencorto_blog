<template>
  <div class="d-flex align-center justify-space-around pa-4">
    <span class="grey--text">Entradas por página:</span>
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn variant="text" color="primary" class="ml-2" append-icon="mdi-chevron-down" v-bind="props">
          {{ fn_itemsPorPagina }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(number, index) in fn_itemsPorPaginaOpciones" :key="index" :title="number"
          @click="updatePaginacion(number)">
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer></v-spacer>
    <span class="mr-4 grey--text">
      Página {{ fn_paginaActual }} de {{ fn_numeroDePaginas }}
    </span>
    <v-btn icon size="small" @click="paginaAnterior">
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>
    <v-btn icon size="small" class="ml-2" @click="paginaSiguiente">
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({  
  itemsPorPaginaOpciones: Array,
  itemsPorPagina: Number,
  paginaActual: Number,
  numeroDePaginas: Number

})
const emit = defineEmits(['update:itemsPorPaginaOpciones', 'update:itemsPorPagina', 'update:paginaActual', 'update:numeroDePaginas'])

const fn_itemsPorPaginaOpciones = computed({
  get() {
    return props.itemsPorPaginaOpciones
  },
  set(value) {
    emit('update:itemsPorPaginaOpciones', value)
  }
})

const fn_itemsPorPagina = computed({
  get() {
    return props.itemsPorPagina
  },
  set(value) {
    emit('update:itemsPorPagina', value)
  }
})

const fn_paginaActual = computed({
  get() {
    return props.paginaActual
  },
  set(value) {
    emit('update:paginaActual', value)
  }
})

const fn_numeroDePaginas = computed({
  get() {
    return props.numeroDePaginas
  },
  set(value) {
    emit('update:numeroDePaginas', value)
  }
})

function paginaSiguiente() {
  if (fn_paginaActual.value + 1 <= fn_numeroDePaginas.value) fn_paginaActual.value += 1
}

function paginaAnterior() {
  if (fn_paginaActual.value - 1 >= 1) fn_paginaActual.value -= 1
}

function updatePaginacion(pagina) {
  fn_itemsPorPagina.value = pagina
}
</script>
