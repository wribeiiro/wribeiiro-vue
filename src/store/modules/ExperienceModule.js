export default {
    state: {
        xp: [
            {
                title: "Software Engineer at SoftExpert",
                description: `Development and maintenance of the System in both the backend and the frontend, focusing on solutions for excellence in Management and Business Compliance. Analysis and implementation of new components and functionalities within the system, always aiming at their quality and performance. Main technologies and tools used on a daily basis: PHP, PHPUnit, Doctrine, Rest, Javascript, React, PostgreSQL, Oracle, SQLServer, Docker, Git, Jira, Gitlab and Scrum for project management and planning.`,
                date: "2021 until now",
            },
            {
                title: "Full Stack Developer at ADM Informática",
                description: `Development and maintenance of applications, websites and web and desktop systems.
                Company that offers systems for NF-e, NFC-e, CT-e, MDF-e, PAF-Ecf, among others upon request.
                Integration with own and third-party API's.
                Main technologies used:
                PHP, Visual Basic 5, C#, Java, HTML and CSS, JavaScript, Access, MySQL;
                Frameworks: Code Igniter v3/v4, Laravel and Lumen, Bootstrap, Ionic 3;`,
                date: "2018-2021",
            },
            {
                title: "Freelancer Full Stack Developer at Canvas Studio",
                description: `Maintenance and development of responsive websites and web systems, having as main technologies used, PHP - Code Igniter 3, JavaScript, HTML, CSS - Bootstrap and MySQL database.`,
                date: "2016-2019",
            },
            {
                title: "Full Stack Developer at Support Informática",
                description: `Development and maintenance of websites and web and desktop systems, using desktop technologies such as Visual Basic 6, Delphi, MySQL database and MsAccess. And web technologies like PHP, HTML, CSS and JavaScript (Jquery).`,
                date: "2016-2018",
            },
            {
                title: "Analist of Support at Support Informática",
                description: `Responsible for customer service via phone and in person.
                Customer technical support on developed systems.
                Assembly and maintenance of computers.
                Configuration and maintenance of WTS servers.`,
                date: "2014-2016",
            },
            {
                title: "Intern at INSS",
                description: `Responsible for managing documents, organizing and maintaining the archive. Digitization, control, maintenance and distribution of processes.`,
                date: "2013-2014",
            },
            {
                title: "Intern at Prefeitura Municipal Mafra-SC",
                description: `Responsible for posting and receiving correspondence, copying services and general internal services.`,
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
