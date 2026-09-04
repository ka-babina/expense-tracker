import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export function useAuth() {
  async function register(email: string, password: string) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      if (error instanceof Error) {
        return error.message
      }
      return 'Что-то пошло не так'
    }
  }

  async function login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      if (error instanceof Error) {
        return error.message
      }
      return 'Что-то пошло не так'
    }
  }

  async function logout() {
    try {
      await signOut(auth)
    } catch (error) {
      if (error instanceof Error) {
        return error.message
      }
      return 'Что-то пошло не так'
    }
  }

  return { register, login, logout }
}
