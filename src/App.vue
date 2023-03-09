<template>
	<div class="absolute nice-background h-48 -z-1 w-full top-0 opacity-80" />
	<div class="flex w-[297mm] gap-8 flex-row py-8 px-12">
		<aside class="w-1/3 flex flex-col gap-6 p-4 h-full bg-gray-200">
			<div class="p-2">
				<img src="./assets/felix-grafschmidt.1024x1024.jpg" alt="Photo" />
			</div>
			<div class="flex flex-col">
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300 uppercase">
					{{ $t("aboutMe") }}
				</span>
				<div v-for="(item, i) in aboutMe" :key="i">
					<span class="font-bold">{{ item.key }}:&nbsp;</span>
					<span>{{ item.value }}</span>
				</div>
			</div>
			<div class="flex flex-col">
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300 uppercase">
					{{ $t("contact") }}
				</span>
				<span class="flex items-center gap-1 h-14">
					<img src="./assets/address.svg" alt="address" class="w-8 h-8" />
					<span class="flex flex-col ml-2">
						<span>{{ contact.address.street }} {{ contact.address.number }},</span>
						<span>{{ contact.address.zip }} {{ contact.address.place }}</span>
						<span>{{ contact.address.country }}</span>
					</span>
				</span>
				<span class="flex items-center gap-1 h-14">
					<img src="./assets/phone.svg" alt="phone" class="w-8 h-8" />
					<span class="flex flex-col ml-2">
						<a :href="'tel:' + contact.phone">{{ contact.phone }}</a>
					</span>
				</span>
				<span class="flex items-center gap-1 h-14">
					<img src="./assets/mail.svg" alt="mail" class="w-8 h-8" />
					<span class="flex flex-col ml-2">
						<a :href="'mailto:' + contact.mail">{{ contact.mail }}</a>
					</span>
				</span>
			</div>
			<div class="flex flex-col">
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300 uppercase"
					>{{ $t("skills") }}
				</span>
				<div>
					<div v-for="(skill, i) in Object.entries(skills)" :key="i" class="relative pt-1">
						<div class="flex mb-2 items-center justify-between">
							<div>
								<span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-800 bg-teal-200">
									{{ skill[0] }}</span
								>
							</div>
						</div>
						<div class="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
							<div
								:style="`width: ${skill[1]}%`"
								class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-600"
							/>
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
				<span class="mb-4 w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300 uppercase">
					{{ $t("hobbies") }}
				</span>
				<div class="max-h-[8rem] flex flex-col flex-wrap">
					<span v-for="(interest, i) in interests" :key="i" class="p-1">{{ interest }}</span>
				</div>
			</div>
		</aside>
		<main class="w-2/3">
			<div class="bg-black p-4 mb-4">
				<div class="bg-black text-white flex flex-col items-center border-white-600 border-2 p-4">
					<span class="text-6xl text-teal-600 mb-2 font-bold uppercase">Felix Grafschmidt</span>
					<span class="text-3xl font-bold hidden print:block uppercase">{{ $t("target") }}</span>
					<span class="text-3xl uppercase" @click="changePosition">{{ targetPosition }}</span>
				</div>
			</div>
			<div class="flex flex-col mb-8 gap-4">
				<span class="w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300 uppercase">
					{{ $t("professionalExperience") }}
				</span>
				<div
					v-for="(experience, i) in professionalExperience"
					:key="i"
					class="flex flex-row"
					:class="{ 'bg-gray-200 py-2': experience.group }"
				>
					<span
						v-if="experience.group"
						class="my-2 font-bold text-lg write-vertical-right rotate-180 transform justify-end flex pb-4 border-l-4 border-gray-300 px-2 mr-4"
						>{{ experience.group }}</span
					>
					<span v-else class="mr-16" />
					<div class="flex flex-col gap-4">
						<div v-for="(position, j) in experience.positions" :key="j" class="flex flex-row">
							<div class="flex flex-col w-1/3 mr-10">
								<span class="text-right font-bold text-lg">{{ position.company }}</span>
								<span class="text-right">{{ position.period }}</span>
							</div>
							<div class="flex flex-col w-full">
								<span class="font-bold text-lg uppercase">{{ position.title }}</span>
								<span>{{ $t("tasks") }}:</span>
								<ul class="ml-8">
									<li v-for="(task, k) in position.tasks" :key="k" class="list-disc">
										{{ task }}
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col mb-8 gap-4">
				<span class="w-full text-2xl pb-1 text-teal-600 font-semibold border-b-4 border-gray-300 uppercase">
					{{ $t("education") }}
				</span>
				<div v-for="(experience, i) in academicExperience" :key="i" class="flex flex-row ml-16">
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
					{{ $t("webOrigin") }}
				</span>
				<i18n-t keypath="webVersion" tag="span">
					<template #link>
						<a class="text-blue-500 underline" :href="`https://cv.felgraf.dev?language=${$i18n.locale}`"
							>{{ $t("here") }} (https://cv.felgraf.dev)</a
						>
					</template>
				</i18n-t>
				<i18n-t keypath="source" tag="span">
					<template #link>
						<a class="text-blue-500 underline" href="https://github.com/FelixGrafschmidt/cv">
							{{ $t("here") }} (https://github.com/FelixGrafschmidt/cv)
						</a>
					</template>
				</i18n-t>
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
				targetPosition: "fullstack software developer",
				aboutMe: [
					{ key: this.$t("born"), value: this.$t("dob") },
					{ key: this.$t("nationality"), value: this.$t("german") },
					{ key: this.$t("maritalStatus"), value: this.$t("married") },
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
					[this.$t("german")]: this.$t("nativeSpeaker"),
					[this.$t("english")]: "C1",
					[this.$t("latin")]: this.$t("latinExperience"),
					[this.$t("french")]: "A2",
				},
				interests: [
					this.$t("logic"),
					this.$t("linguistics"),
					this.$t("philosophy"),
					this.$t("history"),
					this.$t("videogames"),
					this.$t("ttgs"),
					this.$t("programming"),
					this.$t("reading"),
				],
				professionalExperience: [
					{
						group: "Interhome Group",
						positions: [
							{
								company: "HHD AG",
								title: "Web Developer",
								tasks: [this.$t("dev1"), this.$t("dev2")],
								period: "08/2021 - aktuell",
							},
							{
								company: "HHD GmbH",
								title: "Software Developer",
								tasks: [this.$t("dev1"), this.$t("dev2")],
								period: "08/2019 - 07/2021",
							},
							{
								company: "",
								title: this.$t("trainee"),
								tasks: [this.$t("dev1"), this.$t("dev2")],
								period: "08/2017 - 07/2019",
							},
						],
					},
					{
						group: "",
						positions: [
							{
								company: "Albert-Ludwigs-Universität Freiburg",
								title: this.$t("studentAssistant"),
								tasks: [this.$t("tutor")],
								period: "10/2016 - 03/2017 \n 10/2015 - 02/2016",
							},
						],
					},
				],
				academicExperience: [
					{
						institute: "Albert-Ludwigs-Universität Freiburg",
						period: "10/2014 - 09/2017",
						major: this.$t("philStudies"),
						minor: `${this.$t("minor")}: ${this.$t("engStudies")}`,
						result: `${this.$t("degree")}: Bachelor of Arts`,
						mark: `${this.$t("mark")}: 1.9`,
						focus: `${this.$t("focus")}: ${this.$t("logic")}, ${this.$t("philOfLanguage")}`,
					},
					{
						institute: "Albert-Ludwigs-Universität Freiburg",
						period: "10/2013 - 09/2014",
						major: this.$t("csStudies"),
						result: this.$t("noDegree"),
					},
					{
						institute: "Gymnasium Borbeck",
						period: "08/2005 - 07/2013",
						major: this.$t("aLevels"),
						mark: `${this.$t("mark")}: 1.8`,
						focus: `${this.$t("schoolFocus")}: ${this.$t("english")}, ${this.$t("german")}`,
					},
				],
			};
		},
		created() {
			document.title = this.$t("title");
		},
		methods: {
			changePosition(event: MouseEvent) {
				if (event.ctrlKey) {
					this.targetPosition = window.prompt("") || this.targetPosition;
				}
			},
		},
	});
</script>

<style lang="postcss" scoped>
	.nice-background {
		background: linear-gradient(
				135deg,
				#708090 21px,
				#d9ecff 22px,
				#d9ecff 24px,
				transparent 24px,
				transparent 67px,
				#d9ecff 67px,
				#d9ecff 69px,
				transparent 69px
			),
			linear-gradient(
					225deg,
					#708090 21px,
					#d9ecff 22px,
					#d9ecff 24px,
					transparent 24px,
					transparent 67px,
					#d9ecff 67px,
					#d9ecff 69px,
					transparent 69px
				)
				0 32px;
		background-color: #708090;
		background-size: 32px 64px;
	}

	.small-caps {
		font-variant-caps: small-caps;
	}
</style>
