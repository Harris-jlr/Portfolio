<template>
  <div class="w-full max-w-7xl mx-auto px-6 py-12">
    <h2 class="text-3xl font-semibold text-center text-white mb-8">Timeline of Work</h2>

    <!-- Slider with Year Display & Ticks -->
    <div class="relative mb-12">
      <!-- Year Label -->
      <div class="absolute left-1/2 transform -translate-x-1/2 -top-8 text-white text-lg font-bold">
        {{ selectedYear }}
      </div>

      <!-- Range Slider -->
      <input
        type="range"
        min="2008"
        max="2025"
        step="1"
        v-model.number="selectedYear"
        class="w-full appearance-none bg-transparent custom-range"
      />

      <!-- Tick Labels -->
      <div class="flex justify-between text-xs text-gray-400 mt-2 px-1">
        <span v-for="year in years" :key="year">{{ year }}</span>
      </div>
    </div>

    <!-- Carousel -->
    <div v-if="getImagesForYear(selectedYear).length" class="flex items-center justify-center space-x-4">
      <div
        v-for="(image, i) in getImagesForYear(selectedYear)"
        :key="image.title"
        :class="[
          'w-48 h-64 bg-gray-800 rounded-xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col items-center justify-end text-white text-sm p-3 transition-transform duration-300 ease-in-out transform',
          i === Math.floor(getImagesForYear(selectedYear).length / 2)
            ? 'scale-110 z-20'
            : 'scale-90 z-10 opacity-80'
        ]"
        class="w-48 h-64 bg-gray-800 rounded-xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col items-center justify-end text-white text-sm p-3"
      >
        <img :src="image.url" :alt="image.title" class="w-full h-48 object-cover mb-2" />
        <p class="font-semibold text-center">{{ image.title }}</p>
      </div>
    </div>

    <!-- Fallback Message -->
    <div v-else class="text-center text-gray-400 mt-8">No images for {{ selectedYear }}</div>
  </div>
</template>

<script>
import AccordionGallery from '/src/components/AccordionGallery.vue';
import invite1 from '../assets/2_image001.png';
import invite2 from '../assets/AIW_ver2.png';
import invite3 from '../assets/Alice invitation.png';
import invite4 from '../assets/evite_2017.png';
import invite5 from '../assets/Junction_2016.png';
import invite6 from '../assets/splatoon2_09162017.png';
import invite7 from '../assets/wizofoz_2015.png';

import save1 from '../assets/savethedate_2013.jpg';
import save2 from '../assets/Savethedate_2015.png';

import poster1 from '../assets/heavenly-jewels.png';
import poster2 from '../assets/nakhla.png';
import poster3 from '../assets/Nakhla_metsoc_2011_take2.png';
import poster4 from '../assets/ssg_timeline.png';

import ticket1 from '../assets/tickets.png';
import ticket2 from '../assets/Womensexplosion_ticket.png';

import ad1 from '../assets/jreustle_MusicAd.jpg';
import ad2 from '../assets/vibe3.png';

import pres1 from '../assets/analytics.png';
import pres2 from '../assets/claimviewer.png';
import pres3 from '../assets/customerservice.png';
import pres4 from '../assets/pagestatistics.png';
import pres5 from '../assets/reporting.png';
import pres6 from '../assets/samplewebapp.png';

export default {
  data() {
    return {
      selectedYear: 2024,
      years: Array.from({ length: 2025 - 2008 + 1 }, (_, i) => 2008 + i),
      graphics: {
        2024: [
          { title: "Conference Banner", url: "./assets/banner2024.png" },
          { title: "Presentation Slide", url: "./assets/slide2024.png" },
          { title: "Promo Flyer", url: "./assets/flyer2024.png" }
        ],
        2023: [
          { title: "Wedding Save the Date", url: "./assets/wedding2023.png" },
          { title: "Event Invite", url: "./assets/invite2023.png" },
          { title: "Brochure", url: "./assets/brochure2023.png" }
        ],
        2022: [
          { title: "STEM Poster", url: "./assets/stem2022.png" },
          { title: "Holiday Flyer", url: "./assets/flyer2022.png" },
          { title: "Social Media Ad", url: "./assets/ad2022.png" }
        ]
      }
    };
  },
  methods: {
    getImagesForYear(year) {
      return this.graphics[year] || [];
    }
  }
};
</script>

<style scoped>
.custom-range {
  height: 4px;
  background-color: #374151; /* Tailwind gray-700 */
  border-radius: 2px;
  outline: none;
}

.custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  width: 20px;
  background: #3b82f6;
  border-radius: 9999px;
  border: 2px solid white;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.custom-range::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

.custom-range::-moz-range-thumb {
  height: 20px;
  width: 20px;
  background: #3b82f6;
  border-radius: 9999px;
  border: 2px solid white;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.custom-range::-moz-range-thumb:hover {
  transform: scale(1.1);
}
</style>
