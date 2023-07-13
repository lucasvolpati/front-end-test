<template>
    <div class="main">
        <div>
            <img class="logo" alt="Operand logo" src="../assets/img/operand.webp">
        </div>
        <form @submit.prevent="login()">
        <!-- <div class="group">
            <label for="name">Nome</label>
            <input type="text" name="name" id="name" class="form-control">
        </div> -->
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
</template>

<style lang="scss" scoped>
    @import '../assets/scss/variables';
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 16px;

        .group {
            display: flex;
            flex-direction: column;
            margin-bottom: 16px;

            label {
                text-align: left;
            }
        }

        button {
            width: 50% !important;
            align-self: center;
            background-color: $principal !important;
            border: none !important;
            margin-top: 16px;
            text-transform: uppercase ;

            &:hover {
                background-color: lighten($color: $principal, $amount: 10) !important;
            }

            svg {
                margin-right: 8px;
            }
        }
    }
</style>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  name: 'UserLogin',
  data: () => {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const { email, password } = this

      console.log(email, password)
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
          console.log(getAuth().currentUser)
        })
        .catch((error) => {
          console.log('erro na criação de usuários!!! Erro: ' + error.code)
        })
    }
  }
}
</script>
