// HOME.vue
<template>
      <LandingPage />
      <ItsMe class="absolute right-4 sm:bottom-42 md:bottom-37 lg:bottom-37 hidden sm:block"/> 
</template>

<script>
import LandingPage from '../components/LandingPage.vue';
import ItsMe from '../components/ItsMe.vue'

export default {
  components: { LandingPage, ItsMe },
}
</script>