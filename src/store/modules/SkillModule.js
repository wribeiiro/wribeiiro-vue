export default {
    state: {
        skills: [
            {
                icon: 'fa-brands fa-php',
                title: "PHP",
            },
            {
                icon: 'fa-brands fa-laravel',
                title: "Laravel",
            },
            {
                icon: 'fa-solid fa-fire-flame-curved',
                title: "Code Igniter",
            },
            {
                icon: 'fa-brands fa-js',
                title: "Javascript",
            },
            {
                icon: 'fa-solid fa-database',
                title: "MySQL",
            },
            {
                icon: 'fa-solid fa-database',
                title: "PostgreSQL",
            },
            {
                icon: 'fa-brands fa-html5',
                title: "HTML",
            },
            {
                icon: 'fa-brands fa-css3',
                title: "CSS",
            },
            {
                icon: 'fa-brands fa-bootstrap',
                title: "Bootstrap",
            },
            {
                icon: 'fa-brands fa-react',
                title: "React",
            },
            {
                icon: 'fa-brands fa-vuejs',
                title: "VueJS",
            },
            {
                icon: 'fa-brands fa-git',
                title: "Git",
            },
            {
                icon: 'fa-brands fa-github',
                title: "Github",
            },
            {
                icon: 'fa-brands fa-docker',
                title: "Docker",
            }
        ],
    },
    getters: {
        getSkills(state) {
            return state.skills;
        },
    },
    mutations: {},
    actions: {},
};
