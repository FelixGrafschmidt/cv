<template>
	<div class="absolute nice-background h-48 -z-1 w-full top-0 opacity-80"></div>
	<div class="flex w-[297mm] gap-8 flex-row p-12 ">
		<aside class="w-1/3 flex flex-col gap-6 p-4 h-full bg-gray-200">
			<div class="p-2">
				<img src="./assets/felix-grafschmidt.1024x1024.jpg" alt="Photo">
			</div>
			<div class="flex flex-col">
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300">
					<span class="underline underline-offset-5 underline-6">ÜB</span>ER MICH
				</span>
				<div v-for="(item, i) in aboutMe" :key="i">
					<span class="font-bold">{{ item.key }}:&nbsp;</span>
					<span>{{ item.value }}</span>
				</div>
			</div>
			<div class="flex flex-col">
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300">
					<span class="underline underline-offset-5 underline-6">KO</span>NTAKT
				</span>
				<span class="flex items-center gap-1 h-14">
					<img src="./assets/address.svg" alt="address" class="w-8 h-8">
					<span class="flex flex-col ml-2">
						<span>{{ contact.address.street }} {{ contact.address.number }},</span>
						<span>{{ contact.address.zip }} {{ contact.address.place }}</span>
						<span>{{ contact.address.country }}</span>
					</span>
				</span>
				<span class="flex items-center gap-1 h-14">
					<img src="./assets/phone.svg" alt="phone" class="w-8 h-8">
					<span class="flex flex-col ml-2">
						<a :href="'tel:' + contact.phone">{{ contact.phone }}</a>
					</span>
				</span>
				<span class="flex items-center gap-1 h-14">
					<img src="./assets/mail.svg" alt="mail" class="w-8 h-8">
					<span class="flex flex-col ml-2">
						<a :href="'mailto:' + contact.mail">{{ contact.mail }}</a>
					</span>
				</span>
			</div>
			<div>
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300">
					<span class="underline underline-offset-5 underline-6">KO</span>MPETENZEN
				</span>
				<div class="mt-4">
					<div v-for="(skill, i) in Object.entries(skills)" :key="i" class="relative pt-1">
						<div class="flex mb-2 items-center justify-between">
							<div>
								<span
									class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-800 bg-teal-200">
									{{ skill[0] }}</span>
							</div>
						</div>
						<div class="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
							<div :style="`width: ${skill[1]}%`"
								class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-600">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col">
				<span v-for="(language, i) in Object.entries(languages)" :key="i">
					<span class="font-bold">{{ language[0] }}:&nbsp;</span>
					<span>{{ language[1] }}</span>
				</span>
			</div>
			<div class="flex flex-col">
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300">
					<span class="underline underline-offset-5 underline-6">IN</span>TERESSEN & HOBBYS
				</span>
				<div class="max-h-[8rem] flex flex-col flex-wrap">
					<span v-for="(interest, i) in interests" :key="i" class="p-1">{{ interest }}</span>
				</div>
			</div>
		</aside>
		<main class="w-2/3">
			<div class="bg-black p-4 mb-4">
				<div class="bg-black text-white flex flex-col items-center border-white-600 border-2 p-4">
					<span class="text-6xl text-teal-600 font-bold">FELIX GRAFSCHMIDT</span>
					<span class="text-3xl font-bold mt-2">ANGESTREBTE POSITION</span>
					<span class="text-3xl">{{ position }}</span>
				</div>
			</div>
			<div class="flex flex-col mb-8">
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300">
					<span class="underline underline-offset-5 underline-6">BE</span>RUFLICHER WERDEGANG
				</span>
			</div>
			<div class="flex flex-col mb-8">
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300">
					<span class="underline underline-offset-5 underline-6">SC</span>HULISCHER WERDEGANG
				</span>
			</div>
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "CV",
	components: {},
	data() {
		return {
			position: "FULLSTACK SOFTWARE ENTWICKLER",
			aboutMe: [
				{ key: "Geboren", value: "01.08.1994 / Essen" },
				{ key: "Staatsangehörigkeit", value: "Deutsch" },
				{ key: "Familienstand", value: "Verheiratet" },
			],
			contact: {
				address: {
					street: "Feldstrasse",
					number: "13",
					zip: "5415",
					place: "Nussbaumen AG",
					country: "CH",
				},
				phone: "+41 79 291 72 99",
				mail: "felix.grafschmidt@gmail.com",
			},
			skills: {
				"Nuxt.js": 95,
				"Vue.js": 90,
				"Spring Boot": 70,
				Java: 50,
				TypeScript: 80,
				JavaScript: 80,
				Python: 40,
				CSS: 45,
				"Adobe ColdFusion": 90,
			},
			languages: {
				Englisch: "C1",
				Latein: "Grosses Latinum",
				Französisch: "A2",
			},
			interests: [
				"Formale Logik",
				"Lingustik",
				"Philosophie",
				"Geschichte",
				"Videospiele",
				"Gesellschaftsspiele",
				"Programmieren",
				"Lesen",
			],
		};
	},
});
</script>

<style lang="postcss" scoped>
.nice-background {
	background:
		linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
		linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 32px;
	background-color: #708090;
	background-size: 32px 64px;
}

.small-caps {
	font-variant-caps: small-caps;
}
</style>
