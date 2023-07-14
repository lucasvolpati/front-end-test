<script>
import UserLogin from '@/components/UserLogin.vue'

export default {
  name: 'LoginView',
  components: {
    UserLogin
  }
}
</script>

<template>
  <main>
    <div class="form">
      <UserLogin />
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
