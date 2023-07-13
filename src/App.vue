<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/novo-usuario">Novo Usuário</router-link> |
      <router-link to="/login">Login</router-link>
      <button @click="handleSignOut()" v-if="isLoggedIn">Sair</button>
    </nav>
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
      isLoggedIn: false
    }
  },
  methods: {
    handleSignOut () {
      signOut(auth).then(() => {
        this.$router.push('/').catch(() => { })
      })
      this.isLoggedIn = false
      return this.isLoggedIn
    }
  }
}
</script>
