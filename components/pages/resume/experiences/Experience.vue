<template>
  <div class="flex items-center mb-4">
    <!-- date -->
    <div
      class="w-24 h-24 bg-green-400 rounded-full flex items-center justify-center text-white mr-6 hidden sm:flex md:flex lg:flex xl:flex"
    >
      {{ date }}
    </div>
    <!-- /date -->

    <div>
      <!-- company title -->
      <div class="tracking-wider mb-2">
        {{ company }} - <span class="text-xs text-gray-700">Full Time</span>
      </div>
      <!-- /company title -->

      <div>
        <!-- description -->
        <p class="font-light tracking-wider text-sm">
          <slot></slot>
        </p>
        <!-- /description -->
      </div>

      <!-- date -->
      <span
        class="bg-green-400 inline-block sm:hidden md:hidden lg:hidden xl:hidden py-1 px-2 text-xs rounded-lg mt-2"
      >
        {{ date }}
      </span>
      <!-- /date -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Experience',
  props: {
    /**
     * Company
     * @type { string }
     */
    company: {
      required: true,
      type: String,
    },
    /**
     * Date
     * @type { string }
     */
    date: {
      required: true,
      type: String,
    },
  },
}
</script>
