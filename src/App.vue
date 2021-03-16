<template>
  <div id="app">
    <div class="main">
      <Header />
      <Hero />
      <About />
      <section class="mypage-education" data-section="education">
        <div class="mypage-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3">
              <span class="heading-meta">Education</span>
              <h2 class="mypage-heading">Education</h2>
            </div>
          </div>
          <div class="row">
            <Education 
              :education-data="education"
            >
            </Education>
          </div>
        </div>
      </section>

      <section class="mypage-experience" data-section="experience">
        <div class="mypage-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3">
              <span class="heading-meta">Experience</span>
              <h2 class="mypage-heading">Work Experience</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="timeline-centered">
                <Experience 
                  :xp-data="xp"
                >
                </Experience>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Work />

      <section class="mypage-contact" data-section="contact">
        <div class="mypage-narrow-content">
          <div class="row">
            <div class="col-md-6 col-md-offset-3 col-md-pull-3">
              <span class="heading-meta">Get in Touch</span>
              <h2 class="mypage-heading">Contact</h2>
            </div>
          </div>

          <div class="row text-center">
            <Contact 
              :contact-data="contact"
            >
            </Contact>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import Header       from './components/Header.vue'
import Hero         from './components/Hero.vue'
import About        from './components/About.vue'
import Education    from './components/Education.vue'
import Experience   from './components/Experience.vue'
import Work         from './components/Work.vue'
import Contact      from './components/Contact.vue'

export default {
  name: 'App',
  data() {
    return {
      education: [
        {
          title: "Graduated in Systems Analysis and Development At UNOPAR - University North of Paraná ",
          date: "2015-2018",
          id: 1
        },
        {
          title: "Information systems (Studied for 1 year) At UNC - Contestado University",
          date: "2014",
          id: 2
        },
      ],
      xp: [
        {
          title: "Software Engineer at SoftExpert",
          description: "Development and maintenance of systems.",
          date: "2021 until now",
          id: 7,
        },
        {
          title: "Full Stack Developer at ADM Informática",
          description: "Development and maintenance of desktop systems using technologies	such as Visual Basic 5, C #, Java, VB.net, and Access and MySQL databases. Development and maintenance of web applications and apps, using technologies such as PHP (Code Igniter), JavaScript, Angular (Ionic 3), HTML + CSS and MySQL database.",
          date: "2018-2021",
          id: 6,
        },
        {
          title: "Freelancer Full Stack Developer at Canvas Studio",
          description: "Maintenance and development of responsive web systems, using technologies such as PHP, JavaScript, HTML + CSS, MySQL, Angular and	Frameworks such as Code Igniter 3 and Bootstrap 3.",
          date: "2016-2019",
          id: 5,
        },
        {
          title: "Full Stack Developer at Support Informática",
          description: "Maintenance and development of websites and systems, using	technologies ​​such as PHP, JavaScript, HTML + CSS and MySQL,	Delphi, Visual Basic 6 e MSAccess.",
          date: "",
          id: 4,
        },
        {
          title: "Analist of Support at Support Informática",
          description: "2014-2016",
          date: "Responsible for customer service, via phone and location. System	training. Assembly and maintenance of computers.",
          id: 3,
        },
        {
          title: "Trainee at Social Security",
          description: "2013-2014",
          date: "Document management, organization and maintenance of the archive	dead. Digitalization, control, maintenance and distribution of Law Suit.",
          id: 2,
        },
        {
          title: "Trainee at Town Hall Municipal Mafra-SC",
          description: "2012-2013",
          date: "Posting and receiving correspondence, responsible for copy services, and general internal services.",
          id: 1,
        },
      ],
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
    }
  },
  components: {
    Header,
    Hero,
    About,
    Education,
    Experience,
    Work,
    Contact
  }
}
</script>

<style>
  @import './assets/css/global.css';
</style>
