<template>
  <section class="p-12 bg-white rounded-lg shadow-2xl mb-12">
    <div class="flex flex-wrap items-center">
      <div
        class="
          w-full
          lg:w-4/12
          md:w-4/12
          mb-16
          sm:mb-16
          md:mb-0
          lg:mb-0
          xl:mb-0
          px-4
        "
      >
        <!-- avatar -->
        <img
          :src="github.avatar_url"
          alt="morteza-sabihi"
          class="mx-auto w-56 sm:w-64 md:w-full lg:w-full rounded-full"
        />
        <!-- /avatar -->
      </div>
      <div class="w-full lg:w-8/12 md:w-8/12 mb-5 px-4">
        <!-- title -->
        <h2 class="text-2xl mb-4 font-bold tracking-wider">
          I'm Front-end developer.
        </h2>
        <!-- /title -->

        <!-- bio -->
        <p class="leading-relaxed text-gray-900 tracking-wider font-light">
          {{ github.bio }}
        </p>
        <!-- /bio -->
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Hero',
  computed: {
    ...mapGetters({
      github: 'getGithub',
    }),
  },
}
</script>
