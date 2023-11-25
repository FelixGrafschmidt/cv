<template>
	<div class="flex flex-col justify-center">
		<h2 class="mx-10 mb-1 flex flex-row gap-2 text-xl uppercase text-teal-700">
			<div class="h-8 w-8 flex flex-row items-center justify-center border-1 border-teal-700 rounded-full">
				<Icon name="fa6-solid:user" size="16" />
			</div>
			<span>
				{{ localData.headings.personalData }}
			</span>
		</h2>
		<div class="mb-4 ml-16 mr-20 h-1.5px bg-gray-700"></div>
		<div class="grid grid-cols-[0.6fr_1.4fr] grid-rows-3 mx-20 items-center gap-y-1">
			<span class="text-sm text-gray-600">{{ localData.personalData.pob.title }}</span>
			<span>{{ localData.personalData.pob.value }}</span>
			<span class="text-sm text-gray-600">{{ localData.personalData.nationality.title }}</span>
			<span>{{ localData.personalData.nationality.value }}</span>
			<span class="text-sm text-gray-600">{{ localData.personalData.maritalStatus.title }}</span>
			<span>{{ localData.personalData.maritalStatus.value }}</span>
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
