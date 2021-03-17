const calculateMyYear = () => {
  return new Date().getFullYear() - 1996;
};

export default {
  state: {
    aboutMe: `Hi Devs 🖖! I'm Wellisson Ribeiro. I'm ${calculateMyYear()} years old, married, and father of two little girls. <br> 
              Graduated in Analysis and Systems 	Development at UNOPAR. Developer with some years of experience developing applications with different technologies, 
              but with a focus on PHP (Code Igniter v3/v4, Laravel, Lumen Frameworks). <br> 
              I am currently work a software engineer at <a href='https://www.softexpert.com/'> SoftExpert </a>`,
  },
  getters: {
    getAboutMe(state) {
      return state.aboutMe;
    },
  },
  mutations: {},
  actions: {},
};
