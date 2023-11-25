<template>
	<div class="break-inside-auto">
		<div class="max-w-210mm w-210mm">
			<Cover :data="data" :language="language" />
		</div>
		<div class="max-w-210mm w-210mm">
			<Header :data="data" :language="language" />
			<h1 class="my-12 ml-20 text-4xl uppercase">{{ data[language].headings.cv }}</h1>
			<Personal :data="data" :language="language" class="mb-10" />
			<Professional :data="data" :language="language" class="mb-10" />
			<Education :data="data" :language="language" class="mb-10" />
			<IT :data="data" :language="language" class="mb-10" />
			<Misc :data="data" :language="language" />
		</div>
	</div>
</template>

<script setup lang="ts">
	import { data } from "~/resources/data";
	import { type Data } from "~/resources/data";

	const language: Ref<keyof Data> = ref("en");
</script>

<style>
	@import "@unocss/reset/tailwind.css";

	html {
		scrollbar-gutter: unset;
	}
</style>
