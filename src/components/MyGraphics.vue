<template>
  <div class="relative isolate w-full">
    <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
    </div>

    <!-- Hero Section -->
    <div class="pt-24 sm:pt-32 md:py-6 lg:pb-4 flex flex-col items-center justify-center w-full">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-5xl text-center">
          <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">My Graphics</h1>
          <p class="mt-8 text-lg font-medium text-gray-400 sm:text-xl">
            The following screenshots and casestudies are provided to showcase my work and spark discussions.
          </p>
        </div>
      </div>
    </div> 

    <!-- Accordion Gallery Sections -->
    <div class="px-6 pb-10 max-w-5xl mx-auto">
      <AccordionGallery
        v-for="(section, index) in sections"
        :key="index"
        :title="section.title"
        :images="section.images"
        :is-open="openIndex === index"
        @toggle="handleToggle(index)"
        class="pt-6"
      />
    </div>

    <!-- Bottom Hero Section -->
    <div class="px-6 pb-4 max-w-5xl mx-auto">
      <section class="px-6 max-w-3xl">
      <h2 class="text-3xl font-bold text-white mb-4">Let’s Talk Graphics</h2>
      <p class="text-gray-400 text-lg">
        From sleek invitations to attention-grabbing posters and branded ads, my work blends form and function. Have an idea in mind? Let’s bring it to life.
      </p>
      <div class="mt-8">
        <a href="/schedule" class="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-6 py-3 rounded-md">Schedule a Call</a>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
import AccordionGallery from '/src/components/AccordionGallery.vue';
import invite1 from '../assets/2_image001.png';
import invite2 from '../assets/AIW_ver2.png';
import invite3 from '../assets/Alice invitation.png';
import invite4 from '../assets/evite_2017.png';
import invite5 from '../assets/Junction_2016.png';
import invite6 from '../assets/splatoon2_09162017.png';
import invite7 from '../assets/wizofoz_2015.png';

import save1 from '../assets/savethedate_2013.jpg';
import save2 from '../assets/Savethedate_2015.png';

import poster1 from '../assets/heavenly-jewels.png';
import poster2 from '../assets/nakhla.png';
import poster3 from '../assets/Nakhla_metsoc_2011_take2.png';
import poster4 from '../assets/ssg_timeline.png';

import ticket1 from '../assets/tickets.png';
import ticket2 from '../assets/Womensexplosion_ticket.png';

import ad1 from '../assets/jreustle_MusicAd.jpg';
import ad2 from '../assets/vibe3.png';

import pres1 from '../assets/analytics.png';
import pres2 from '../assets/claimviewer.png';
import pres3 from '../assets/customerservice.png';
import pres4 from '../assets/pagestatistics.png';
import pres5 from '../assets/reporting.png';
import pres6 from '../assets/samplewebapp.png';

export default {
  components: { AccordionGallery },
  data() {
    return {
      openIndex: 0,
      sections: [
        {
          title: 'Invitations',
          images: [invite1, invite2, invite3, invite4, invite5, invite6, invite7],
        },
        {
          title: 'Save the Dates',
          images: [save1, save2],
        },
        {
          title: 'Conference Posters',
          images: [poster1, poster2, poster3, poster4],
        },
        {
          title: 'Tickets',
          images: [ticket1, ticket2],
        },
        {
          title: 'Advertisements',
          images: [ad1, ad2],
        },
        {
          title: 'Presentation Slides',
          images: [pres1, pres2, pres3, pres4, pres5, pres6],
        },
      ],
    };
  },
  methods: {
    handleToggle(index) {
      this.openIndex = this.openIndex === index ? null : index;
    }
  }
};
</script>