<template>
	<span></span>
</template>

<style scoped>
@keyframes rotate {
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
}

span {
	border: 2px solid;
	border-radius: 100%;
	animation: rotate infinite linear 1s;
	border-bottom-color: transparent;
	border-left-color: transparent;
	display: block;
	aspect-ratio: 1 / 1;
}
</style>
