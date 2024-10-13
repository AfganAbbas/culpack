<template>
    <main class="flex flex-col justify-center items-center p-4">
        <progress class="progress progress-secondary h-4 rounded-full w-full md:w-10/12 md:h-8" :value="quizIndex*25" max="100"></progress>
        <img src="../assets/culpack.png" alt="Culpack" class="w-32 md:w-24 h-32 md:h-24 mt-12 scale-[2.2]">
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
    </main>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { toast } from "vue3-toastify";
import { onMounted } from "vue";
import axios from "axios";

const router = useRouter();

const step = ref(0);
const quizIndex = ref(0);
const quiz = {
  questions: [
    {
      question: "What type of experience interests you most?",
      options: [
        "History & landmarks",
        "Local food & drinks",
        "Museums & art",
        "Music & festivals",
        "Nature & scenery"
      ]
    },
    {
      question: "Which type of destination do you prefer?",
      options: [
        "Ancient cities",
        "Modern cities",
        "Coastal towns",
        "Mountain villages",
        "Desert landscapes"
      ]
    },
    {
      question: "How important is local food?",
      options: [
        "Essential",
        "Important",
        "Secondary"
      ]
    },
    {
      question: "How do you prefer to engage with local culture?",
      options: [
        "Guided tours",
        "Mingle with locals",
        "Museums & sites",
        "Nature & outdoors"
      ]
    }
  ]
};



onMounted(async () => {
  const response = await axios.get("http://172.16.3.105:9840/api/question/getLoginFormQuestions");
})

function nextStep() {
  if (quizIndex.value == quiz.questions.length - 1) {
        toast("Data is processing...", { type: "info" });
        setTimeout(() => {
            router.push('/');
        }, 2000)
    } else {
        quizIndex.value++;
    }
    
}
</script>