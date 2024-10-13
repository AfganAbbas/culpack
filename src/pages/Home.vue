<template>
  <MainLayout>
    <!-- <button @click="notify">Notify !</button> -->
    <h1 class="text-2xl md:text-3xl text-primary font-bold my-5 text-center">
      Here is packages we offer for your desire
    </h1>
    <div class="flex justify-around gap-3 flex-wrap">
      <div class="card bg-base-100 shadow-2xl md:my-4" v-for="item in travelPackages.Packages">
        <div
          class="card-body border-primary border rounded-2xl items-center text-center space-y-2"
        >
          <h2 class="card-title text-primary text-2xl">{{ item.PriceRange }}</h2>
          <ul class="timeline timeline-vertical">
            <li>
              <div class="timeline-start timeline-box">
                {{ item.Museums[0].Name }}
              </div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">{{ item.Restaurants[0].Name }}</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-start timeline-box">{{ item.ShoppingLocations[0].Name }}</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div class="timeline-end timeline-box">{{ item.Museums[1].Name }}</div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-start timeline-box">{{ item.Accommodation[0].Name }}</div>
              <div class="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
          <div class="card-actions justify-end">
            <button class="btn btn-primary btn-block">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layout/MainLayout.vue";

const travelPackages = {
  Packages: [
    {
      PriceRange: "$ (Budget)",
      Restaurants: [
        { Name: "Firuze Restaurant", Location: "Old City", Cuisine: "Azerbaijani" },
        { Name: "Çay Bağı 145", Location: "Old City", Cuisine: "Azerbaijani" },
        { Name: "Nargiz Café", Location: "Fountain Square", Cuisine: "Azerbaijani" },
        { Name: "Doyme Restaurant", Location: "Nizami Street", Cuisine: "Azerbaijani" },
        { Name: "Zeytun Café", Location: "City Center", Cuisine: "Azerbaijani" },
        { Name: "Araz Café", Location: "Fountain Square", Cuisine: "Azerbaijani" },
        { Name: "Əzizbəyov Café", Location: "Baku", Cuisine: "Azerbaijani" }
      ],
      Museums: [
        { Name: "Icherisheher", Location: "Old City" },
        { Name: "Miniature Book Museum", Location: "Old City" },
        { Name: "Baku Boulevard", Location: "Seaside" },
        { Name: "Museum of Archaeology and Ethnography", Location: "Old City" },
        { Name: "Azerbaijan National Art Museum", Location: "City Center" },
        { Name: "Upland Park", Location: "City View" },
        { Name: "Nizami Literature Museum", Location: "City Center" }
      ],
      ShoppingLocations: [
        { Name: "Sadarak Market", Location: "Outskirts" },
        { Name: "Bina Shopping Center", Location: "Outskirts" },
        { Name: "Taza Bazaar", Location: "Local Market" }
      ],
      Accommodation: [
        { Name: "Sahil Hostel & Hotel", Location: "City Center" },
        { Name: "Baku Backpackers Hostel", Location: "Fountain Square" },
        { Name: "Old City Inn", Location: "Old City" }
      ],
      Duration: "2-3 Days",
      Type: "Budget"
    },
    {
      PriceRange: "$$ (Mid-Range)",
      Restaurants: [
        { Name: "Mangal Restaurant", Location: "Khatai", Cuisine: "Azerbaijani" },
        { Name: "Sumakh", Location: "Yasamal", Cuisine: "Azerbaijani" },
        { Name: "Dolma Restaurant", Location: "Old City", Cuisine: "Azerbaijani" },
        { Name: "Sehrli Təndir", Location: "Fountain Square", Cuisine: "Azerbaijani" },
        { Name: "Zeytun Restaurant", Location: "Seaside Boulevard", Cuisine: "Azerbaijani" },
        { Name: "Sheki Restaurant", Location: "Fountain Square", Cuisine: "Azerbaijani" },
        { Name: "Nərgiz Restaurant", Location: "Nizami Street", Cuisine: "Azerbaijani" }
      ],
      Museums: [
        { Name: "Azerbaijan Carpet Museum", Location: "Seaside Boulevard" },
        { Name: "Heydar Aliyev Center", Location: "Nerimanov" },
        { Name: "Baku Museum of Modern Art", Location: "Khatai" },
        { Name: "Baku Ferris Wheel", Location: "Bayil" },
        { Name: "Atashgah Fire Temple", Location: "Surakhani" },
        { Name: "Maiden Tower", Location: "Old City" }
      ],
      ShoppingLocations: [
        { Name: "Park Bulvar Mall", Location: "Seaside Boulevard" },
        { Name: "28 Mall", Location: "Nizami" },
        { Name: "Ganjlik Mall", Location: "Ganjlik" }
      ],
      Accommodation: [
        { Name: "Winter Park Hotel", Location: "City Center" },
        { Name: "Midtown Hotel Baku", Location: "Nasimi" },
        { Name: "Sapphire City Hotel", Location: "City Center" },
        { Name: "Premier Old Gates Hotel", Location: "Old City" }
      ],
      Duration: "3-4 Days",
      Type: "Mid-Range"
    },
    {
      PriceRange: "$$$ (Luxury)",
      Restaurants: [
        { Name: "Shirvanshah Museum Restaurant", Location: "Old City", Cuisine: "Azerbaijani" },
        { Name: "Chinar Restaurant", Location: "Fountain Square", Cuisine: "Fusion" },
        { Name: "Art Garden", Location: "Old City", Cuisine: "Azerbaijani" },
        { Name: "Zafferano", Location: "Nizami", Cuisine: "Fusion" },
        { Name: "Nar & Sharab", Location: "Nizami", Cuisine: "Azerbaijani" },
        { Name: "Nakhchivan Restaurant", Location: "City Center", Cuisine: "Azerbaijani" },
        { Name: "Sky Grill", Location: "JW Marriott Absheron", Cuisine: "Azerbaijani" },
        { Name: "Sahil Bar & Grill", Location: "Seaside", Cuisine: "Azerbaijani" }
      ],
      Museums: [
        { Name: "Palace of the Shirvanshahs", Location: "Old City" },
        { Name: "Flame Towers", Location: "Bayil" },
        { Name: "National Museum of History", Location: "Old City" },
        { Name: "Philharmonic Hall", Location: "Seaside" },
        { Name: "Gobustan National Park", Location: "Rock Art" },
        { Name: "Yanar Dag", Location: "Burning Mountain" },
        { Name: "BibiHeybat Mosque", Location: "Seaside" }
      ],
      ShoppingLocations: [
        { Name: "Port Baku Mall", Location: "Khatai" },
        { Name: "Ganjlik Mall", Location: "Ganjlik" }
      ],
      Accommodation: [
        { Name: "Four Seasons Hotel", Location: "Seaside Boulevard" },
        { Name: "Fairmont Baku", Location: "Flame Towers" },
        { Name: "JW Marriott Absheron", Location: "Seaside Boulevard" },
        { Name: "Hilton Baku", Location: "Seaside Boulevard" }
      ],
      Duration: "5 Days / 4 Nights",
      Type: "Luxury"
    }
  ]
};


// import { toast } from 'vue3-toastify';

// const notify = () => {
//   toast("Wow so easy !");
// }
</script>
