<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> <span>|</span>
      <router-link to="/novo-usuario">Novo Usuário</router-link> <span>|</span>
      <router-link to="/login">Login</router-link> <span>|</span>
      <router-link to="/area-restrita">Área Restrita</router-link>
      <button class="btn btn-logout" @click="handleSignOut()" v-if="isLoggedIn"><font-awesome-icon icon="fa-solid fa-power-off" />Sair</button>
    </nav>
    <button @click="activeMenu(visibleMenu)" class="btn responsive-menu"><font-awesome-icon icon="fa-solid fa-bars" /></button>
    <router-view/>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
let auth
export default {
  mounted () {
    auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  },
  data: () => {
    return {
      isLoggedIn: false,
      visibleMenu: false
    }
  },
  methods: {
    handleSignOut () {
      signOut(auth).then(() => {
        this.$router.push('/').catch(() => { })
      })
      this.isLoggedIn = false
      return this.isLoggedIn
    },
    activeMenu (visibleMenu) {
      if (!visibleMenu) {
        document.querySelector('nav').classList = 'active'
        this.visibleMenu = true
      } else {
        document.querySelector('nav').classList = ''
        this.visibleMenu = false
      }
    }
  }
}
</script>
