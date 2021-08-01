<template>
  <div class="mb-8">
    <!-- title -->
    <h3 class="text-2xl font-bold border-b-2 border-black pb-2 mb-4">
      Experiences
    </h3>
    <!-- /title -->

    <!-- experiences -->
    <PageResumeExperiencesItem
      v-for="(experience, index) in experiences.slice().reverse()"
      :key="index"
      :company="experience.company"
      :date="experience.date"
      :type="experience.type"
    >
      {{ experience.description }}
    </PageResumeExperiencesItem>
    <!-- /experiences -->
  </div>
</template>

<script>
export default {
  name: 'Experiences',
  data() {
    return {
      experiences: [
        {
          company: 'kamelbarchasb',
          date: 'JUN 2019 - NOV 2019',
          type: 'Full Time',
          description: `
          Actually kamel barchasb is a factory in the printing labels industry. I
      joined the IT team for developing an ERP dashboard. It was my first job as
      a front-end developer with Vue js framework with zero experience in real
      work. I became familiar with teamwork. That was a good experience for me.
          `,
        },
        {
          company: 'Apochi.com - Your Travel Gateway To Iran',
          date: 'DEC 2019 - JUL 2020',
          type: 'Part Time',
          description: `
      Apochi is a travel company for foreign travelers who travel to iran. I
      joined the IT team as a front-end developer. I developed apochi.com from
      scratch with Nuxt js framework. I converted XD designs to Vue js
      components for desktop & mobile platforms.
          `,
        },
        {
          company: '7even Tech Team',
          date: 'DEC 2019 - MAY 2020',
          type: 'Full Time',
          description: `
        I joined the 7even tech team as a front-end developer. We developed the
      project with nuxt js. The project was so complex in some pages. For
      example in one page we developed some components & logics that users can
      build customized Landing pages with no coding, just with drag & drop
      items, filling inputs and selecting color theme. It was so amazing to me.
          `,
        },
        {
          company: 'Sabacell',
          date: 'JULY 2021 - PRESENT',
          type: 'Full Time',
          description: `Front-end Developer at Sabacell`,
        },
      ],
    }
  },
}
</script>
