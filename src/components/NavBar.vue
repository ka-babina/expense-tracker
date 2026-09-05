<template>
  <router-link to="/">Главная</router-link>
  <router-link to="/transactions">Расходы</router-link>
  <router-link to="/calendar">Календарь</router-link>
  <button @click="handleLogout">Выйти</button>
</template>

<script setup lang="ts">
import { useAuth } from '../composables/useAuth'
import { useRouter } from 'vue-router'
const router = useRouter()
const { logout } = useAuth()

async function handleLogout() {
  const result = await logout()
  if (result !== undefined) {
    console.error(result)
  } else {
    router.push('/auth')
  }
}
</script>

<style>

</style>