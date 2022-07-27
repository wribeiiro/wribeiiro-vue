export default {
    state: {
        background: "https://www.wribeiiro.com/bg-min.jpg",
        smallText: "Wellisson Ribeiro",
        smallSecondText: "Fullstack Developer"
    },
    getters: {
        getBackground(state) {
            return state.background
        },
        getSmallText(state) {
            return state.smallText
        },
        getSmallSecondText(state) {
            return state.smallSecondText
        },
    },
    mutations: {

    },
    actions: {

    }
}