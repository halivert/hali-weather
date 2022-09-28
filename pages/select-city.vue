<script setup lang="ts"></script>

<template>
	<div class="flex flex-col h-full items-center">
		<nav-bar class="w-full max-w-screen-xl" hide-location />

		<main class="dark:text-white flex-1 mt-3 p-4 w-full">
			Hola
			<client-only> </client-only>
		</main>
	</div>
</template>
