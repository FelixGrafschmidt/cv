<template>
	<div class="flex flex-col justify-center">
		<h2 class="mx-10 mb-1 flex flex-row gap-2 text-xl uppercase text-teal-700">
			<div class="h-8 w-8 flex flex-row items-center justify-center border-1 border-teal-700 rounded-full">
				<Icon name="fa6-solid:star" size="16" />
			</div>
			<span>
				{{ localData.headings.additionalExperience }}
			</span>
		</h2>
		<div class="mb-4 ml-16 mr-20 h-1.5px bg-gray-700"></div>
		<div class="flex flex-col gap-4">
			<div
				v-for="(entry, i) in localData.additionalExperience"
				:key="i"
				class="grid grid-cols-[0.6fr_1.4fr] grid-rows-1 mx-20 items-start"
			>
				<span class="text-sm text-gray-600">{{ entry.title }}</span>
				<ul>
					<li v-for="(task, j) in entry.values" :key="j">
						{{ task }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type { Data } from "~/resources/data";

	const props = defineProps<{
		data: Data;
	}>();

	const localData = computed(() => {
		return props.data.de;
	});
</script>
