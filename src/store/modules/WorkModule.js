export default {
    state: {
        works: [
            {
                client: "React Weather",
                description: "",
                link: "https://react-weather-alpha.vercel.app/",
                image: "https://raw.githubusercontent.com/wribeiiro/react-weather/master/weather.jpg",
                class: "Website",
                tags: "React;Javascript;HTML;CSS;API",
            },
            {
                client: "Amazon Prime Video Clone",
                description: "",
                link: "https://amazon-prime-video-clone.vercel.app/",
                image: "https://raw.githubusercontent.com/wribeiiro/amazon-prime-video-clone/master/home.jpg",
                class: "Website",
                tags: "React;Javascript;HTML;CSS;API",
            },
            {
                client: "Clone Whatsapp Chat",
                description: "",
                link: "https://wribeiiro.com/clone-whatsapp/",
                image: "https://raw.githubusercontent.com/wribeiiro/clone-whatsapp/master/login.jpg",
                class: "System",
                tags: "PHP;Javascript;Jquery;HTML;CSS;BOOTSTRAP",
            },
            {
                client: "Danfe Generator",
                description: "",
                link: "https://wribeiiro.com/danfe-generator/",
                image: "https://raw.githubusercontent.com/wribeiiro/danfe-generator/master/screen.png",
                class: "System",
                tags: "PHP;PHP-NFE;API",
            },
            {
                client: "React Spotify Player",
                description: "",
                link: "https://react-spotify-rho.vercel.app/",
                image: "https://raw.githubusercontent.com/wribeiiro/react-spotify/master/player.jpg",
                class: "Website",
                tags: "React;Javascript;HTML;CSS;API",
            },
            {
                client: "React Evil",
                description: "",
                link: "https://react-evil.vercel.app/",
                image: "https://raw.githubusercontent.com/wribeiiro/react-evil/master/home.jpg",
                class: "Website",
                tags: "React;Javascript;HTML;CSS;API",
            },
        ]
    },
    getters: {
        getWorks(state) {
            return state.works
        }
    },
    mutations: {
        
    },
    actions: {
        
    }
}