<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/novo-usuario">Novo Usuário</router-link> |
      <router-link to="/login">Login</router-link>
      <button @click="handleSignOut" v-if="isLoggedIn">Sair</button>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
let auth
export default {
  name: 'App',
  mounted () {
    auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      // if (user) {
      //   isLoggedIn = true
      // } else {
      //   isLoggedIn = false
      // }
    })
  },
  methods: {
    handleSignOut () {
      signOut(auth).then(() => {
        this.$router.push('/')
      })
    }
  },
  data: () => {
    return {
      isLoggedIn: true
    }
  }
}
</script>
