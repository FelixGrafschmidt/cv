<template>
	<div class="container h-[21cm] w-[29.7cm] p-12">
		<div class="photo w-64 h-64 mb-8">
			<img src="./assets/felix-grafschmidt.1024x1024.jpg" alt="Photo" />
		</div>
		<div class="about flex flex-col mb-8">
			<span class="mb-4">ÜBER MICH</span>
			<div v-for="(item, i) in aboutMe" :key="i">
				<span class="font-bold">{{ item.key }}:&nbsp;</span>
				<span>{{ item.value }}</span>
			</div>
		</div>
		<div class="contact flex flex-col mb-8">
			<span class="mb-4">KONTAKT</span>
			<span class="flex items-center h-14">
				<img src="./assets/address.svg" alt="address" class="w-8 h-8" />
				<span class="flex flex-col ml-2">
					<span>{{ contact.address.street }} {{ contact.address.number }},</span>
					<span>{{ contact.address.zip }} {{ contact.address.place }}</span>
					<span>{{ contact.address.country }}</span>
				</span>
			</span>
			<span class="flex items-center h-14">
				<img src="./assets/phone.svg" alt="phone" class="w-8 h-8" />
				<span class="flex flex-col ml-2">
					<span>{{ contact.phone }}</span>
				</span>
			</span>
			<span class="flex items-center h-14">
				<img src="./assets/mail.svg" alt="mail" class="w-8 h-8" />
				<span class="flex flex-col ml-2">
					<span>{{ contact.mail }}</span>
				</span>
			</span>
		</div>
		<div class="skills mb-8">
			<span class="mb-4">KOMPETENZEN</span>
			<div class="relative pt-1" v-for="(skill, i) in Object.entries(skills)" :key="i">
				<div class="flex mb-2 items-center justify-between">
					<div>
						<span
							class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-teal-800 bg-teal-200"
						>{{ skill[0] }}</span>
					</div>
				</div>
				<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
					<div
						:style="`width: ${skill[1]}%`"
						class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-400"
					></div>
				</div>
			</div>
		</div>
		<div class="languages flex flex-col mb-8">
			<span class="mb-4">KOMPETENZEN</span>
			<span v-for="(language, i) in Object.entries(languages)" :key="i">
				<span class="font-bold">{{ language[0] }}:&nbsp;</span>
				<span>{{ language[1] }}</span>
			</span>
		</div>
		<div class="interests flex flex-col mb-8">
			<span class="mb-4">INTERESSEN & HOBBYS</span>
			<div class="max-h-[8rem] flex flex-col flex-wrap">
				<span class="p-1" v-for="(interest, i) in interests" :key="i">{{ interest }}</span>
			</div>
		</div>
		<div class="header flex flex-col items-center mb-8 pt-10">
			<span class="text-6xl">FELIX GRAFSCHMIDT</span>
			<span class="text-3xl font-bold mt-2">ANGESTREBTE POSITION</span>
			<span class="text-3xl">{{ position }}</span>
		</div>
		<div class="professional flex flex-col mb-8">
			<span class="mb-4">BERUFLICHER WERDEGANG</span>
		</div>
		<div class="education flex flex-col mb-8">Education</div>
		<div class="signature flex flex-col mb-8">Signature</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: 'App',
	components: {},
	data() {
		return {
			position: "FULLSTACK SOFTWARE ENTWICKLER",
			aboutMe: [
				{ key: 'Geboren', value: "01.08.1994 / Essen" },
				{ key: 'Staatsangehörigkeit', value: "Deutsch" },
				{ key: 'Familienstand', value: "Verheiratet" },
			],
			contact: {
				address: { street: "Feldstrasse", number: "13", zip: "5415", place: "Nussbaumen AG", country: "CH" },
				phone: "079 291 72 99",
				mail: "felix.grafschmidt@gmail.com",
			},
			skills: {
				"Nuxt.js": 95,
				"Vue.js": 90,
				"Spring Boot": 70,
				"Java": 50,
				"TypeScript": 80,
				"JavaScript": 80,
				"Python": 40,
				"CSS": 45,
				"Adobe ColdFusion": 90,
			},
			languages: {
				"Englisch": "C1",
				"Latein": "Grosses Latinum",
				"Französisch": "A2",
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
			]
		}
	}
});
</script>

<style>
.container {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(7, 1fr);
	gap: 0px 0px;
	grid-auto-flow: row;
	grid-template-areas:
		"photo photo header header header header"
		"photo photo header header header header"
		"about about professional professional professional professional"
		"contact contact professional professional professional professional"
		"skills skills education education education education"
		"languages languages education education education education"
		"interests interests signature signature signature signature";
}

.photo {
	grid-area: photo;
}

.header {
	grid-area: header;
}

.about {
	grid-area: about;
}

.contact {
	grid-area: contact;
}

.skills {
	grid-area: skills;
}

.languages {
	grid-area: languages;
}

.interests {
	grid-area: interests;
}

.signature {
	grid-area: signature;
}

.professional {
	grid-area: professional;
}

.education {
	grid-area: education;
}
</style>
