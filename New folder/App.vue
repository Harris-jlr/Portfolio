<template>
  <div class="bg-gray-900 flex flex-col min-h-screen overflow-x-hidden">
    <!-- HEADER (Always at the top) -->
     <MyHeader />
    
    <!-- Main Page Content -->
    <main class="flex-1 flex w-full items-center justify-center">
      <router-view />
    </main>

    <!-- Footer (Always at Bottom) -->
    <div class="mt-auto"><myfooter /></div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import MyHeader from '/src/components/MyHeader.vue';
import myfooter from '/src/components/myfooter.vue';

export default {
  components: { myfooter, MyHeader },
  setup() {
  onMounted(() => {

    // Inject Google Analytics Script
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://www.googletagmanager.com/gtag/js?id=G-D3QR9ZCELH';
    scriptTag.async = true;
    document.head.appendChild(scriptTag);

    // Google Analytics Initialization
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-D3QR9ZCELH');
  });
}

};
</script>
