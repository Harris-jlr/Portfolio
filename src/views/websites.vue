// websites.vue
<template>
  <div class="flex flex-col max-w-screen-xl">
        <SamplePage />
        <SampleGrid />
         
  </div> 
</template>

<script>
import SamplePage from '../components/SamplePage.vue';
import SampleGrid from '../components/SampleGrid.vue'

export default {
  components: { SamplePage, SampleGrid },
}
</script>