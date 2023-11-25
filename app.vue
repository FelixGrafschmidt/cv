<template>
	<div>
		<div class="h-297mm max-h-297mm max-w-210mm w-210mm"></div>
		<div class="max-w-210mm w-210mm">
			<Header :data="data" />
			<h1 class="my-12 ml-20 text-4xl uppercase">{{ data[language].headings.cv }}</h1>
			<Personal :data="data" class="mb-10" />
			<Professional :data="data" class="mb-10" />
			<Education :data="data" class="mb-10" />
			<IT :data="data" class="mb-10" />
			<Misc :data="data" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { data } from "~/resources/data";
	import { type Data } from "~/resources/data";

	const language: Ref<keyof Data> = ref("de");
</script>

<style>
	@import "@unocss/reset/tailwind.css";

	html {
		scrollbar-gutter: unset;
	}
</style>
