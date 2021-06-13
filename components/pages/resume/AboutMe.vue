<template>
  <div class="mb-8">
    <!-- title -->
    <h3 class="text-2xl font-bold border-b-2 border-black pb-2 mb-4">
      About Me
    </h3>
    <!-- /title -->

    <!-- bio -->
    <p class="font-light tracking-wider mb-8">
      {{ github.bio }}
    </p>
    <!-- /bio -->

    <!-- personal info -->
    <ul>
      <li class="flex items-center">
        <strong class="w-32 uppercase">Name:</strong>
        <span class="tracking-wide">{{ github.name }}</span>
      </li>
      <li class="flex items-center">
        <strong class="w-32 uppercase">Age:</strong>
        <span class="tracking-wide">{{ calculateAge }}</span>
      </li>
      <li class="flex items-center">
        <strong class="w-32 uppercase">Location:</strong>
        <span class="tracking-wide">{{ github.location }}</span>
      </li>
    </ul>
    <!-- /personal info -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AboutMe',
  computed: {
    ...mapGetters({
      github: 'getGithub',
    }),
    calculateAge() {
      const today = new Date()
      const birthDate = new Date('2001-03-27')
      let age = today.getFullYear() - birthDate.getFullYear()
      const m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    },
  },
}
</script>
