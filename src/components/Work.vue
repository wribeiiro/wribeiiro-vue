<template>
	<div class="work-item">
		<a :href="workData.link" target="_blank">
			<div v-if="workData.image">
				<img :src="workData.image" :alt="workData.name">
			</div>
			<div class="work-info">
				<h3 class="info-title text-left">{{ workData.name }}</h3>
				<p class="info-subtitle text-left">{{ workData.description }}</p>
				<p class="tags text-left">{{ workData.tags }}</p>
				<div class="work-footer">
					<p><i class="fab fa-github"></i>&nbsp; Github</p>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: 'Work',
	props: {
		workData: Object
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.work-item {
	background: var(--dark-gray);
	position: relative;
	border-radius: 5px;
	width: 250px;
	height: 250px;
	flex-grow: 1;
}

.work-info {
	position: absolute;
	left: 0;
	top: 35%;
	width: 100%;
	color: var(--text);
	padding: 0px 15px 0 15px;
	word-wrap: break-word;
}

.work-info h3 {
	margin-bottom: 10px;
	text-shadow: 2px 2px 0 var(--black);
}

.work-info p {
	margin-bottom: 10px;
	text-shadow: 2px 2px 0 var(--black);
}

.work-footer p i {
	font-size: 1.2rem;
}

img {
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	box-sizing: border-box;
	pointer-events: none;
	border-radius: 4px;
	background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
	opacity: 0.3;
}
</style>
