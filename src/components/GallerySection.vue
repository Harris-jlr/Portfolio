<template>
    <section class="mb-16 text-white">
      <!-- Main Image -->
      <div class="flex justify-center mt-6 mb-6">
        <img
          :src="selectedImage"
          alt="Featured Graphic"
          class="w-full max-w-4xl object-contain max-h-[60vh]"
        />
      </div>
  
      <!-- Dot Indicators -->
      <div class="flex justify-center mb-4 space-x-2">
        <span
          v-for="(image, index) in images"
          :key="index"
          class="w-3 h-3 rounded-full"
          :class="selectedImage === image ? 'bg-blue-500' : 'bg-gray-500'"
        ></span>
      </div>
  
      <!-- Section Title -->
      <h2 class="text-xl font-semibold text-center uppercase tracking-wider mb-4">
        {{ title }}
      </h2>
  
      <!-- Thumbnails + Arrows -->
      <div class="relative flex justify-center items-center w-full max-w-5xl mx-auto">
        <!-- Left Arrow -->
        <button
          @click="scrollThumbnails('left')"
          class="text-3xl mr-3 transition bg-transparent p-0"
          :class="canScrollLeft ? 'text-blue-500 hover:text-blue-400' : 'text-gray-500'"
        >
          ◀
        </button>
  
        <!-- Thumbnail Row -->
        <div
          ref="thumbScroll"
          class="flex gap-4 overflow-x-auto scrollbar-hide w-full"
          @scroll="updateArrowVisibility"
        >
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            alt="Thumbnail"
            @click="selectImage(index)"
            :class="[
              'max-h-36 w-auto rounded-md cursor-pointer object-contain transition-all duration-300',
              selectedImage === image ? 'ring-4 ring-blue-500' : ''
            ]"
          />
        </div>
  
        <!-- Right Arrow -->
        <button
          @click="scrollThumbnails('right')"
          class="text-3xl ml-3 transition bg-transparent p-0"
          :class="canScrollRight ? 'text-blue-500 hover:text-blue-400' : 'text-gray-500'"
        >
          ▶
        </button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      images: Array,
    },
    data() {
      return {
        selectedIndex: 0,
        canScrollLeft: false,
        canScrollRight: false,
      };
    },
    computed: {
      selectedImage() {
        return this.images?.[this.selectedIndex] || null;
      },
    },
    mounted() {
      this.updateArrowVisibility();
    },
    methods: {
      selectImage(index) {
        this.selectedIndex = index;
      },
      scrollThumbnails(direction) {
        const container = this.$refs.thumbScroll;
        const scrollAmount = 300;
        if (container) {
          container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
          });
          // Wrap around logic
          if (direction === 'left' && this.selectedIndex === 0) {
            this.selectedIndex = this.images.length - 1;
          } else if (direction === 'right' && this.selectedIndex === this.images.length - 1) {
            this.selectedIndex = 0;
          } else {
            this.selectedIndex += direction === 'right' ? 1 : -1;
          }
        }
      },
      updateArrowVisibility() {
        const container = this.$refs.thumbScroll;
        if (!container) return;
  
        this.canScrollLeft = container.scrollLeft > 0;
        this.canScrollRight =
          container.scrollLeft + container.clientWidth < container.scrollWidth - 1;
      },
    },
  };
  </script>
  
  <style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  </style>
  