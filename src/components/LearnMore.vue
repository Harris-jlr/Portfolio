<template>
    <div class="bg-gray-900 text-gray-100 px-6 py-10 max-w-7xl mx-auto space-y-16">
      <!-- Who We Are -->
      <section>
        <h2 class="text-3xl font-bold text-white mb-4">Who We Are</h2>
        <p class="mb-4">
          We’re a collective of passionate front-end developers—from fresh talent to seasoned veterans—brought together by a shared love for clean, meaningful code. Our team spans a range of backgrounds, experiences, and skill levels, but what unites us is our commitment to collaboration, respect, and constant growth.
        </p>
        <p class="mb-4">
          We’re not chasing billion-dollar valuations. We just want to create clean, exciting experiences that matter. What drives us is working on high-quality projects that make someone's life easier and ensuring our developers are respected, valued, and paid well for their time and efforts.
        </p>
        <p>
          We believe developers do their best work when they’re supported, challenged, and trusted. That means creating a safe space for them to grow, thrive, and enjoy what they do best. Whether you're here to learn, to lead, or to ship something amazing—we’re glad you found us.
        </p>
      </section>
  
      <!-- Our Services -->
      <section>
        <h2 class="text-3xl font-bold text-white mb-4">Our Services</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-300">
          <li><strong>Consultation:</strong> Get clarity and creative direction with a team of developers ready to brainstorm your ideas into actionable steps.</li>
          <li><strong>Proposal (RFP) Support:</strong> We help you craft responses to RFPs with strong technical solutions and clean presentation.</li>
          <li><strong>Discovery:</strong> Deep technical dives into your systems with roadmaps and recommendations tailored to your goals.</li>
          <li><strong>Design:</strong> UI/UX design that balances usability with delight, crafted by people who build what they design.</li>
          <li><strong>Development:</strong> Front-end builds powered by modern frameworks, accessibility best practices, and performance optimization.</li>
        </ul>
      </section>
  
      <!-- Meet the Team -->
      <section class="bg-gray-900 text-white py-12 px-6">
        <h2 class="text-3xl font-bold text-center mb-10">Meet the Team</h2>
        <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            <div
            v-for="member in bios"
            :key="member.name"
            class="text-center max-w-xs"
            >
            <img
            :src="member.image"
            alt="member.name"
            class="w-32 aspect-square rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-md object-cover object-top transition duration-300 ease-in-out hover:scale-105 hover:-rotate-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]"
            />


            <h3 class="text-xl font-semibold">{{ member.name }}</h3>
            <p class="text-sm text-blue-400 font-medium mb-2">{{ member.title }}</p>
            <p class="text-sm text-gray-300">{{ member.bio }}</p>
        </div>
        </div>
    </section>
    </div>
  </template>

<script setup>

import JudyImg from '../assets/team/JudyR.png'
import HeathImg from '../assets/team/HeathB.png'
import DerekImg from '../assets/team/DerekR.png'
import JoeImg from '../assets/team/JoeB.png'
import AdamImg from '../assets/team/AdamN.png'
import JustinImg from '../assets/team/JustinP.png'

const bios = [
  {
    name: 'Judy Harris',
    title: 'Director of Business Development',
    image: JudyImg,
    bio: 'Seasoned front-end leader with a creative heart and a strategic mind. Builder of teams, encourager of humans, and advocate for dev respect.'
  },
  {
    name: 'Heath Brown',
    title: 'Chief Technology Officer',
    image: HeathImg,
    bio: 'Empathetic leader and powerhouse architect with deep roots in front end, backend, and security. Mentors hard. Innovates harder.'
  },
  {
    name: 'Derek Roode',
    title: 'Solutions Architect',
    image: DerekImg,
    bio: 'Creative technologist with deep platform knowledge and a strong track record in delivery, collaboration, and inventive problem-solving.'
  },
  {
    name: 'Joe Buchalter',
    title: 'Senior Front-End Developer',
    image: JoeImg,
    bio: 'Focused on building clean, responsive UI with accessibility in mind. Quietly brilliant, endlessly dependable.'
  },
  {
    name: 'Adam Noveskey',
    title: 'Front-End Developer',
    image: AdamImg,
    bio: 'Self-driven, passionate coder who’s always growing. Meticulous and eager to take on challenging front-end builds.'
  },
  {
    name: 'Justin Patrick',
    title: 'Front-End Web Developer',
    image: JustinImg,
    bio: 'Fresh perspective meets technical know-how. Brings enthusiasm, curiosity, and steady hands to the team.'
  }
]
</script>

  