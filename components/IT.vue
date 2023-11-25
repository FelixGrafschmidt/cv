<template>
	<div class="flex flex-col justify-center">
		<h2 class="mx-10 mb-1 flex flex-row gap-2 text-xl uppercase text-teal-700">
			<div class="h-8 w-8 flex flex-row items-center justify-center border-1 border-teal-700 rounded-full">
				<Icon name="fa6-solid:gear" size="16" />
			</div>
			<span>
				{{ localData.headings.itExperience }}
			</span>
		</h2>
		<div class="mb-4 ml-16 mr-20 h-1.5px bg-gray-700"></div>
		<div class="mx-20 flex flex-col gap-2">
			<span class="text-xl font-semibold">{{ localData.itExperience.feTitle }}</span>
			<div class="flex flex-row flex-wrap gap-2">
				<div
					v-for="(entry, i) in localData.itExperience.frontend"
					:key="i"
					class="border-2 border-teal-700 rounded-full bg-teal-100 px-2"
				>
					<span class="text-sm font-bold">{{ entry }}</span>
				</div>
			</div>
			<span class="text-xl font-semibold">{{ localData.itExperience.beTitle }}</span>
			<div class="flex flex-row flex-wrap gap-2">
				<div
					v-for="(entry, i) in localData.itExperience.backend"
					:key="i"
					class="border-2 border-teal-700 rounded-full bg-teal-100 px-2"
				>
					<span class="text-sm font-bold">{{ entry }}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { Data } from "~/resources/data";

	const props = defineProps<{
		data: Data;
		language: keyof Data;
	}>();

	const localData = computed(() => {
		return props.data[props.language];
	});
</script>
