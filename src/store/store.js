import Vue from 'vue'
import Vuex from 'vuex'

import AboutModule from './modules/AboutModule'
import ContactModule from './modules/ContactModule'
import EducationModule from './modules/EducationModule'
import ExperienceModule from './modules/ExperienceModule'
import HomeModule from './modules/HomeModule'
import WorkModule from './modules/WorkModule'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        AboutModule,
        ContactModule,
        EducationModule,
        ExperienceModule,
        HomeModule,
        WorkModule
    }
})