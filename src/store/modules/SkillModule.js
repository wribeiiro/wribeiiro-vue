export default {
  state: {
    skills: [
      {
        icon: "https://images.vexels.com/media/users/3/166470/isolated/preview/73835fa38fba6d35aff9de603dc5044a---cone-de-linguagem-de-programa----o-php-by-vexels.png",
				title: "PHP",
        id: 1
      },
      {
        icon: "https://cdn.iconscout.com/icon/free/png-512/codeigniter-4-1175201.png",
				title: "Code Igniter",
        id: 2
      },
      {
        icon: "https://www.designbust.com/download/168/png/laravel_icon512.png",
				title: "Laravel",
        id: 3
      },
      {
        icon: "https://pcodinomebzero.neocities.org/Imagens/javascript1.png",
				title: "Javascript",
        id: 4
      },
      {
        icon: "https://labs.mysql.com/common/logos/mysql-logo.svg?v2",
				title: "MySQL",
        id: 5
      },
      {
        icon: "https://cdn.iconscout.com/icon/free/png-512/postgresql-11-1175122.png",
				title: "PostgreSQL",
        id: 6
      },
      {
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
				title: "C#",
        id: 7
      },
      {
        icon: "https://icon-library.com/images/html-icon-png/html-icon-png-4.jpg",
				title: "CSS",
        id: 8
      },
      {
        icon: "https://breitembach.github.io/assets/icons/css.png",
				title: "PHP",
        id: 9
      },
      {
        icon: "https://commons.bmstu.wiki/images/b/b8/Bootstrap.png",
				title: "Bootstrap",
        id: 10
      },
      {
        icon: "https://ionicframework.com/img/meta/logo.png",
				title: "Ionic",
        id: 11
      },
      {
        icon: "https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png",
				title: "React",
        id: 12
      },
      {
        icon: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/367_Vuejs-512.png",
				title: "VueJS",
        id: 13,
      },
      {
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1024px-Git_icon.svg.png",
				title: "Git",
        id: 14,
      },
      {
        icon: "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/electron-icon.png",
				title: "Electron JS",
        id: 15,
      },
      {
        icon: "http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png",
				title: "Angular",
        id: 16,
      },
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
