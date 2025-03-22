// About.vue
<template>
  <div class="flex flex-col">
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