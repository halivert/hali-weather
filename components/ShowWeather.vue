<script setup lang="ts">
interface Props {
  region: string
  country: string
  name: string
  timezoneId: string
  localtime: string
  temperature: number
  isDay: number
  windSpeed: number
  cloud: number
  feelsLike: number
  uv: number
  condition: string
  conditionIcon: string
  conditionCode: number
  humidity: number
}

const props = defineProps<Props>()

const { data: conditions } = await useFetch("/api/weather/conditions")

const conditionText = computed(
  () => conditions.value[props.conditionCode]?.[props.isDay ? "day" : "night"]
)

const stats = [
  {
    icon: "http://cdn.weatherapi.com/weather/64x64/day/230.png",
    text: `${props.windSpeed} km/h`,
    label: "Viento",
  },
  {
    icon: "http://cdn.weatherapi.com/weather/64x64/day/266.png",
    text: `${props.humidity}%`,
    label: "Humedad",
  },
]
</script>

<template>
  <div
    class="flex flex-col justify-around flex-1 h-full max-w-screen-sm w-full mx-auto"
  >
    <h1 class="flex-1">El clima de hoy</h1>

    <div
      class="text-center flex-[3] flex flex-col justify-end pb-4 relative self-center"
    >
      <background-blur color="bg-yellow-400" side="left-2" />
      <background-blur color="bg-blue-400" side="right-2" />

      <picture class="flex-1 flex items-center justify-center z-10">
        <img :src="conditionIcon" :alt="conditionText" class="w-44" />
      </picture>

      <h3 v-if="conditionText" class="text-xl font-semibold relative">
        Está <span class="lowercase">{{ conditionText }}</span>
      </h3>

      <h2 class="text-8xl font-semibold mt-8 ml-10 relative">
        {{ temperature }}
        <span
          class="text-fg text-7xl -translate-x-8 -translate-y-9 inline-block"
        >
          °
        </span>
      </h2>

      <h4 class="text-sm">Sensación térmica: {{ feelsLike }}°</h4>
    </div>

    <footer class="flex-1 flex justify-around mt-4">
      <div class="text-center" v-for="stat in stats" :key="stat.label">
        <figure class="w-full">
          <img :src="stat.icon" class="inline-block" :alt="stat.text" />
          <figcaption>{{ stat.text }}</figcaption>
        </figure>
        <strong>{{ stat.label }}</strong>
      </div>
    </footer>
  </div>
</template>
