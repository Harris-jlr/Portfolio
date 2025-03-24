<template>
  <div class="w-full px-6 py-12 text-center">
    <!-- Title -->
    <h2 class="text-white text-3xl font-semibold mb-1">Timeline of Work</h2>
    <div class="text-lg text-blue-400 font-semibold mb-4">{{ activeYear }}</div>

    <!-- Timeline Bar -->
    <div class="relative w-full flex items-center justify-center mb-10">
      <div class="w-full h-0.5 bg-gray-600 absolute top-1/2 transform -translate-y-1/2" />
      <div class="flex justify-between w-full max-w-4xl z-10">
        <div
          v-for="year in years"
          :key="year"
          class="relative flex flex-col items-center cursor-pointer"
          @click="jumpToYear(year)"
        >
          <div
            class="w-3 h-3 rounded-full"
            :class="year === activeYear ? 'bg-blue-500 scale-125' : 'bg-gray-400'"
          />
          <div class="text-xs text-gray-300 mt-1">{{ year }}</div>
        </div>
      </div>
    </div>

    <!-- Carousel Container -->
    <div class="relative w-full max-w-7xl mx-auto h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Prev Button -->
      <button
        @click="prevImage"
        class="absolute left-2 md:left-6 z-30 bg-blue-500 hover:bg-blue-400 text-white rounded-full p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <!-- Images -->
      <div class="flex items-center space-x-6">
        <!-- Previous Thumbnail -->
        <div v-if="visibleImages[0]" class="w-[10rem] h-[30vh] opacity-60 scale-90 transition-all duration-300">
          <img :src="visibleImages[0].src" class="w-full h-full object-contain rounded-xl shadow" />
        </div>

        <!-- Active Main Image -->
        <div v-if="visibleImages[1]" class="w-[24rem] h-[55vh] z-10 scale-105 transition-all duration-300">
          <img :src="visibleImages[1].src" class="w-full h-full object-contain rounded-xl shadow-xl" />
        </div>

        <!-- Next Thumbnail -->
        <div v-if="visibleImages[2]" class="w-[10rem] h-[30vh] opacity-60 scale-90 transition-all duration-300">
          <img :src="visibleImages[2].src" class="w-full h-full object-contain rounded-xl shadow" />
        </div>
      </div>

      <!-- Next Button -->
      <button
        @click="nextImage"
        class="absolute right-2 md:right-6 z-30 bg-blue-500 hover:bg-blue-400 text-white rounded-full p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import invite1 from '../assets/2_image001.png'
import invite2 from '../assets/AIW_ver2.png'
import invite3 from '../assets/Alice invitation.png'
import invite4 from '../assets/evite_2017.png'
import invite5 from '../assets/Junction_2016.png'
import invite6 from '../assets/splatoon2_09162017.png'
import invite7 from '../assets/wizofoz_2015.png'

import save1 from '../assets/savethedate_2013.jpg'
import save2 from '../assets/Savethedate_2015.png'

import poster1 from '../assets/heavenly-jewels.png'
import poster3 from '../assets/Nakhla_metsoc_2011_take2.png'
import poster4 from '../assets/ssg_timeline.png'

import ticket1 from '../assets/tickets.png'
import ticket2 from '../assets/Womensexplosion_ticket.png'

import ad1 from '../assets/jreustle_MusicAd.jpg'
import ad2 from '../assets/vibe3.png'

import pres1 from '../assets/analytics.png'
import pres2 from '../assets/claimviewer.png'
import pres3 from '../assets/customerservice.png'
import pres4 from '../assets/pagestatistics.png'
import pres5 from '../assets/reporting.png'
import pres6 from '../assets/samplewebapp.png'

// Year-tagged image array
const images = [
  { src: invite3, year: 2009 },
  { src: invite1, year: 2010 },
  { src: poster3, year: 2011 },
  { src: invite2, year: 2011 },
  { src: poster1, year: 2012 },
  { src: poster4, year: 2013 },
  { src: invite7, year: 2014 },
  { src: save2, year: 2015 },
  { src: ticket1, year: 2015 },
  { src: ad1, year: 2015 },
  { src: ticket2, year: 2016 },
  { src: invite5, year: 2016 },
  { src: invite4, year: 2017 },
  { src: invite6, year: 2018 },
  { src: save1, year: 2019 },
  { src: pres1, year: 2020 },
  { src: pres2, year: 2021 },
  { src: ad2, year: 2021 },
  { src: pres3, year: 2022 },
  { src: pres6, year: 2023 },
  { src: pres4, year: 2024 },
  { src: pres5, year: 2025 }
]

const currentIndex = ref(0)

const years = computed(() => {
  const start = 2008
  const end = 2025
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

const activeYear = computed(() => images[currentIndex.value]?.year ?? '')

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

function jumpToYear(selectedYear) {
  const matchIndex = images.findIndex(img => img.year === selectedYear)
  if (matchIndex !== -1) {
    currentIndex.value = matchIndex
    return
  }
  const sorted = [...new Set(images.map(img => img.year))].sort((a, b) => a - b)
  let closest = sorted.find(y => y > selectedYear) || sorted.reverse().find(y => y < selectedYear)
  const fallbackIndex = images.findIndex(img => img.year === closest)
  if (fallbackIndex !== -1) {
    currentIndex.value = fallbackIndex
  }
}
</script>