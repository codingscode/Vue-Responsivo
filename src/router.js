import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio.vue'
import Portfolio from './views/Portfolio.vue'
import Contato from './views/Contato.vue'


Vue.use(Router)

export default new Router({
        /* eslint-disable */
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [
            { path: '/', name: 'inicio', component: Inicio },
            { path: '/portfolio', name: 'portfolio', component: Portfolio },
            { path: '/sobre', name: 'sobre', component: () => { return import ('./views/Sobre.vue') }
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                         },
            { path: '/contato', name: 'contato', component: Contato
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                         },
            { path: '/blog', name: 'blog',  component: () => { return import ('./views/Blog.vue') }
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                         }
        ]
})