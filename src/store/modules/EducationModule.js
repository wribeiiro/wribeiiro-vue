export default {
  state: {
    education: [
      {
        title:
          "Graduated in Systems Analysis and Development At UNOPAR <br> - University North of Paraná ",
        date: "2015-2018",
        id: 1,
      },
      {
        title:
          "Information systems (Studied for 1 year) At UNC <br> - Contestado University",
        date: "2014",
        id: 2,
      },
    ],
  },
  getters: {
    getEducation(state) {
      return state.education;
    },
  },
  mutations: {},
  actions: {},
};
