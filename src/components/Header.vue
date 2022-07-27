<template>
	<div>
		<!--
		<div class="btn-burger" @click="toggleMenu" :class="{ click: isShowing }">
			<span class="fas fa-bars"></span>
		</div>
		-->
		<div class="sidebar" :class="{ show: isShowing }">
			<div class="sidebar__avatar">
				<div class="text-center me">
					<img :src="[imgProfile]" alt="Me" title="Me" />
					<h1 class="name text-center">Wellisson Ribeiro</h1>
					<span class="description"> PHP Software Engineer ~ English Student 🇧🇷 🇺🇸  </span>
				</div>
			</div>
			<ul>
				<router-link to="/" class="btn mr-5"> > Home </router-link>
				<router-link to="/education" class="btn mr-5"> > Education </router-link>
				<router-link to="/experience" class="btn mr-5"> > Skills &amp; Experience </router-link>
				<router-link to="/work" class="btn mr-5"> > Works and Projects </router-link>
				<router-link to="/contact" class="btn mr-5"> > Contact </router-link>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			isShowing: true,
			imgProfile: "https://avatars.githubusercontent.com/u/20648572?s=460&u=47a55caca6dbc315d1932aaf77eefa20b2002baf&v=4",
		};
	},
	methods: {
		toggleMenu: function() {
			this.isShowing = !this.isShowing;
		},
		closeMenu: function() {
			this.isShowing = false
		}
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-burger {
	position: absolute;
	top: 15px;
	left: 270px;
	height: 45px;
	width: 45px;
	text-align: center;
	background: var(--dark-gray);
	border-radius: 3px;
	cursor: pointer;
	transition: left 0.4s ease;
	z-index: 99999;
}

.btn-burger.click {
	left: 270px;
}

.btn-burger span {
	color: white;
	font-size: 28px;
	line-height: 45px;
}

.btn-burger.click span:before {
	content: "\f00d";
}

.sidebar {
	width: 260px;
	height: 100%;
	background-color: var(--dark-gray);
	padding: 30px 0px;
	position: fixed;
	transition: left 0.4s ease;
	left: -260px;
    top: 0;
}

.sidebar.show {
	left: 0px;
}

.sidebar ul a {
	padding: 15px;
	font-size: 16px;
	color: var(--text);
	border-bottom: 1px solid var(--text);
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	border-top: 1px solid rgba(255, 255, 255, 0.05);
	border-left: solid 5px transparent;
	width: 100%;
	text-align: left;
	text-decoration: none;
	display: block;
	transition: 0.5s;
}

.sidebar ul i {
	padding-right: 8px;
}

.sidebar ul a:hover,
ul a:active,
ul a:focus {
	border-left: solid 5px var(--purple);
	color: var(--text);
	text-decoration: none;
	outline: 0;
	box-shadow: none;
}

.sidebar ul .link-active {
	border-left: solid 5px var(--purple);
	color: var(--text);
}

.sidebar__avatar .me {
	margin-bottom: 30px;
}

.sidebar__avatar h1 {
	color: var(--text);
	font-size: 26px;
	font-weight: 500;
	display: block;
}

.sidebar__avatar span {
	color: var(--text);
	text-align: center;
	font-weight: 600;
	font-size: 19px;
}

.sidebar__avatar img {
	width: 140px;
	height: 140px;
	text-align: center;
	border-radius: 50%;
	margin-bottom: 30px;
}

.sidebar__avatar span {
	color: var(--purple);
	transition: 0.5s;
	text-align: center;
}

@media (max-width: 360px) {}
</style>
