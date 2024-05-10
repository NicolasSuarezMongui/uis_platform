<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      code: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Aquí iría la lógica de inicio de sesión
      console.log('Codigo:', this.code)
      console.log('Contraseña:', this.password)
    }
  }
}
</script>
<template>
  <div class="login w-screen h-screen flex justify-center items-center">
    <div
      class="w-2/6 h-4/6 m-auto bg-[#312D2D] rounded-3xl bg-opacity-80 shadow-[0_0_4px_4px_rgba(147,191,47,0.5)]"
    >
      <div class="header_login w-11/12 h-36 m-auto"></div>      
      <div class="login-form flex flex-col justify-around items-center w-11/12 m-auto h-[78%]">
        <h1 class="font-bold text-[#93BF2F] text-2xl">INICIAR SESIÓN</h1>
        <form @submit.prevent="login" class="w-full">
          <div class="mb-4">
            <input
              type="text"
              id="code"
              v-model="code"
              class="border rounded-3xl py-2 px-3 w-full placeholder:text-[#93BF2F] bg-[#D9D9D9] bg-opacity-50 focus:outline-none focus:ring focus:border-[#93BF2F]"
              placeholder="Usuario"
              required
            />
          </div>
          <div class="mb-4">
            <input
              type="password"
              id="password"
              v-model="password"
              class="border rounded-3xl py-2 px-3 w-full placeholder:text-[#93BF2F] bg-[#D9D9D9] bg-opacity-50 focus:outline-none focus:ring focus:border-[#93BF2F]"
              placeholder="Contraseña"
              required
            />
          </div>
          <div class="w-full flex justify-center">
            <button
              type="submit"
              class="bg-[#93BF2F] text-white py-2 px-auto mx-auto w-3/5 rounded-3xl hover:bg-blue-600"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <div class="flex flex-col">
          <p>
            No tienes una cuenta? <a class="cursor-pointer text-[#93BF2F] underline">Registrate</a>
          </p>
          <p>
            Olvidaste tu contraseña?
            <a class="cursor-pointer text-[#93BF2F] underline">Recuperala</a>
          </p>
        </div>
      </div>
    </div>
  </div>

  <RouterView />
</template>
