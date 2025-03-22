<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-10 px-10 pb-12">
    <div v-for="(card, index) in cards" :key="index" class="relative group [perspective:1000px] h-50">
      <div class="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <!-- Front Side -->
        <div class="absolute inset-0 text-white overflow-hidden [backface-visibility:hidden]">
          <img :src="card.image" :alt="card.title" class="w-full h-35 object-contain" />
          <h3 class="pt-6 text-md font-semi text-center">{{ card.title }}</h3>
        </div>
        <!-- Back Side -->
        <div class="absolute inset-0 bg-gray-800 text-white shadow-lg p-4 text-sm text-center [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-between">
          <p class="text-gray-300">{{ card.description }}</p>
          <div class="mt-4">
            <button @click.stop="toggleRole(index)" class="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded-md">What was my role?</button>
            <transition name="fade">
              <div v-if="card.showRole" class="mt-2 text-left text-gray-400 text-xs"><p><strong>My Role:</strong> {{ card.role }}</p><p><strong>Tools:</strong> {{ card.tools }}</p></div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { title: "Hyster-Yale", description: "Assisted in the design and build of their new traffic manager to help facilitate their autonomous fork lifts", role: "UX Designer, Front-End Dev, Strategy Consultant", tools: "Vue, Tailwind, Jira, Miro", image: "/assets/hysteryale.png", showRole: false },
        { title: "Bio-Techne", description: "Worked on performance issue with their Drupal site and helped build the views for a consolidated look.", role: "Performance Tuner, Front-End Dev", tools: "Drupal, jQuery, Chrome DevTools", image: "/assets/Biotechne.png", showRole: false },
        { title: "The Amazing 4", description: "Full website, branding, and logo for a startup company that plans 4 events per year.", role: "Designer, WordPress Developer, Branding Consultant", tools: "WordPress, Illustrator, CSS", image: "/assets/theamazing4.png", showRole: false },
        { title: "Magellan", description: "Won the opportunity to help alleviate some WordPress Issue by creating and installing a custom child theme.", role: "WordPress Developer, Theme Customizer", tools: "WordPress, PHP, CSS", image: "/assets/Magellan.png", showRole: false },
        { title: "Nasa Curation Website", description: "These sites were created using a template that we initiated to bring all the pages into a standard look and feel.", role: "Design Standardization, Front-End Dev", tools: "HTML, CSS, NASA Template", image: "/assets/lunar.png", showRole: false },
        { title: "Personal Portfolio", description: "This was my previous online portfolio. Just a static website and now I've updated it to be a vite application.", role: "Sole Designer & Developer", tools: "HTML, CSS, Vite, Vue", image: "/assets/online.png", showRole: false },
        { title: "McKesson", description: "Brought on to Update internal dashboard and create better use of screen for KPI's.", role: "UI Designer, Dashboard Developer", tools: "Power BI, HTML, CSS", image: "/assets/Mckesson.png", showRole: false },
        { title: "SandsTech", description: "I was brought on to research, gather, design, and develop an enterprise software called sandstech services suite.", role: "Product Strategist, UX Architect, Developer", tools: "Vue, Tailwind, Firebase", image: "/assets/SandsTech.png", showRole: false },
      ]
    };
  },
  methods: {
    toggleRole(index) {
      this.cards[index].showRole = !this.cards[index].showRole;
    }
  }
};
</script>

<style scoped>
.fade-enter-active,.fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from,.fade-leave-to { opacity: 0; }
</style>
