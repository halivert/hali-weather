<script setup lang="ts">
interface Props {
  country: string
  name: string
}

defineProps<Props>()
</script>

<template>
  <nav
    class="flex text-white justify-between pt-5 pb-2 px-3 text-sm gap-2 flex-wrap"
  >
    <div class="flex gap-2 flex-[2]">
      <div class="flex items-center justify-center">
        <icons-location class="text-fg w-5" />
      </div>
      <span class="break-words inline-block self-center">
        <template v-if="name && country"> {{ name }} {{ country }} </template>
        <template v-else>...</template>
      </span>
      <button type="button" class="flex items-center justify-center">
        <icons-chevron-down class="w-5" />
      </button>
    </div>
    <theme-toggler class="flex-1" />
  </nav>
</template>
