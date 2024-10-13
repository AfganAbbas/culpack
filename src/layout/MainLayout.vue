<template>
  <main class="p-2">
    <div class="navbar rounded-xl border border-primary shadow-lg text-primary">
      <div class="navbar-start">
        <div class="flex-1 flex items-center pt-2">
          <img src="../assets/culpack.png" alt="Culpack" class="w-12 h-12 object-center scale-[2.2]">
        </div>
      </div>
      <div class="navbar-center">
        <label for="my_modal_6" class="btn btn-primary btn-square p-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor" d="M1 1h10v10H1zm2 2v6h6V3z" />
            <path fill="currentColor" fill-rule="evenodd" d="M5 5h2v2H5z" />
            <path fill="currentColor" d="M13 1h10v10H13zm2 2v6h6V3z" />
            <path fill="currentColor" fill-rule="evenodd" d="M17 5h2v2h-2z" />
            <path fill="currentColor" d="M1 13h10v10H1zm2 2v6h6v-6z" />
            <path fill="currentColor" fill-rule="evenodd" d="M5 17h2v2H5z" />
            <path
              fill="currentColor"
              d="M23 19h-4v4h-6V13h1h-1v6h2v2h2v-6h-2v-2h-1h3v2h2v2h2v-4h2zm0 2v2h-2v-2z"
            />
          </svg>
        </label>
      </div>
      <div class="navbar-end">
        <div class="flex-none">
          <!-- <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabindex="0"
            class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div class="card-body">
              <span class="text-lg font-bold">8 Items</span>
              <span class="text-info">Subtotal: $999</span>
              <div class="card-actions">
                <button class="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> -->
          <div class="dropdown dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="btn btn-ghost btn-circle avatar"
            >
              <div class="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a class="justify-between">
                  Profile
                  <!-- <span class="badge">New</span> -->
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- The button to open modal -->

    <!-- Put this part before </body> tag -->
    <input
      type="checkbox"
      @change="exec"
      id="my_modal_6"
      ref="my_modal_6"
      class="modal-toggle"
    />
    <div class="modal" role="dialog">
      <div class="modal-box" v-if="qrState">
        <h3 class="text-lg font-bold">Scan the QR!</h3>
        <QrCodeReader @data-load="loadQuestions" />
        <div class="modal-action">
          <label for="my_modal_6" class="btn">Close!</label>
        </div>
      </div>
      <div class="modal-box w-10/12 max-w-4xl" v-else>
        <h3 class="text-lg border border-primary rounded-md p-4 text-center font-bold">{{ quiz.questions[0].question }}</h3>
        <div class="py-2 space-y-4">
           <div v-for="quest in quiz.questions[0].options" class="btn h-14 flex justify-center items-center rounded-2xl shadow-md hover:scale-95">
                <p class="text-2xl">{{ quest }}</p>
            </div>
        </div>
        <div class="modal-action">
          <form method="dialog">
            <!-- if there is a button, it will close the modal -->
            <!-- <button class="btn">Close</button> -->
          </form>
        </div>
      </div>
    </div>
    <slot />
  </main>
</template>

<script setup>
import { ref } from "vue";
import QrCodeReader from "../pages/QrCodeReader.vue";

function exec(e) {
  qrState.value = e.target.checked;
}

function loadQuestions(data) {
  qrState.value = false;
}

const qrState = ref(false);

const quiz = ref({
  questions: [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"]
    },
  ]
});

// const items = ref([
//   {
//     label: "Home",
//     to: "/",
//     icon: "pi pi-home",
//   },
//   {
//     label: "About",
//     to: "/about",
//     icon: "pi pi-star",
//   },
//   {
//     label: "Contact",
//     icon: "pi pi-envelope",
//     badge: 3,
//   },
// ]);
</script>
