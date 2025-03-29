<template>
	<div class="relative mt-96 flex flex-col">
		<div class="mx-8 mt-16 h-2px from-gray-600 via-teal-600 to-teal-600 from-60% bg-gradient-to-r"></div>
		<div class="absolute left-42 top-0 from-gray-600 to-teal-600 from-60% bg-gradient-to-r">
			<div class="m-1.5px bg-white">
				<div class="h-20 from-gray-600 to-teal-700 from-70% bg-gradient-to-r bg-clip-text p-2 text-5xl uppercase text-transparent">
					<span class="border-b-4 border-teal-700">
						{{ localData.personalData.name }}
					</span>
				</div>
			</div>
		</div>
		<div class="absolute left-42 h-8cm w-8cm bg-white p-1 -top-74">
			<img src="/photo.jpg" :alt="localData.personalData.name" />
		</div>
		<span class="ml-42 mt-10 text-2xl">Full Stack Web Developer</span>
		<div class="mx-42 mt-8">
			<h2 class="mb-1 flex flex-row gap-2 text-xl uppercase text-teal-700">
				<div class="h-8 w-8 flex flex-row items-center justify-center border-1 border-teal-700 rounded-full">
					<Icon name="fa6-solid:star" size="16" />
				</div>
				<span>
					{{ localData.headings.summary }}
				</span>
			</h2>
			<div class="ml-10">{{ localData.cover.summary }}</div>
		</div>
		<div class="mx-42 mt-8 flex flex-col justify-end gap-2">
			<div class="flex flex-row items-center">
				<div class="h-8 w-8 flex flex-row items-center justify-center rounded-full">
					<Icon class="mt-2px text-teal-700" name="fa:home" size="16" />
				</div>
				<span class="ml-1.7">
					{{ [localData.personalData.city].join(", ") }}
				</span>
			</div>
			<div class="flex flex-row items-center">
				<div class="h-8 w-8 flex flex-row items-center justify-center rounded-full">
					<Icon class="mt-2px text-teal-700" name="fa:envelope" size="16" />
				</div>
				<a class="ml-1.7" :href="`mailto:${localData.personalData.mail}`">
					{{ localData.personalData.mail }}
				</a>
			</div>
			<div class="flex flex-row items-center">
				<div class="h-8 w-8 flex flex-row items-center justify-center rounded-full">
					<Icon class="mt-2px text-teal-700" name="fa:phone" size="16" />
				</div>
				<a class="ml-1.7" :href="`tel:${localData.personalData.phone}`">
					{{ localData.personalData.phone }}
				</a>
			</div>
		</div>
		<!--div class="ml-42 mt-8 flex flex-row items-center">
			<div class="h-8 w-8 flex flex-row items-center justify-center rounded-full">
				<Icon class="mt-2px text-teal-700" name="fa6-solid:paperclip" size="16" />
			</div>
			<span class="ml-1.7 underline">
				{{ localData.cover.appendixTitle }}
			</span>
		</div>
		<div class="ml-51.7">{{ localData.cover.appendix.join(", ") }}</div-->
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
