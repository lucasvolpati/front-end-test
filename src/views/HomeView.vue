<template>
  <div class="home">
    <img class="logo" alt="Operand logo" src="../assets/img/operand.webp">
    <HelloOperand msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloOperand from '@/components/HelloOperand.vue'

export default {
  name: 'HomeView',
  components: {
    HelloOperand
  }
}
</script>
