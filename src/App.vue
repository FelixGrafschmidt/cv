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
			<div class="flex flex-col">
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300">
					<span class="underline underline-offset-5 underline-6">HA</span>UPTKOMPETENZEN
				</span>
				<div>
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
					<span class="text-6xl text-teal-600 mb-2 font-bold">FELIX GRAFSCHMIDT</span>
					<span class="text-3xl font-bold hidden print:block">ANGESTREBTE POSITION</span>
					<span class="text-3xl uppercase" @click="changePosition">{{ targetPosition }}</span>
				</div>
			</div>
			<div class="flex flex-col mb-8 gap-4">
				<span class="w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300">
					<span class="underline underline-offset-5 underline-6">BE</span>RUFLICHER WERDEGANG
				</span>
				<div v-for="experience, i in professionalExperience" :key="i" class="flex flex-row"
					:class="{ 'bg-gray-200 py-2': experience.group }">
					<span v-if="experience.group"
						class="my-2 font-bold text-lg write-vertical-right rotate-180 transform justify-end flex pb-4 border-l-4 border-gray-300 px-2 mr-4">{{ experience.group }}</span>
					<span v-else class="mr-16">
					</span>
					<div class="flex flex-col gap-4">
						<div v-for="position, j in experience.positions" :key="j" class="flex flex-row">
							<div class="flex flex-col w-1/3 mr-10">
								<span class="text-right font-bold text-lg">{{ position.company }}</span>
								<span class="text-right">{{ position.period }}</span>
							</div>
							<div class="flex flex-col w-full">
								<span class="font-bold text-lg uppercase">{{ position.title }}</span>
								<span>Tätigkeiten:</span>
								<ul class="ml-8">
									<li v-for="task, k in position.tasks" :key="k" class="list-disc">
										{{ task }}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col mb-8 gap-4">
				<span class="w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300">
					<span class="underline underline-offset-5 underline-6">SC</span>HULISCHER WERDEGANG
				</span>
				<div v-for="experience, i in academicExperience" :key="i" class="flex flex-row ml-16">
					<div class="flex flex-col w-1/3 mr-10">
						<span class="text-right font-bold text-lg">{{ experience.institute }}</span>
						<span class="text-right">{{ experience.period }}</span>
					</div>
					<div class="flex flex-col w-full">
						<span class="font-bold text-lg uppercase">{{ experience.major }}</span>
						<span class="font-bold uppercase">{{ experience.minor }}</span>
						<span>{{ experience.result }}</span>
						<span>{{ experience.mark }}</span>
						<span>{{ experience.focus }}</span>
					</div>
				</div>
			</div>
			<div class="hidden print:flex flex-col gap-2">
				<span>
					Dieser Lebenslauf wurde ursprünglich von mir als Website entwickelt. Sie
					betrachten im Moment ein aus dieser Website erstelltes PDF.
				</span>
				<span>
					Die Webversion finden Sie <a class="text-blue-500 underline" href="https://cv.ithambar.moe">hier
						(https://cv.ithambar.moe)</a>.
				</span>
				<span>
					Ich werde die Webversion laufend updaten, sowohl inhaltlich als auch technisch. Den Quellcode
					finden
					Sie <a class="text-blue-500 underline" href="https://github.com/FelixGrafschmidt/cv">hier
						(https://github.com/FelixGrafschmidt/cv)</a>.
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
			targetPosition: "FULLSTACK SOFTWARE ENTWICKLER",
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
				"Linguistik",
				"Philosophie",
				"Geschichte",
				"Videospiele",
				"Gesellschaftsspiele",
				"Programmieren",
				"Lesen",
			],
			professionalExperience: [
				{
					group: "Interhome Group", positions: [
						{ company: "HHD AG", title: "Web Developer", tasks: ["Entwicklung und Betreuung der Firmenwebsite", "Entwicklung und Betreuung von internen Webapplikationen"], period: "08/2021 - aktuell" },
						{ company: "HHD GmbH", title: "Software Developer", tasks: ["Entwicklung und Betreuung der Firmenwebsite", "Entwicklung und Betreuung von internen Webapplikationen"], period: "08/2019 - 07/2021" },
						{ company: "", title: "Trainee in der Softwareentwicklung", tasks: ["Entwicklung und Betreuung der Firmenwebsite", "Entwicklung und Betreuung von internen Webapplikationen"], period: "08/2017 - 07/2019" }
					]
				},
				{
					group: "", positions: [
						{ company: "Albert-Ludwigs-Universität Freiburg", title: "Studentische Hilfskraft", tasks: ["Tutor beim Philosophischen Seminar für die Vorlesung 'Einführung in die Formale Logik'"], period: "10/2016 - 03/2017 \n 10/2015 - 02/2016" }
					]
				},
			],
			academicExperience: [
				{ institute: "Albert-Ludwigs-Universität Freiburg", period: "10/2014 - 09/2017", major: "Studium der Philosophie", minor: "Nebenfach: Anglistik", result: "Abschluss: Bachelor of Arts", mark: "Note: 1,9", focus: "Schwerpunkt: Formale Logik, Sprachphilosophie" },
				{ institute: "Albert-Ludwigs-Universität Freiburg", period: "10/2013 - 09/2014", major: "Studium der Informatik", result: "Ohne Abschluss" },
				{ institute: "Gymnasium Borbeck", period: "08/2005 - 07/2013", major: "Allgemeine Hochschulreife", mark: "Note: 1,8", focus: "Leistungskurse: Englisch, Deutsch" },
			]
		};
	},
	methods: {
		changePosition() {
			this.targetPosition = window.prompt("Angestrebte Position") || this.targetPosition
		}
	}
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
