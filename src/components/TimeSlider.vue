<template>
    <div class="w-full px-6 py-2 text-center">
      <!-- Title -->
      <h2 class="text-white text-3xl font-semibold mb-1">Timeline of Work</h2>
      <div class="text-lg text-blue-400 font-semibold mb-2">{{ activeYear }}</div>
  
      <!-- Year Timeline -->
      <div class="relative w-full flex items-center justify-center mb-4">
        <div class="w-full max-w-5xl flex justify-between items-center border-t border-gray-600 pt-4">
          <div
            v-for="year in years"
            :key="year"
            @click="jumpToYear(year)"
            class="cursor-pointer text-sm text-gray-300 hover:text-blue-400"
          >
            <div class="flex flex-col items-center">
              <div
                class="w-2 h-2 rounded-full mb-1"
                :class="year === activeYear ? 'bg-blue-500 scale-125' : 'bg-gray-800'"
              />
              {{ year }}
            </div>
          </div>
        </div>
      </div>
  
      <!-- 3D Carousel Style -->
      <div class="relative w-full max-w-8xl mx-auto h-[50vh] flex items-center justify-center">
  <!-- Left Arrow -->
  <button @click="prevImage" class="absolute left-10 z-20 text-blue-400 hover:text-blue-300 font-bold text-5xl">
    ‹
  </button>

  <!-- Carousel 3D Style -->
  <div class="relative w-full h-full flex items-center justify-center space-x-6 will-change-transform">
    <img
      v-if="visibleImages[0]"
      :src="visibleImages[0].src"
     @mouseenter="startAutoScroll('prev')"
     @mouseleave="stopAutoScroll"
      class="h-[30vh] w-auto opacity-80 scale-90 transition-all hover:scale-95 duration-700 ease-in-out  shadow-md"
    />
    <img
      v-if="visibleImages[1]"
      :src="visibleImages[1].src"
      class="h-[45vh] w-auto z-10 transition-all duration-700 ease-in-out  shadow-[0_-20px_40px_-10px_rgba(59,130,246,0.4)]"
    />
    <img
      v-if="visibleImages[2]"
      :src="visibleImages[2].src"
      @mouseenter="startAutoScroll('next')"
      @mouseleave="stopAutoScroll" 
      class="h-[30vh] w-auto opacity-80 scale-90 transition-all hover:scale-95 duration-700 ease-in-out  shadow-md"
    />
  </div>

  <!-- Right Arrow -->
  <button @click="nextImage" class="absolute right-10 z-20 text-blue-400 hover:text-blue-300 font-bold text-5xl">
    ›
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
  
  let hoverInterval = null

  function startAutoScroll(direction) {
  stopAutoScroll()
  hoverInterval = setInterval(() => {
    direction === 'next' ? nextImage() : prevImage()
  }, 700) // slower for smoother visual flow
  }


function stopAutoScroll() {
  if (hoverInterval) {
    clearInterval(hoverInterval)
    hoverInterval = null
  }
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