<template>
  <main class="p-2">
    <div class="navbar rounded-xl border border-primary shadow-lg text-primary">
      <div class="navbar-start">
        <div class="flex-1 flex items-center pt-2">
          <img
            src="../assets/culpack.png"
            alt="Culpack"
            class="w-12 h-12 object-center scale-[2.2]"
          />
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
              <li><a>Profile</a></li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- The button to open modal -->
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

      <!-- Display the quiz question and answers -->
      <div class="modal-box w-10/12 max-w-4xl" v-else>
        <h3
          class="text-lg border border-primary rounded-md p-4 text-center font-bold"
        >
          {{ quiz.question }}
        </h3>
        <div class="py-2 space-y-4">
          <div
            v-for="answer in quiz.answers"
            :key="answer.id"
            @click="checkAnswer(answer)"
            class="btn h-14 flex justify-center items-center rounded-2xl shadow-md hover:scale-95"
            :class="{
              'bg-green-500':
                isAnswered && isCorrect && answer === selectedAnswer,
              'bg-red-500':
                isAnswered && !isCorrect && answer === selectedAnswer,
            }"
          >
            <p class="text-2xl">{{ answer.answer }}</p>
          </div>
        </div>

        <div class="modal-action">
          <form method="dialog"></form>
        </div>
      </div>
    </div>

    <slot />
  </main>
</template>

<script setup>
import { ref } from "vue";
import QrCodeReader from "../pages/QrCodeReader.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const qrState = ref(false);
const quiz = ref({
  id: "670ad928402c5e5e5b41b181",
  question: "What is the primary material used in the Garagoyunlu kilim?",
  artifactId: "670ad924402c5e5e5b41b179",
  type: "ARTIFACT",
  answers: [
    {
      id: "670ad928402c5e5e5b41b17e",
      answer: "Cotton",
      correct: false,
    },
    {
      id: "670ad928402c5e5e5b41b17f",
      answer: "Silk",
      correct: false,
    },
    {
      id: "670ad928402c5e5e5b41b180",
      answer: "Wool",
      correct: true,
    },
  ],
});

const isAnswered = ref(false); // Track if an answer was selected
const isCorrect = ref(false); // Track if the selected answer is correct
const selectedAnswer = ref(null); // Store the selected answer
const feedbackMessage = ref(""); // Message to display to the user

function exec(e) {
  qrState.value = e.target.checked;
}

// Function to load questions and select a random question
function loadQuestions(data) {
  qrState.value = false;
  if (data.questions && data.questions.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.questions.length);
    quiz.value = data.questions[randomIndex];
  }
}

// Function to check if the selected answer is correct
function checkAnswer(answer) {
  if (!isAnswered.value) {
    selectedAnswer.value = answer;
    isCorrect.value = answer.correct;
    isAnswered.value = true;
    feedbackMessage.value = answer.correct
      ? "Correct! Great job!"
      : "Incorrect! Try again.";

    // Show toast
    if (answer.correct) {
      toast.success(feedbackMessage.value, {
        autoClose: 1000,
        pauseOnHover: false,
      });

      // Close modal if answer is correct
      setTimeout(() => {
        document.getElementById("my_modal_6").checked = false;
        resetState(); // Reset state after modal closes
      }, 1000);
    } else {
      toast.error(feedbackMessage.value);

      // Reset only `isAnswered` to allow re-answering, without closing the modal
      setTimeout(() => {
        resetState(false); // Reset state but keep modal open
      }, 1000);
    }
  }
}

// Reset function to clean up the state for both correct and incorrect answers
function resetState(closeModal = true) {
  isAnswered.value = false;
  selectedAnswer.value = null;
  isCorrect.value = false;
  feedbackMessage.value = "";

  if (closeModal) {
    document.getElementById("my_modal_6").checked = false;
  }
}
</script>

<style scoped>
/* Add any necessary styles */
</style>
