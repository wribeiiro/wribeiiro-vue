export default {
    state: {
        contact:
            [
                {
                    href: "mailto:welleh10@gmail.com",
                    icon: "fa fa-envelope"
                },
                {
                    href: "https://www.linkedin.com/in/wellisson-ribeiro-655a0b179/",
                    icon: "fab fa-linkedin"
                },
                {
                    href: "https://github.com/wribeiiro",
                    icon: "fab fa-github"
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