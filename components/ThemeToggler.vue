<script setup lang="ts">
import Moon from "@/components/icons/Moon.vue"
import Sun from "@/components/icons/Sun.vue"
import LightningBolt from "@/components/icons/LightningBolt.vue"

const { theme: selectedTheme, toggleTheme } = useTheme()

const themes = {
  auto: {
    text: "Automático",
    icon: LightningBolt,
    color: "text-red-500 bg-bg-700",
  },
  light: {
    text: "Claro",
    icon: Sun,
    color: "text-yellow-400 bg-bg-700",
  },
  dark: {
    text: "Oscuro",
    icon: Moon,
    color: "text-blue-500 bg-bg-700",
  },
}
</script>

<template>
  <div class="text-white bg-bg-600 rounded-full h-8 overflow-hidden min-w-min">
    <div
      class="h-full w-full p-0.5 overflow-hidden relative flex justify-between"
      @click="toggleTheme"
      role="button"
      aria-label="Cambiar tema"
    >
      <client-only class="hidden">
        <span
          @click.stop
          role="selected"
          class="absolute theme-selector bg-white aspect-square top-1/2 rounded-full -translate-y-1/2 cursor-default transition-transform opacity-20"
          :class="{
            'translate-x-[133%]': selectedTheme === 'light',
            'translate-x-[266%]': selectedTheme === 'dark',
          }"
        >
        </span>
      </client-only>
      <button
        v-for="(theme, key) in themes"
        type="button"
        :class="['h-full rounded-full aspect-square p-0.5', theme.color]"
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
