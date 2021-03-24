const calculateMyYear = () => {
  return new Date().getFullYear() - 1996;
};

export default {
  state: {
    aboutMe: `wribeiiro@wribeiiro: <span class="text-white">!aboutme<br>> Hi Devs 🖖! I'm Wellisson Ribeiro. I'm ${calculateMyYear()} years old, married, and father of two little girls.<br>><span class="text-red"> Graduated in Analysis and Systems Development at UNOPAR</span>.<br>> Developer with some years of experience developing applications with different technologies,<br>> but with a focus on <span class="text-vue">PHP (Code Igniter v3/v4, Laravel, Lumen Frameworks)</span>.<br>> I am currently work a software engineer at <a class='soft' href='https://www.softexpert.com/'>SoftExpert.</a><br>> OK</span><br>wribeiiro@wribeiiro: <span class="blink">_</span>`,
  },
  getters: {
    getAboutMe(state) {
      return state.aboutMe;
    },
  },
  mutations: {},
  actions: {},
};
