export default {
    state: {
        contact:
            [
                {
                    href: "mailto:welleh10@gmail.com",
                    icon: "fa fa-envelope",
                    title: "E-mail"
                },
                {
                    href: "https://www.linkedin.com/in/wellisson-ribeiro-655a0b179/",
                    icon: "fab fa-linkedin",
                    title: "Linkedin"
                },
                {
                    href: "https://github.com/wribeiiro",
                    icon: "fab fa-github",
                    title: "Github"
                },
                {
                    href: "https://stackoverflow.com/users/7039025/wribeiro",
                    icon: "fab fa-stack-overflow",
                    title: "Stackoverflow"
                }
            ]
    },
    getters: {
        getContact(state) {
            return state.contact
        }
    },
    mutations: {

    },
    actions: {

    }
}