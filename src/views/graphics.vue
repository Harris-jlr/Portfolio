<template>
  <div class="relative w-full">
    <MyGraphics />

    <!-- Sticky Anchor Wrapper to allow natural layout positioning -->
    <div class="w-full flex justify-end">
      <!-- This preserves ItsMe.vue layout exactly as-is -->
      <ItsMe />
    </div>
  </div>
</template>

<script>
import MyGraphics from '../components/MyGraphics.vue';
import ItsMe from '../components/ItsMe.vue';

export default {
  components: { MyGraphics, ItsMe },
};
</script>
