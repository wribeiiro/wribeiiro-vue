const URL_API = "https://www.wribeiiro.com/lumen-api/api/v1/work";
const ACCESS_TOKEN = `69864bfe57e7a39e8ab90107a3bd0f75eb82bc009249dbb504f0af6058bd540650d3316476e5597fa4daa282250826c569e8bddd22a20d43ec5b3a605e6bedb8gstI9JsMCW3Yr04o0P2JKJyJKSCCk1RUQBn6Ic7DEuVynLVoaLfXxEkoZe5PCAwC`;

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
        headers: new Headers({ Authorization: `Basic ${ACCESS_TOKEN}` }),
      })
			.then((response) => response.json())
			.then((data) => {
				context.commit("setWorks", data.data)
			})
			.catch(error => {
				console.log(error)
			})
    },
  },
};
