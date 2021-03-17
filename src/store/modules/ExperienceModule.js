export default {
  state: {
    xp: [
      {
        title: "Software Engineer at SoftExpert",
        description: "Development and maintenance of systems.",
        date: "2021 until now",
        id: 7,
      },
      {
        title: "Full Stack Developer at ADM Informática",
        description:
          "Development and maintenance of desktop systems using technologies	such as Visual Basic 5, C #, Java, VB.net, and Access and MySQL databases. Development and maintenance of web applications and apps, using technologies such as PHP (Code Igniter), JavaScript, Angular (Ionic 3), HTML + CSS and MySQL database.",
        date: "2018-2021",
        id: 6,
      },
      {
        title: "Freelancer Full Stack Developer at Canvas Studio",
        description:
          "Maintenance and development of responsive web systems, using technologies such as PHP, JavaScript, HTML + CSS, MySQL, Angular and	Frameworks such as Code Igniter 3 and Bootstrap 3.",
        date: "2016-2019",
        id: 5,
      },
      {
        title: "Full Stack Developer at Support Informática",
        description:
          "Maintenance and development of websites and systems, using	technologies ​​such as PHP, JavaScript, HTML + CSS and MySQL,	Delphi, Visual Basic 6 e MSAccess.",
        date: "",
        id: 4,
      },
      {
        title: "Analist of Support at Support Informática",
        description: "2014-2016",
        date:
          "Responsible for customer service, via phone and location. System	training. Assembly and maintenance of computers.",
        id: 3,
      },
      {
        title: "Trainee at Social Security",
        description: "2013-2014",
        date:
          "Document management, organization and maintenance of the archive	dead. Digitalization, control, maintenance and distribution of Law Suit.",
        id: 2,
      },
      {
        title: "Trainee at Town Hall Municipal Mafra-SC",
        description: "2012-2013",
        date:
          "Posting and receiving correspondence, responsible for copy services, and general internal services.",
        id: 1,
      },
    ],
  },
  getters: {
		getXp(state) {
			return state.xp
		}
	},
  mutations: {},
  actions: {},
};
