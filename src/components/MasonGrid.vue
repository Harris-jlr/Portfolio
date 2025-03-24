<template>
    <div class="px-6 py-10 max-w-screen-xl mx-auto">
      <div class="flex flex-wrap gap-2 mb-6">
        <button
          v-for="(category, index) in categories"
          :key="index"
          @click="selectedCategory = category"
          :class="[
            'px-3 py-1 rounded-full text-sm font-medium',
            selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200'
          ]"
        >
          {{ category }}
        </button>
      </div>
      <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <div
          v-for="(item, index) in filteredItems"
          :key="index"
          class="break-inside-avoid bg-gray-800 rounded-lg overflow-hidden shadow-lg"
        >
          <img :src="item.image" :alt="item.title" class="w-full object-cover" />
          <div class="p-3 text-sm text-white font-semibold">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: 'All',
        categories: ['All', 'Invitations', 'Save the Dates', 'Posters'],
        items: [
          { title: 'Fall Invitation', category: 'Invitations', image: '/assets/fall-invite.png' },
          { title: 'Wedding Save the Date', category: 'Save the Dates', image: '/assets/wedding-save.png' },
          { title: 'Science Poster', category: 'Posters', image: '/assets/poster.png' }
        ]
      };
    },
    computed: {
      filteredItems() {
        if (this.selectedCategory === 'All') return this.items;
        return this.items.filter(item => item.category === this.selectedCategory);
      }
    }
  };
  </script>
  