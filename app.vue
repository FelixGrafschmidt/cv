<template>
	<client-only>
		<div class="mb-12 break-inside-auto leading-5 print:mb-0">
			<div class="max-w-210mm w-210mm">
				<Cover :data="data" :language="language" />
			</div>
			<!-- I hate having to use tables to do formatting, but I was unable to find another solution for repeating headers and footers. -->
			<table class="max-w-210mm w-210mm">
				<Header :data="data" :language="language" />
				<div>
					<h1 class="mb-6 ml-20 text-3xl uppercase">{{ data[language].headings.cv }}</h1>
					<Personal :data="data" :language="language" class="mb-6" />
					<Professional :data="data" :language="language" class="mb-6" />
					<Education :data="data" :language="language" class="mb-6" />
					<IT :data="data" :language="language" class="mb-6" />
					<Misc :data="data" :language="language" />
				</div>
			</table>
		</div>
	</client-only>
</template>

<script setup lang="ts">
	import { data } from "~/resources/data";
	import { type Data } from "~/resources/data";

	const language: Ref<keyof Data> = useState("language");

	if (process.server) {
		let l = "de";
		if (useRoute().query.language && ["de", "en"].includes(useRoute().query.language!.toString())) {
			l = useRoute().query.language!.toString();
		} else if (useRequestHeaders()["accept-language"]) {
			let languages = useRequestHeaders()["accept-language"].split(",");
			console.log(languages);

			languages = languages.map((entry) => entry.split(";")[0].split("-")[0]);
			console.log(languages);

			if (languages.findIndex((e) => e === "en") < languages.findIndex((e) => e === "de")) {
				l = "en";
			}
		}
		useState("language").value = l;
	}
</script>

<style>
	@import "@unocss/reset/tailwind.css";

	html {
		scrollbar-gutter: unset;
	}
	@page {
		/* this affects the margin in the printer settings */
		margin: 0 0 2rem 0;
	}
</style>
