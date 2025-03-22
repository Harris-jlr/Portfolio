<template>
  <div class="mb-6 border-b border-blue-500 w-full">
    <button
      @click="$emit('toggle')"
      class="w-full text-left px-4 py-3 bg-blue-900 text-white text-lg font-semibold uppercase tracking-wide flex justify-between items-center hover:bg-blue-800"
    >
      {{ title }}
      <span
        class="text-2xl transform transition-transform duration-200"
        :class="isOpen ? 'rotate-180' : ''"
      >
        &#9660;
      </span>
    </button>

    <transition name="fade">
      <div v-if="isOpen" class="w-full">
        <GallerySection :title="title" :images="images" />
      </div>
    </transition>
  </div>
</template>

<script>
import GallerySection from './GallerySection.vue';

export default {
  name: 'AccordionGallery',
  props: {
    title: String,
    images: Array,
    isOpen: Boolean,
  },
  components: { GallerySection },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
