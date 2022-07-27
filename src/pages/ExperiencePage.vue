<template>
	<div>
		<section class="experience">
			<div class="info">
				<div class="title">
					<h2>Skills</h2>
				</div>

				<Skill :skills-data="skills"> </Skill>

				<div class="title">
					<h2>Experience</h2>
				</div>

				<Experience :xp-data="xp"> </Experience>

			</div>
		</section>
	</div>
</template>

<script>
import Experience from "../components/Experience";
import Skill from "../components/Skill";

import { mapGetters } from "vuex";

export default {
	name: "ExperiencePage",
	data() {
		return {};
	},
	computed: {
		...mapGetters({
			xp: "getXp",
			skills: "getSkills"
		}),
	},
	components: {
		Experience,
		Skill
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
