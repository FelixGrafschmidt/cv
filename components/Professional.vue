<template>
	<div class="flex flex-col justify-center">
		<h2 class="mx-10 mb-1 flex flex-row gap-2 text-xl uppercase text-teal-700">
			<div class="h-8 w-8 flex flex-row items-center justify-center border-1 border-teal-700 rounded-full">
				<Icon name="fa6-solid:briefcase" size="16" />
			</div>
			<span>
				{{ localData.headings.professionalExperience }}
			</span>
		</h2>
		<div class="mb-4 ml-16 mr-20 h-1.5px bg-gray-700"></div>
		<div class="flex flex-col gap-4">
			<div
				v-for="(entry, i) in localData.professionalExperience"
				:key="i"
				class="grid grid-cols-[0.6fr_1.4fr] grid-rows-1 mx-20 items-start"
			>
				<span class="text-sm text-gray-600">{{ entry.timespan }}</span>
				<div class="flex flex-col gap-1">
					<span>{{ entry.employer }}</span>
					<span class="font-bold text-teal-700">{{ entry.position }}</span>
					<ul class="ml-8 list-circle">
						<li v-for="(task, j) in entry.tasks" :key="j" class="pl-2">
							{{ task }}
						</li>
					</ul>
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
