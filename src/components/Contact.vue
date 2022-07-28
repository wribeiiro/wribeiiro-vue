<template>
	<div class="contact-container">
		<div class="contact-item" v-for="contact in contactData" :key="contact.id">
			<div class="contact-content">
				<a :href="[contact.href]" target="_blank" title="">
					<i :class="[contact.icon]"></i>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Contact",
	props: {
		contactData: {
			type: Array,
			required: true,
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact-container {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: start;
	align-items: center;
	align-content: center;
	column-gap: 1rem;
}

.contact-item {
	background: var(--dark-gray);
	padding: 45px;
	border-radius: 5px;
	position: relative;
	text-align: center;
}

.contact-content {
	text-align: center;
	font-size: 50px;
}

.contact-content i {
	transition: 0.5s;
	color: var(--purple);
}

.contact-content i:hover {
	color: var(--vue);
}

.contact-content:hover {
	color: var(--vue);
	cursor: pointer;
}
</style>
