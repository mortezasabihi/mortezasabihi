<template>
  <div
    :style="{ backgroundColor: color }"
    :class="[
      'w-20 h-20 flex flex-col items-center justify-center transform hover:scale-125 transition mx-auto',
      color === '#000000' && 'text-white',
    ]"
  >
    <div class="w-8 h-8">
      <slot />
    </div>

    <div class="font-bold text-sm">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillItem',
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
}
</script>
