const calculateMyYear = () => {
  return new Date().getFullYear() - 1996;
};

export default {
  state: {
    userRoot: `wribeiiro@wribeiiro:~$ <span class="text-text">sudo --help aboutme<br>`,
    userRootBlink: `wribeiiro@wribeiiro:~$ <span class="blink">_</span>`,
    aboutMe: `Hi Devs 🖖! I'm Wellisson Ribeiro. I'm ${calculateMyYear()} years old, married, and father of two little girls.<br>Graduated in Analysis and Systems Development at UNOPAR.<br>Developer with some years of experience developing applications with different technologies,<br>but with a focus on PHP (Code Igniter v3/v4, Laravel, Lumen and VueJS Frameworks)</.>.<br>I am currently work a software engineer at <a class='text-purple' href='https://www.softexpert.com/'>SoftExpert.</a><br>All packages are up to date.</span><br>`,
    aboutComplete: ``
  },
  getters: {
    getAboutMe(state) {
      return state.aboutMe;
    },
    getUserRoot(state) {
      return state.userRoot;
    },
    getUserRootBlink(state) {
      return state.userRootBlink;
    }
  },
  mutations: {
    setAboutComplete(state, newText) {
      state.aboutComplete = newText;
    }
  },
  actions: {
    updateAboutComplete(context, value) {
      context.commit('setAboutComplete', value);
    }
  },
}
