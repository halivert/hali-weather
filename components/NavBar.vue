<script setup lang="ts">
interface Props {
  hideLocation?: boolean
  country?: string
  name?: string
}

defineProps<Props>()
</script>

<template>
  <nav
    class="flex dark:text-white justify-between pt-5 pb-2 px-3 text-sm gap-2 flex-wrap"
  >
    <div class="flex gap-2 flex-[2]">
      <template v-if="!hideLocation">
        <div class="flex items-center justify-center">
          <icons-location class="text-fg w-5" />
        </div>
        <span class="break-words inline-block self-center">
          <template v-if="name && country">{{ name }} {{ country }}</template>
          <template v-else>...</template>
        </span>
        <nuxt-link
          :to="{ name: 'select-city' }"
          class="flex items-center justify-center"
        >
          <icons-chevron-down class="w-5" />
        </nuxt-link>
      </template>
    </div>
    <theme-toggler class="flex-1" />
  </nav>
</template>
