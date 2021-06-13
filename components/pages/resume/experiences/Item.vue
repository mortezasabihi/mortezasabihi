<template>
  <div
    class="
      flex
      items-center
      mb-4
      transform
      hover:scale-105
      transition
      duration-300
      ease-in-out
    "
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
  >
    <!-- date -->
    <div
      :class="[
        `w-24
        h-24
        rounded-full
        items-center
        justify-center
        text-white
        from-green-400
        to-green-500
        mr-6
        hidden
        sm:flex
        md:flex
        lg:flex
        xl:flex
        flex-col`,
        hovered ? 'bg-gradient-to-r' : 'bg-gradient-to-l',
      ]"
    >
      <div
        v-for="(item, index) in splitedDate"
        :key="index"
        :class="index === 0 && 'mb-2'"
      >
        {{ item }}
      </div>
    </div>
    <!-- /date -->

    <div class="flex-1">
      <!-- company title -->
      <div class="tracking-wider mb-2">
        {{ company }} - <span class="text-xs text-gray-700">{{ type }}</span>
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
        class="
          bg-green-400
          inline-block
          sm:hidden
          md:hidden
          lg:hidden
          xl:hidden
          py-1
          px-2
          text-xs
          rounded-lg
          mt-2
        "
      >
        {{ date }}
      </span>
      <!-- /date -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceItem',
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
    /**
     * Type
     * @type { string }
     */
    type: {
      required: true,
      type: String,
      validator: (val) => ['Part Time', 'Full Time'].includes(val),
    },
  },
  data() {
    return {
      hovered: false,
    }
  },
  computed: {
    /**
     * Splited date
     * @returns { array }
     */
    splitedDate() {
      return this.date.split('-')
    },
  },
}
</script>
