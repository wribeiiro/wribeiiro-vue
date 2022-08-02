const calculateMyYear = () => {
    return new Date().getFullYear() - 1996;
};

export default {
    state: {
        pages: {
            header: {
                home: {
                    english: 'Início',
                    portuguese: 'Home'
                },
                education: {
                    english: 'Education',
                    portuguese: 'Formação'
                },
                skills_experience: {
                    english: 'Skills & Experience',
                    portuguese: 'Habilidades e Experiência'
                },
                works_projects: {
                    english: 'Skills & Projects',
                    portuguese: 'Trabalhos e Projetos'
                },
                contact: {
                    english: 'Contact',
                    portuguese: 'Contato'
                }
            },
            home: {
                terminal: {
                    terminalTitle: {
                        english: 'root@wribeiiro: ~',
                        portuguese: 'root@wribeiiro: ~'
                    },
                    aboutCommand: {
                        english: `sudo --help aboutme`,
                        portuguese: `sudo --help aboutme`,
                    },
                    userRoot: {
                        english: `root@wribeiiro:~$ `,
                        portuguese: `root@wribeiiro:~$ `
                    },
                    userRootBlink: {
                        english: `root@wribeiiro:/usr/aboutme/$ <span class="blink">_</span>`,
                        portuguese: `root@wribeiiro:/usr/aboutme/$ <span class="blink">_</span>`,
                    },
                    aboutMe: {
                        english: `root@wribeiiro:~$ <span class="text-text">sudo --help aboutme<br>Brazilian 🇧🇷 ${calculateMyYear()}y, christian ✝️, married 👰, and father of two kids 👶👶. <br>Gratuated in Analysis and Systems Development 🎓 and now, i am an english student 🇺🇸. <br>I've being working as Developer since 2016 with different technologies, but currently <br>my main stack is Back-end with PHP 🐘, Laravel and MySQL. Currently i work as a Software Engineer 👨‍💻 at <a class='text-purple' href='https://www.softexpert.com/'>SoftExpert.</a><br>All packages are up to date</span><br>`,
                        portuguese: `root@wribeiiro:~$ <span class="text-text">sudo --help aboutme<br>Brazilian 🇧🇷 ${calculateMyYear()}y, cristão ✝️, casado 👰, e pai de duas crianças 👶👶. <br>Graduado em Análise e Desenvolvimento de Sistemas 🎓 e agora sou um estudando de Inglês 🇺🇸. <br>Tenho trabalhado como Desenvolvedor desde 2016 com diferentes tecnologias, mas no momento <br> minha principal stack é Back-end com PHP 🐘, Laravel e MySQL. Atualmente eu trabalho como Engenheiro de Software 👨‍💻 na <a class='text-purple' href='https://www.softexpert.com/'>SoftExpert.</a><br>Todos os pacotes estão atualizados.</span><br>`
                    },
                }
            }
        }

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
}
