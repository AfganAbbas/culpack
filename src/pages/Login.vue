<template>
  <main class="h-screen w-full flex flex-col items-center justify-center">
    <img src="../assets/culpack.png" alt="Culpack" class="w-24 h-24 object-center scale-[2.2]">
    <h1
      class="text-secondary underline text-center italic font-sans font-bold mb-4 text-xl md:mb-20 md:text-3xl"
    >
      Experience Azerbaijan: Culture, Cuisine, and Adventure Await!
    </h1>
    <form
      class="w-full md:shadow-lg flex flex-col rounded-md p-4 gap-3 md:gap-6 md:w-4/12 md:border"
      @submit.prevent="submitForm"
    >
      <h6 class="text-xl text-primary text-center font-bold md:text-3xl">
        Login
      </h6>
      <label class="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z"
          />
          <path
            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z"
          />
        </svg>
        <input
          type="text"
          class="grow"
          v-model="formData.email"
          placeholder="Email"
        />
      </label>
      <!-- <label class="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
          />
        </svg>
        <input
          type="text"
          class="grow"
          v-model="formData.username"
          placeholder="Username"
        />
      </label> -->
      <label class="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clip-rule="evenodd"
          />
        </svg>
        <input
          type="password"
          placeholder="Ultra Secure Password!!!"
          class="grow"
          v-model="formData.password"
        />
      </label>
      <button class="btn btn-block btn-primary" type="submit">Login</button>
      <p class="text-center">Didn't you join? <RouterLink to="/register" class="text-primary font-bold">Register</RouterLink></p>
    </form>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { toast } from "vue3-toastify";
import { useRouter } from "vue-router";

const router = useRouter();

const formData = ref({
  password: "",
  email: "",
});

// NOTE: Toast notification can be added
function submitForm() {
  toast("Successfully logged in", { type: "success" });
  setTimeout(() => {
    router.push('/');
  }, 1000);
}
</script>