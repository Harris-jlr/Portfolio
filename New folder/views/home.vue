// HOME.vue
<template>
      <LandingPage />
      <ItsMe class="absolute right-4 sm:bottom-85 md:bottom-56 lg:bottom-51 hidden sm:block"/> 
</template>

<script>
import LandingPage from '../components/LandingPage.vue';
import ItsMe from '../components/ItsMe.vue'

export default {
  components: { LandingPage, ItsMe },
}
</script>