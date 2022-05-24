<script setup lang="ts">
import Moon from "@/components/icons/Moon.vue"
import Sun from "@/components/icons/Sun.vue"
import LightningBolt from "@/components/icons/LightningBolt.vue"

const { theme: selectedTheme, toggleTheme } = useTheme()

const themes = {
  auto: {
    text: "Automático",
    icon: LightningBolt,
    color: "dark:text-red-500 text-red-700",
  },
  light: {
    text: "Claro",
    icon: Sun,
    color: "dark:text-yellow-400 text-yellow-400",
  },
  dark: {
    text: "Oscuro",
    icon: Moon,
    color: "dark:text-blue-500 text-blue-700",
  },
}
</script>

<template>
  <div
    class="bg-gray-200 dark:bg-bg-600 rounded-full h-8 overflow-hidden min-w-min max-w-[7rem]"
  >
    <div
      class="h-full w-full p-0.5 overflow-hidden relative flex justify-between"
      @click="toggleTheme"
      role="button"
      aria-label="Cambiar tema"
    >
      <client-only>
        <span
          v-cloak
          @click.stop
          role="selected"
          class="absolute theme-selector bg-gray-700 dark:bg-white aspect-square top-1/2 rounded-full -translate-y-1/2 cursor-default transition-transform opacity-20"
          :class="{
            'translate-x-[130%]': selectedTheme === 'light',
            'translate-x-[260%]': selectedTheme === 'dark',
          }"
        ></span>

        <template #fallback><span class="hidden"></span></template>
      </client-only>
      <button
        v-for="(theme, key) in themes"
        type="button"
        :class="[
          'h-full rounded-full aspect-square',
          'p-0.5 dark:bg-bg-700 bg-gray-100',
          theme.color,
        ]"
        @click.stop="() => toggleTheme(key)"
      >
        <component
          :is="theme.icon"
          :title="theme.text"
          :aria-label="theme.text"
        />
      </button>
    </div>
  </div>
</template>

<style>
.theme-selector {
  height: calc(100% - 2px);
}
</style>
