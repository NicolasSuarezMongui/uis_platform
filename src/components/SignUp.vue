<template>
  <div class="login student-info w-screen h-screen flex justify-center items-center">
    <div
      class="w-10/12 h-4/6 m-auto bg-[#312D2D] rounded-3xl bg-opacity-80 shadow-[0_0_4px_4px_rgba(147,191,47,0.5)] flex items-center"
    >
      <div
        class="student-info-form flex flex-col justify-around items-center w-11/12 m-auto h-[78%]"
      >
        <h1 class="font-bold text-[#93BF2F] text-2xl">Información del Usuario</h1>
        <form @submit.prevent="submitStudentInfo" class="w-full grid grid-cols-2 gap-4">
          <div class="mb-4">
            <input
              type="text"
              id="code"
              v-model="code"
              class="border rounded-3xl py-2 px-3 w-full placeholder:text-[#93BF2F] bg-[#D9D9D9] bg-opacity-50 focus:outline-none focus:ring focus:border-[#93BF2F]"
              placeholder="Nombres"
              required
            />
          </div>
          <div class="mb-4">
            <input
              type="text"
              id="name"
              v-model="name"
              class="border rounded-3xl py-2 px-3 w-full placeholder:text-[#93BF2F] bg-[#D9D9D9] bg-opacity-50 focus:outline-none focus:ring focus:border-[#93BF2F]"
              placeholder="Apellidos"
              required
            />
          </div>
          <div class="mb-4">
            <input
              type="text"
              id="last_name"
              v-model="last_name"
              class="border rounded-3xl py-2 px-3 w-full placeholder:text-[#93BF2F] bg-[#D9D9D9] bg-opacity-50 focus:outline-none focus:ring focus:border-[#93BF2F]"
              placeholder="Codigo"
              required
            />
          </div>
          <div class="mb-4">
            <input
              type="email"
              id="email"
              v-model="email"
              class="border rounded-3xl py-2 px-3 w-full placeholder:text-[#93BF2F] bg-[#D9D9D9] bg-opacity-50 focus:outline-none focus:ring focus:border-[#93BF2F]"
              placeholder="Correo"
              required
            />
          </div>
          <div class="mb-4">
            <input
              type="date"
              id="date"
              v-model="birthdate"
              class="border rounded-3xl py-2 px-3 w-full placeholder:text-[#93BF2F] bg-[#D9D9D9] bg-opacity-50 focus:outline-none focus:ring focus:border-[#93BF2F]"
              placeholder="Fecha de Nacimiento"
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
          <div class="mb-4">
            <input
              type="text"
              id="sex"
              v-model="sex"
              class="border rounded-3xl py-2 px-3 w-full placeholder:text-[#93BF2F] bg-[#D9D9D9] bg-opacity-50 focus:outline-none focus:ring focus:border-[#93BF2F]"
              placeholder="Sexo"
              required
            />
          </div>
          <div class="mb-4">
            <input
              type="text"
              id="career"
              v-model="career"
              class="border rounded-3xl py-2 px-3 w-full placeholder:text-[#93BF2F] bg-[#D9D9D9] bg-opacity-50 focus:outline-none focus:ring focus:border-[#93BF2F]"
              placeholder="Rol/Carrera"
              required
            />
          </div>
          <!-- Agregar más campos según sea necesario (Carrera, Apellido, Fecha de Nacimiento, etc.) -->
          <div class="w-full flex justify-center col-span-2">
            <button
              type="submit"
              class="bg-[#93BF2F] text-white py-2 px-auto mx-auto w-3/5 rounded-3xl hover:bg-blue-600"
            >
              Guardar Información
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script>
import { RouterView } from 'vue-router'
export default {
  data() {
    return {
      code: '',
      name: '',
      last_name: '',
      email: '',
      birthdate: '',
      password: '',
      sex: '',
      career: ''
      // Agregar más variables para los campos adicionales
    }
  },
  methods: {
    submitStudentInfo() {
      // Aquí puedes enviar la información del estudiante al servidor o realizar alguna acción con los datos
      console.log('Información del estudiante enviada:', this.code, this.names, this.sex)
    }
  }
}
</script>
