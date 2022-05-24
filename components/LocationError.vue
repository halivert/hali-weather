<script setup lang="ts">
defineProps<{
  error: GeolocationPositionError
}>()
</script>

<template>
  <div>
    <h1 v-if="error.code !== error.PERMISSION_DENIED">Error</h1>

    <p>
      <template v-if="error.code === error.PERMISSION_DENIED">
        Por favor comparte tu ubicación o selecciona una ubicación de la lista.
      </template>
      <template v-else-if="error.code === error.POSITION_UNAVAILABLE">
        Ubicación no disponible.
      </template>
      <template v-else-if="error.code === error.TIMEOUT">
        El tiempo de espera se agotó. Intentando de nuevo...
      </template>
      <template v-else> Desconocido </template>
    </p>
  </div>
</template>
