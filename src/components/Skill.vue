<template>
	<div class="skill-container">
		<div class="skill-item" v-for="skill in skillsData" :key="skill.id">
			<div class="skill-content">
				<i
					:class="skill.icon"
					:alt="skill.title"
					:title="skill.title"
				>
				</i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Skill",
	props: {
		skillsData: {
			type: Array,
			required: true,
		},
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.skill-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	column-gap: 1rem;
    row-gap: 1rem;
    flex-flow: row wrap;
    overflow: auto;
}

.skill-item {
	background: var(--dark-gray);
	padding: 50px;
	border-radius: 5px;
	position: relative;
	text-align: center;
    flex: 1 1;
}

.skill-item:hover {
	cursor: pointer;
}

.skill-item i:hover {
	color: var(--vue);
}

.skill-content {
	text-align: center;
	font-size: 50px;
}
</style>
