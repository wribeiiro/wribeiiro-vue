const URL_API =
	"https://gist.githubusercontent.com/wribeiiro/21299d9ac9f66d8758cd494878189ee7/raw/5b1b8bff5712957b2b76e2e4ee8a81363bd2f75b/projects.json";
//const ACCESS_TOKEN = `69864bfe57e7a39e8ab90107a3bd0f75eb82bc009249dbb504f0af6058bd540650d3316476e5597fa4daa282250826c569e8bddd22a20d43ec5b3a605e6bedb8gstI9JsMCW3Yr04o0P2JKJyJKSCCk1RUQBn6Ic7DEuVynLVoaLfXxEkoZe5PCAwC`;

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
				//headers: new Headers({ Authorization: `Basic ${ACCESS_TOKEN}` }),
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
