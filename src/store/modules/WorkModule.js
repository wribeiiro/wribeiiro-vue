const URL_API = "https://gist.githubusercontent.com/wribeiiro/21299d9ac9f66d8758cd494878189ee7/raw/projects.json";

export default {
	state: {
		works: [],
	},
	getters: {
		getWorks(state) {
			return state.works;
		},
	},
	mutations: {
		setWorks(state, values) {
			state.works = values;
		},
	},
	actions: {
		setWorks(context) {
			fetch(URL_API, {
				method: "GET",
			})
				.then((response) => response.json())
				.then((data) => {
					context.commit("setWorks", data.data);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
