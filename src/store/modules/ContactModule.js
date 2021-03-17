export default {
    state: {
        contact: [
            {
              href: "mailto:welleh10@gmail.com",
              icon: "fa fa-envelope",
              id: 3
            },
            {
              href: "https://www.linkedin.com/in/wellisson-ribeiro-655a0b179/",
              icon: "fab fa-linkedin",
              id: 2
            },
            {
              href: "https://github.com/wribeiiro",
              icon: "fab fa-github",
              id: 1
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