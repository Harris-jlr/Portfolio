<template>
    <div class="w-full px-6 py-12 text-center">
      <!-- Timeline -->
      <h2 class="text-white text-3xl font-semibold mb-1">Timeline of Work</h2>
      <div class="text-lg text-blue-400 font-semibold mb-4">{{ activeYear }}</div>
      <div class="relative w-full flex items-center justify-center mb-10">
        <div class="w-full h-0.5 bg-gray-600 absolute top-1/2 transform -translate-y-1/2" />
        <div class="flex justify-between w-full max-w-4xl z-10">
          <div
            v-for="year in years"
            :key="year"
            class="relative flex flex-col items-center"
          >
            <div
              class="w-3 h-3 rounded-full"
              :class="year === activeYear ? 'bg-blue-500 scale-125' : 'bg-gray-400'"
            />
            <div class="text-xs text-gray-300 mt-1">{{ year }}</div>
          </div>
        </div>
      </div>
  
      <!-- Carousel -->
      <div class="flex justify-center items-center gap-6">
        <div
          v-for="(img, index) in visibleImages"
          :key="img.src"
          :class="[
            'transition-all duration-300',
             index === 1 ? 'scale-105 z-10 opacity-100' : 'scale-95 opacity-60'
          ]"
        >
        <img
            :src="img.src"
            class="max-w-[16rem] max-h-[10rem] object-cover rounded-xl shadow-md"
            />
        </div>
      </div>
  
      <!-- Buttons -->
      <div class="mt-6 flex justify-center gap-4">
        <button @click="prevImage" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Prev</button>
        <button @click="nextImage" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-400">Next</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import poster1 from '../assets/heavenly-jewels.png'
  import poster2 from '../assets/nakhla.png'
  import poster3 from '../assets/Nakhla_metsoc_2011_take2.png'
  import poster4 from '../assets/ssg_timeline.png'
  import ad2 from '../assets/vibe3.png'
  import pres6 from '../assets/samplewebapp.png'
  
  import { ref, computed } from 'vue'
  
  // Main image array using direct imports
  const images = [
    { src: poster3, year: 2011 },
    { src: poster4, year: 2014 },
    { src: ad2, year: 2021 },
    { src: pres6, year: 2023 }
  ]
  
  const currentIndex = ref(0)
  const activeYear = computed(() => images[currentIndex.value].year)
  
  // Get unique year list for timeline display
  const years = computed(() => {
    const start = 2008
    const end = 2025
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  })
  
  // Visible 3-image carousel logic
  const visibleImages = computed(() => {
    const prev = (currentIndex.value - 1 + images.length) % images.length
    const next = (currentIndex.value + 1) % images.length
    return [images[prev], images[currentIndex.value], images[next]]
  })
  
  const nextImage = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }
  
  const prevImage = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  }
  </script>
  