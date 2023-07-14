<template>
  <main>
    <div class="form">
      <div>
          <img class="logo" alt="Operand logo" src="../assets/img/operand.webp">
      </div>
      <form @submit.prevent="login()">
        <div class="group">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" class="form-control" required v-model="name">
        </div>
        <div class="group">
            <label for="email">E-mail</label>
            <input type="text" name="email" id="email" class="form-control" required v-model="email">
        </div>
        <div class="group">
            <label for="pass">Senha</label>
            <input type="password" name="pass" id="pass" class="form-control" required v-model="password">
        </div>
        <button class="btn btn-primary">Cadastrar</button>
      </form>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    display: flex;
    justify-content: center;
    flex-direction: row;
  }
</style>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, addDoc, collection } from 'firebase/firestore'

export default {
  name: 'NewUserView',
  components: {
  },
  data: () => {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const { email, password } = this
      const db = getFirestore(this.$firebase)

      createUserWithEmailAndPassword(getAuth(), email, password)
        .then((data) => {
          this.$swal({
            position: 'top-end',
            icon: 'success',
            title: 'Usuário cadastrado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/area-restrita')
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            this.$swal({
              position: 'top-end',
              icon: 'error',
              title: 'O usuário informado já está cadastrado!',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      // addWithFirestore
      try {
        await addDoc(collection(db, 'usuarios'), {
          name: this.name,
          email: this.email,
          password: this.password
        })
        // console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
        this.$swal({
          position: 'top-end',
          icon: 'error',
          title: 'Erro ao cadastrar usuário na base! Erro: ' + e,
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  }
}
</script>
