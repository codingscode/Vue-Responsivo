<template>
  <div id="app">
      <NavegacaoResponsiva :nav_Links="navLinks" :caminhoImagem="require('./assets/logo.png')" fundo="black"
           corLink="white" hoverfundo="rgba(144, 238, 144, 0.664)" :inicio="inicio"/> <!-- "#777"    "#ddd"                               #fff      -->
      <router-view/>
  </div>
</template>

<script>
/* eslint-disable */
import NavegacaoResponsiva from './components/NavegacaoResponsiva'

export default {
      components: { NavegacaoResponsiva },
      data: () => ({
              inicio: {path: '/'},
              navLinks: [
                    { texto: 'Contato', path: '/contato', icon: 'ion-ios-megaphone'},
                    { texto: 'Sobre', path: '/sobre', icon: 'ion-ios-business'},
                    { texto: 'Blog',  path: '/blog', icon: 'ion-ios-bonfire'},
                    { texto: 'Portfolio', path: '/portfolio', icon: 'ion-ios-briefcase'}
              ]
      })
}
</script>

<style lang="scss">
        @import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

        figure {
          margin-block-start: 0;
          margin-block-end: 0;
          margin-inline-start: 10px;
          margin-inline-end: 0;
        }

        body {
          margin: 0;
        }

        #app {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
        }

        #nav {
            padding: 30px;
            a {
              font-weight: bold;
              color: #2c3e50;
              &.router-link-exact-active {
                color: #42b983;
              }
            }
        }
</style>
