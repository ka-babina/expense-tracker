<template>
  <div class="container">
    <div class="form">
      <input v-model="email" type="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Пароль" />
      <button @click="handleLogin">Войти</button>
      <button @click="handleRegister">Зарегистрироваться</button>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '../composables/useAuth'

const email = ref('')
const password = ref('')
const { register, login, logout } = useAuth()
const errorMessage = ref('')

async function handleLogin() {
  const result = await login(email.value, password.value)
  if (result !== undefined) {
    errorMessage.value = result
  }
}
async function handleRegister() {
  const result = await register(email.value, password.value)
  if (result !== undefined) {
    errorMessage.value = result
  }
}
</script>

<style></style>
