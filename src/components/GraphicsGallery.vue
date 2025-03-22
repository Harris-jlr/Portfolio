<template>
    <section class="mb-16">
      <h2 class="text-2xl font-semibold text-white mb-4 border-b border-blue-500 inline-block uppercase tracking-wider">
        {{ title }}
      </h2>
  
      <!-- Horizontal scroll strip -->
      <div
        class="flex gap-4 overflow-x-auto overflow-y-hidden pb-2 scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          alt="Graphic Sample"
          class="h-48 w-auto rounded-lg shadow-md hover:scale-105 transition duration-300 ease-in-out snap-start"
        />
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      images: Array,
    },
  };
  </script>
  
  <style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>
  