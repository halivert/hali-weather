<script setup lang="ts">
import { useGeolocation } from "@vueuse/core"
import { useWeather } from "@/composables/useWeather"

const route = useRoute()

const { coords, locatedAt, error } = useGeolocation()
watch(error, (error) => console.error(error))

const weather = useWeather(route.params.city || coords)
</script>

<template>
	<div class="flex flex-col h-full items-center">
		<nav-bar
			class="w-full max-w-screen-xl"
			:country="weather.country"
			:name="weather.name"
		/>

		<main class="dark:text-white flex-1 mt-3 p-4 w-full">
			<client-only>
				<location-error v-if="error" :error="error" />
				<loading-location v-else-if="!locatedAt" />
				<show-weather v-else-if="weather" v-bind="weather" />
				<template #fallback>
					<loading-location />
				</template>
			</client-only>
		</main>

		<footer
			class="text-center py-1 px-4 dark:text-gray-300 text-xs w-full text-gray-900"
		>
			Hecho con
			<a
				href="https://rapidapi.com/weatherapi/api/weatherapi-com/"
				title="Free Weather API"
				class="text-gray-600 hover:text-gray-800 dark:text-gray-500 focus:underline dark:hover:text-gray-400"
				>WeatherAPI.com</a
			>
		</footer>
	</div>
</template>
