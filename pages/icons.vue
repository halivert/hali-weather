<script setup lang="ts">
const { data: conditions } = await useFetch("/api/weather/conditions")
</script>

<template>
	<div class="text-white text-left">
		<article
			class="text-white text-left border border-red-400"
			v-for="condition in conditions"
			:key="condition.code"
			:title="condition.icon"
		>
			<strong :title="condition.night">{{ condition.day }}</strong>
			<div class="flex">
				<img
					:title="condition.icon"
					:src="`http://cdn.weatherapi.com/weather/64x64/day/${condition.icon}.png`"
				/>
				<img
					:title="condition.icon"
					:src="`http://cdn.weatherapi.com/weather/64x64/night/${condition.icon}.png`"
				/>
			</div>
		</article>
	</div>
</template>
