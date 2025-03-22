<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 px-10 pb-12">
      <div v-for="(card, index) in cards" :key="index" 
        class="bg-gray-800 text-white rounded-xl shadow-lg pb-6 flex flex-col items-center transition-transform transform hover:scale-105">
        
        <img :src="card.image" :alt="card.title" class="w-full h-40 object-cover rounded-lg mb-2" />
  
        <h3 class="pt-6 text-lg font-bold">{{ card.title }}</h3>
        <p class="text-sm text-gray-400 px-4 mt-2 text-center">{{ card.description }}</p>
        
      <!--   <button class="mt-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-4 py-2 rounded-md">
          View Project
        </button> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          { title: "Hyster-Yale", description: "Assisted in the design and build of thier new traffic manager to help facilite their autonomous fork lifts", image: "/src/assets/hysteryale.png" },
          { title: "Bio-Techne", description: "Worked on Performance issue with their Drupal Site and helped Build the views for consolidated look.", image: "/src/assets/Biotechne.png" },
          { title: "The Amazing 4", description: "Fullwebsite, branding, and Logo for a start up company that plans 4 events per year.", image: "/src/assets/theamazing4.png" }, 
          { title: "Magellan", description: "Won the opportunity to help alleviate some WordPress Issue by creating and installing a custom child theme.", image: "/src/assets/Magellan.png" },
          { title: "Nasa Curation Website", description: "These sites were created using a template that we initiated to bring all the pages into a standard look and feel.", image: "/src/assets/lunar.png" },
          { title: "Personal Portfolio", description: "This was my previous online portfolio.  Just a static website and now I've updated it to be a vite application.", image: "/src/assets/online.png" },
          { title: "McKesson", description: "Brought on to Update internal dashboard and create better use of screen for KPI's.", image: "/src/assets/Mckesson.png" },
          { title: "SandsTech", description: "I was brought on to research, gather, design, and develop an enterprise software called sandstech services suite.", image: "/src/assets/SandsTech.png" },
          { title: "S&S Healthcare", description: "Overhauled their web applications, stood up wordpress group for cigna clients and supported RFP efforts.", image: "/src/assets/S&Shealthcare.png" },
           ],
      };
    },
  };
  </script>
  
  
  