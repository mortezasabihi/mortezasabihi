<template>
  <div
    :class="[
      'flex items-center text-white text-sm font-bold px-4 py-3 mb-6',
      backgroundColor,
    ]"
    role="alert"
  >
    <!-- icon -->
    <font-awesome-icon
      :icon="['fas', icon]"
      class="fill-current w-4 h-4 mr-2"
    />
    <!-- /icon -->

    <!-- message -->
    <p>{{ message }}</p>
    <!-- /message -->
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    /**
     * Alert type
     * @type { string }
     */
    type: {
      required: true,
      type: String,
      validator: (prop) =>
        ['warning', 'danger', 'success', 'primary'].includes(prop),
    },
    /**
     * Alert message
     * @type { string }
     */
    message: {
      required: true,
      type: String,
    },
  },
  computed: {
    /**
     * Alert background color
     * @function
     * @returns { string }
     */
    backgroundColor() {
      const CLASSES = {
        warning: 'yellow',
        danger: 'red',
        success: 'green',
        primary: 'blue',
      }

      return `bg-${CLASSES[this.type]}-500`
    },
    /**
     * Alert icon
     * @function
     * @type { string }
     */
    icon() {
      const ICONS = {
        warning: 'exclamation',
        danger: 'exclamation-triangle',
        success: 'check',
        primary: 'info',
      }

      return ICONS[this.type]
    },
  },
}
</script>
