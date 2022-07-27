export default {
    state: {
        xp: [
            {
                title: "Software Engineer at SoftExpert",
                description: "Development and maintenance of the System in both the backend and the frontend, focusing on solutions for excellence in Management and Business Compliance. Analysis and implementation of new components and functionalities within the system, always aiming at their quality and performance. Main technologies and tools used on a daily basis: PHP, PHPUnit, Doctrine, Rest, Javascript, React, PostgreSQL, Oracle, SQLServer, Docker, Git, Jira, Gitlab and Scrum for project management and planning.",
                date: "2021 until now",
            },
            {
                title: "Full Stack Developer at ADM Informática",
                description: "Development and maintenance of desktop systems using technologies	such as Visual Basic 5, C #, Java, VB.net, and Access and MySQL databases. Development and maintenance of web applications and apps, using technologies such as PHP (Code Igniter), JavaScript, Angular (Ionic 3), HTML + CSS and MySQL database.",
                date: "2018-2021",
            },
            {
                title: "Freelancer Full Stack Developer at Canvas Studio",
                description: "Maintenance and development of responsive web systems, using technologies such as PHP, JavaScript, HTML + CSS, MySQL, Angular and	Frameworks such as Code Igniter 3 and Bootstrap 3.",
                date: "2016-2019",
            },
            {
                title: "Full Stack Developer at Support Informática",
                description: "Maintenance and development of websites and systems, using	technologies ​​such as PHP, JavaScript, HTML + CSS and MySQL,	Delphi, Visual Basic 6 e MSAccess.",
                date: "2016-2018",
            },
            {
                title: "Analist of Support at Support Informática",
                description: "Responsible for customer service, via phone and location. System	training. Assembly and maintenance of computers.",
                date: "2014-2016",
            },
            {
                title: "Intern at Social Security",
                description: "Document management, organization and maintenance of the archive	dead. Digitalization, control, maintenance and distribution of Law Suit.",
                date: "2013-2014",
            },
            {
                title: "Intern at Town Hall Municipal Mafra-SC",
                description: "Posting and receiving correspondence, responsible for copy services, and general internal services.",
                date: "2012-2013",
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
