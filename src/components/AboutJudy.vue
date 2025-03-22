<template>
    <div class="bg-gray-900 text-gray-200 ">  
  
      <!-- Skills Assessment -->
      <section class="py-16 px-6 max-w-8xl mx-auto">
        <!-- Adding filterable controls-->
        <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
          <input
            v-model="search"
            type="text"
            placeholder="Search skills..."
            class="p-2 rounded bg-gray-800 border border-gray-700 text-white w-full md:w-1/3"
          />
          <select
            v-model="filterTag"
            class="p-2 rounded bg-gray-800 border border-gray-700 text-white w-full md:w-1/4"
          >
            <option value="">Filter by Tag</option>
            <option
              v-for="tag in allTags"
              :key="tag"
              :value="tag"
            >
              {{ tag }}
            </option>
          </select>
        </div>


        <h2 class="text-center text-3xl font-semibold text-white mb-4">Skills Assessment</h2>
        <p class="text-center max-w-4xl pb-8 mx-auto text-gray-300">This comprehensive list highlights key areas where I have applied expertise in technology, automation, UI/UX, cloud computing, digital transformation, product management, and innovation.  I've included client comments for additional insight.</p>
        <!-- <div  v-for="(skills, index) in skills" :key="index" class="w-full p-4 flex flex-col">
        <h3 class="text-md font-bold ">{{ skills.title }}</h3>
        <p class="max-w-6xl mx-auto text-gray-300">{{ skills.description }}</p>
        <p class="pt-4 max-w-6xl italic mx-auto text-gray-400">"{{ skills.quote }}"{{ skills.attribute }}</p>
        </div> -->
        <div class="grid gap-8 md:grid-cols-3">
          <div
            v-for="(skill, index) in filteredSkills"
            :key="index"
            class="bg-gray-800 p-6 rounded-2xl shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 class="text-xl font-semibold text-white mb-2">{{ skill.title }}</h3>
              <p class="text-gray-300 text-sm mb-4">
                {{ skill.description }}
              </p>
            </div>
            <p class="italic text-blue-400 text-sm border-l-4 border-blue-400 pl-4">
              "{{ skill.quote }}"{{ skill.attribute }}
            </p>
            <!-- badges added for filtering-->
             <div class="flex flex-wrap gap-2 justify-end mt-4">
              <span
                v-for="(tag, i) in skill.tags"
                :key="i"
                :class="tag.color + ' text-white text-xs font-semibold px-4 py-2 rounded-full'"
              >
                {{ tag.label }}
              </span>
            </div>

          </div>
        </div>

      </section>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      search: "",
      filterTag: "",
      skills: [
        { title: "Executive Communication", description: "Responsible for crafting clear, strategic executive messaging that aligned business goals with stakeholder engagement. I developed high-quality content for executive presentations, internal communications, and external reports. My ability to translate complex business and technical information into concise, engaging messaging contributed to improved stakeholder understanding and decision-making.", quote: "Judy's ability to capture and represent ideas clearly to the client are unsurpased.", attribute: "  - Cinda Chullen, Nasa Executive", tags: [ { label: "Management", color: "bg-purple-600" }, { label: "Communication", color: "bg-blue-600" } ] },
        { title: "Corporate Strategy", description: "Led corporate strategic initiatives by aligning business goals with technological advancements, ensuring sustained growth and competitive market positioning. My ability to identify key opportunities, optimize internal operations, and drive process improvements has resulted in measurable business success.", quote: "Handchosen as Subject Matter Expert for several estimates and RFPs due to her strategic vision.", attribute: "  - Executive Leadership, NTTdata", tags: [ { label: "Strategy", color: "bg-teal-600" }, { label: "Leadership", color: "bg-purple-600" } ] },
        { title: "Writing & Content Development", description: "With extensive experience in professional writing, developing high-quality content for internal and external communications. From executive speeches and corporate reports to web content and technical documentation, I ensure that messaging is clear, engaging, and strategically aligned with business goals. My expertise includes copywriting, editorial oversight, and content strategy", quote: "Judy was our goto person for RFPs.  Her ability to create a cohesive and professional presentation raised the quality of our submissions.", attribute: "  - CEO S&S Strategies", tags: [ { label: "Content", color: "bg-indigo-600" }, { label: "Writing", color: "bg-indigo-600" }, { label: "Communication", color: "bg-blue-600" } ] },
        { title: "Social Media Strategy", description: "As the leader of efforts to bring NASA into the social media space, I spearheaded a project between the Engineering department and Public Affairs to create a LinkedIn account, a Facebook account, and a WordPress blog featuring astronaut morning communications.  I educated engineers on crafting scheduled posts inside WordPress, allowing seamless integration across social media platforms. This approach created synergy between NASA’s digital presence, enhancing SEO rankings while minimizing resource commitment.", quote: "Judy's Communication Degree and Internship with the Public Affairs office while working in Engineering opened social media opportunities that we didn't even know existed.  She introducted our division to the Social Media Arena.", attribute: "  - EA2 Manager, Nasa", tags: [ { label: "Marketing", color: "bg-red-600" }, { label: "Social Media", color: "bg-pink-600" }, { label: "Communication", color: "bg-blue-600" } ] },
        { title: "Software Implementation", description: "I have successfully led software implementation projects, ensuring seamless integration of new technologies into existing business processes. My experience includes coordinating cross-functional teams, managing deployment strategies, and optimizing workflows for maximum efficiency. I have worked on enterprise software rollouts, overseeing system configurations, testing, and post-deployment support to ensure smooth transitions and minimal disruption.", quote: "Judy’s expertise in software implementation ensures successful deployments withminimal risk", attribute: "  - Implementation Lead, Hyster Yale", tags: [ { label: "Implementation", color: "bg-lime-600" }, { label: "Project Management", color: "bg-orange-600" }, { label: "Operations", color: "bg-orange-600" } ] },
        { title: "Integration Consultant", description: "I have provided integration consulting to ensure seamless connectivity between enterprise systems, applications, and third-party solutions. My expertise includes developing integration strategies, troubleshooting compatibility issues, and optimizing system workflows. I have successfully worked on API integrations, data migration, and cloud-based system synchronization to enhance operational efficiency. ", quote: "Judy’s deep understanding of integration challenges ensures smooth system interoperability", attribute: "  – Integration Manager", tags: [ { label: "Integration", color: "bg-green-600" }, { label: "Consulting", color: "bg-fuchsia-600" }, { label: "Cloud", color: "bg-sky-600" } ] },
        { title: "Workforce Management", description: "I have optimized workforce management processes by implementing digital tools and automation solutions to improve resource allocation, scheduling, and productivity tracking. My experience includes developing real-time workforce dashboards, integrating scheduling systems, and streamlining communication between departments to enhance operational efficiency", quote: "Judy’s ability to improve workforce efficiency through digital solutions has been transformative.", attribute: "  – Workforce Solutions Lead", tags: [ { label: "Automation", color: "bg-yellow-600" }, { label: "Management", color: "bg-purple-600" }, { label: "Dashboards", color: "bg-emerald-600" } ] },
        { title: "Management", description: "I have extensive experience in leadership and management, overseeing cross-functional teams to drive project success and operational efficiency. I have managed large-scale digital initiatives, aligning technical solutions with business goals while fostering a collaborative work environment. My leadership approach emphasizes strategic planning, problem-solving, and empowering teams to achieve high-performance outcomes.", quote: "Judy’s leadership and ability to inspire teams have been crucial in delivering successful projects.", attribute: "  - Senior Manager, Nttdata", tags: [ { label: "Leadership", color: "bg-purple-600" }, { label: "Strategy", color: "bg-teal-600" }, { label: "Team Building", color: "bg-purple-600" } ] },
        { title: "Cloud Computing", description: "I have leveraged AWS services to enhance cloud-based customer experience solutions and streamline enterprise applications. I have worked with AWS infrastructure to support scalable, high-performance digital platforms, ensuring reliability and efficiency in cloud environments. My experience includes optimizing cloud storage, integrating AWS analytics tools, and supporting cloud-hosted applications that improve system performance and accessibility. I have also applied cloud best practices to enhance operational workflows and improve overall system scalability. ", quote: "Judy consistently delivers innovative cloud solutions that improve efficiency and performance", attribute: "  - IT Director, Bio-Techne Project", tags: [ { label: "Cloud", color: "bg-sky-600" }, { label: "AWS", color: "bg-sky-600" }, { label: "Infrastructure", color: "bg-sky-600" } ] },
        { title: "Data Visualization", description: "I have designed and implemented interactive Tableau and Power BI dashboards to track customer engagement, system performance, and digital experience metrics, enabling data-driven decision-making. I also created real-time visualization tools to monitor customer journeys and optimize workflows. I developed data-rich web interfaces using D3.js and Highcharts, presenting mission-critical analytics to stakeholders. My work focused on transforming complex datasets into intuitive visual insights, improving efficiency in project tracking and resource allocation.", quote: "Her ability to turn complex data into actionable insights is invaluable.", attribute: "  - Senior Analyst, Mckessen Project", tags: [ { label: "Data", color: "bg-emerald-600" }, { label: "Dashboards", color: "bg-emerald-600" }, { label: "Analytics", color: "bg-emerald-600" } ] },
        { title: "Digital Transformation", description: "I have driven digital transformation by modernizing customer experience platforms and integrating automation, AI-driven insights, and cloud solutions. My work has streamlined operations, improved service delivery, and enhanced business processes through datadriven strategies and user-centered design. I played a key role in transitioning legacy systems to modern web-based solutions, improving accessibility and usability for internal stakeholders.", quote: "Judy is a forward-thinking leader who excels at driving digital evolution.", attribute: "  – VP of Digital Strategy", tags: [ { label: "Transformation", color: "bg-teal-600" }, { label: "Strategy", color: "bg-teal-600" }, { label: "Innovation", color: "bg-yellow-600" } ] },
        { title: "Process Automation", description: "I implemented AI-driven automation and RPA solutions to optimize customer service workflows, reducing response times and streamlining interactions. I developed automated data processing and reporting systems using Power BI and Tableau, integrating real-time insights for faster decision-making. My efforts improved efficiency by reducing manual workload and ensuring seamless digital workflows.", quote: "Her automation initiatives have significantly increased productivity and efficiency with our legacy software", attribute: "  - CIO, S&S Healthcare Strategies", tags: [ { label: "Automation", color: "bg-yellow-600" }, { label: "AI", color: "bg-yellow-600" }, { label: "Efficiency", color: "bg-yellow-600" } ] },
        { title: "Front-End Development", description: "I am proficient in Vue & React development to help create and enhance customer experience platforms, ensuring seamless and dynamic user interactions. I have built and optimized interactive web interfaces to improve usability.  I specialize in integrating reusable components into enterprise applications to ensure compatibility with backend services and APIs. My work is focused on performance optimization and responsive design to improve scalability and maintainability.", quote: "She consistently delivers high-quality, responsive interfaces that enhance user experience.", attribute: "  - Engagement Lead, Hyster-Yale Project", tags: [ { label: "Development", color: "bg-green-600" }, { label: "UI/UX", color: "bg-rose-600" }, { label: "Vue", color: "bg-green-600" } ] },
        { title: "UI Design", description: "I have led UI design efforts to create intuitive and accessible digital experiences. I designed interactive web interfaces that prioritized usability, accessibility, and performance, leveraging React and front-end frameworks. I developed data-driven UI components to enhance decision-making and usability for scientists and engineers, applying usercentered design principles to refine system interfaces.", quote: "Judy's eye for design and usability ensures seamless digital interactions.", attribute: "  - CX Director, Nttdata", tags: [ { label: "Design", color: "bg-rose-600" }, { label: "Accessibility", color: "bg-rose-600" }, { label: "UI/UX", color: "bg-rose-600" } ] },
        { title: "Trusted CRM", description: "I have applied my expertise in CRM solutions to improve customer relationship management by streamlining data accessibility, automating engagement workflows, and enhancing customer insights. I have worked on integrating CRM platforms with enterprise applications, ensuring seamless synchronization of customer data across multiple channels. By optimizing CRM workflows, I have helped organizations improve customer retention, personalize interactions, and drive data-driven decision-making.", quote: "Judy’s knowledge of CRM systems has greatly improved our ability to engage and retain customers.", attribute: "  - CRM Department Lead, Nttdata", tags: [ { label: "CRM", color: "bg-cyan-600" }, { label: "Customer Engagement", color: "bg-cyan-600" }, { label: "Automation", color: "bg-yellow-600" } ] }
      ]
    };
  },
  computed: {
  filteredSkills() {
    return this.skills.filter(skill => {
      const matchesSearch = skill.title.toLowerCase().includes(this.search.toLowerCase()) ||
                            skill.description.toLowerCase().includes(this.search.toLowerCase());
      const matchesTag = this.filterTag === "" || skill.tags.some(tag => tag.label === this.filterTag);
      return matchesSearch && matchesTag;
    });
  },
  allTags() {
    const tagSet = new Set();
    this.skills.forEach(skill => {
      skill.tags.forEach(tag => tagSet.add(tag.label));
    });
    return [...tagSet].sort();
  }
}

};
</script>
  