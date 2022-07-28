const calculateMyYear = () => {
    return new Date().getFullYear() - 1996;
};

export default {
    state: {
        aboutCommand: `sudo --help aboutme`,
        userRoot: `root@wribeiiro:~$ `,
        userRootBlink: `root@wribeiiro:/usr/aboutme/$ <span class="blink">_</span>`,
        aboutMe: `root@wribeiiro:~$ <span class="text-text">sudo --help aboutme<br>Brazilian 🇧🇷 ${calculateMyYear()}y, christian ✝️, married 👰, and father of two kids 👶👶. <br>Gratuated in Analysis and Systems Development 🎓 and now, i am an english student 🇺🇸. <br>I've being working as Developer since 2016 with different technologies, but currently <br>my main stack is Back-end with PHP 🐘, Laravel and MySQL. Currently i work as a Software Engineer 👨‍💻 at <a class='text-purple' href='https://www.softexpert.com/'>SoftExpert.</a><br>All packages are up to date</span><br>`,
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
        },
        getAboutCommand(state) {
            return state.aboutCommand;
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
