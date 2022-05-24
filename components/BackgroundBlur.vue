<script setup lang="ts">
defineProps<{
  side: string
  color: "bg-yellow-400" | "bg-blue-400"
}>()
</script>

<template>
  <div
    :class="[color, side]"
    class="absolute aspect-square h-1/3 top-4 rounded-full drop-shadow blur-2xl
    dark:opacity-30 opacity-50"
  ></div>
</template>
