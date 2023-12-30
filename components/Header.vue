<template>
	<thead class="relative h-36 flex flex-col table-header-group justify-center">
		<!-- Line -->
		<div class="mx-8 mt-16 h-2px from-gray-600 via-teal-600 to-teal-600 from-90% bg-gradient-to-r"></div>
		<!-- Name -->
		<div class="absolute right-16 top-6 from-gray-600 to-teal-600 from-60% bg-gradient-to-r">
			<div class="m-2px bg-white">
				<div class="from-gray-600 to-teal-700 from-70% bg-gradient-to-r bg-clip-text p-2 text-2xl uppercase text-transparent">
					{{ localData.personalData.name }}
				</div>
			</div>
		</div>
		<!-- Info -->
		<div class="mx-20 mt-4 flex flex-row justify-end gap-4 text-xs">
			<span class="flex flex-row items-center gap-1">
				<Icon name="fa:home" size="12" class="text-teal-700" />
				{{ localData.personalData.city }}
			</span>
			<a class="flex flex-row items-center gap-1" :href="`mailto:${localData.personalData.mail}`">
				<Icon class="mt-2px text-teal-700" name="fa:envelope" size="12" />
				{{ localData.personalData.mail }}
			</a>
			<a class="flex flex-row items-center gap-1" :href="`tel:${localData.personalData.phone}`">
				<Icon class="mt-2px text-teal-700" name="fa:phone" size="12" />
				{{ localData.personalData.phone }}
			</a>
		</div>
	</thead>
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
