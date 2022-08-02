<template>
	<div>
		<section class="home">
			<div class="banner">
				<Home
                    :background-data="background"
                    :text-data="text"
                    :second-text-data="secondText"
                    :about-text-data="aboutMe"
                    :terminal-title="terminalTitle"
                >
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
            strTypeWriter: "",
			aboutMe: "",
            i: 0,
            terminalTitle: "root@wribeiiro: ~"
		}
	},
	computed: {
		...mapGetters({
			background: "getBackground",
			text: "getSmallText",
			secondText: "getSmallSecondText",
			aboutText: "getAboutMe",
            userRoot: "getUserRoot",
			userRootBlink: "getUserRootBlink",
            getAboutCommand: "getAboutCommand"
		}),
	},
	methods: {
		...mapActions([
            'updateAboutComplete',
        ]),
        typeWriter() {
            let aboutCommand = this.getAboutCommand;
            this.strTypeWriter = this.aboutMe;

            if (this.i < aboutCommand.length) {
                this.updateAboutComplete(this.strTypeWriter);
                this.strTypeWriter += `<span class="text-text">${aboutCommand.charAt(this.i)}</span>`;
                this.i++;
                setTimeout(this.typeWriter, 120);
            }

            this.aboutMe = this.strTypeWriter;

            if (this.i === aboutCommand.length) {
                setTimeout(() => {
                    this.aboutMe = this.aboutText + this.userRootBlink;
                }, 1000);
            }
        }
	},
	created() {
        this.aboutMe = this.userRoot;
		this.typeWriter();
	},
	components: {
		Home
	}
};
</script>
