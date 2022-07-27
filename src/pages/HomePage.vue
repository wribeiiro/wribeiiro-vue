<template>
	<div>
		<section class="home">
			<div class="banner">
				<Home :background-data="background" :text-data="text" :second-text-data="secondText" :about-text-data="aboutMe">
				</Home>
			</div>
		</section>
	</div>
</template>

<script>
import Home from "../components/Home";
import { mapGetters, mapActions } from "vuex";

export default {
	name: "HomePage",
	data() {
		return {
			aboutMe: ""
		}
	},
	computed: {
		...mapGetters({
			background: "getBackground",
			text: "getSmallText",
			secondText: "getSmallSecondText",
			aboutText: "getAboutMe",
			userRoot: "getUserRoot",
			userRootBlink: "getUserRootBlink"
		}),
	},
	methods: {
		...mapActions(['updateAboutComplete']),

		setAboutWithRootUser() {
			this.updateAboutComplete(this.userRoot);
			this.aboutMe = this.userRoot;
		},
		setAboutWithAllData() {
			let strings = `${this.userRoot}${this.aboutText}${this.userRootBlink}`
			this.updateAboutComplete(strings);
			this.aboutMe = strings;
		}
	},
	created() {
		this.setAboutWithRootUser();
		setTimeout(this.setAboutWithAllData, 2000);
	},
	components: {
		Home
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
