<template>
    <main class="flex flex-col justify-center items-center p-4">
        <progress class="progress progress-secondary h-4 rounded-full w-full md:w-10/12 md:h-8" :value="quizIndex*25" max="100"></progress>
        <div class="text-center" v-if="step == 0">
            <h2 class="text-primary font-main text-3xl font-bold my-10 md:text-7xl">Welcome to CulPack</h2>
            <h2 class="text-secondary font-main text-2xl font-bold my-10 mb-0 md:text-4xl">We will ask a few questions</h2>
            <!-- <h2 class="font-main mb-10 mt-2 text-lg text-gray-500 md:text-2xl">This Data will be used for suggestions according to your desire</h2> -->
            <button class="btn btn-primary md:btn-wide md:btn-md lg:btn-lg mt-10" @click="step = 1">Let's begin</button>
        </div>
        <div class="w-full p-4 py-8 space-y-2" v-if="step==1">
            <div class="w-full min-h-32 border-2 flex justify-center items-center rounded-2xl border-primary shadow-md">
                <p class="text-2xl text-center md:text-2x">{{ quiz.questions[quizIndex].question }}</p>
            </div>
            <div v-for="quest in quiz.questions[quizIndex].options" @click="nextStep" class="btn h-20 flex justify-center items-center rounded-2xl shadow-md hover:scale-95">
                <p class="text-2xl">{{ quest }}</p>
            </div>
        </div>
        <div class="w-full h-screen" v-else>

        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const step = ref(1);
const quizIndex = ref(0);
const quiz = {
  questions: [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"]
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"]
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"]
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Gold", "Oxygen", "Hydrogen", "Carbon"]
    }
  ]
};

function nextStep() {
    if (quizIndex.value == quiz.questions.length - 1) {
        alert("Data is processing...");
        setTimeout(() => {
            router.push('/');
        }, 1000)
    } else {
        quizIndex.value++;
    }
    
}
</script>