<template>
  <div>
    <!-- alert -->
    <Alert
      v-if="Object.keys(alert).length !== 0"
      :type="alert.type"
      :message="alert.message"
    />
    <!-- /alert -->

    <!-- form -->
    <ValidationObserver ref="form" tag="div">
      <form class="w-full" @submit.prevent="submit">
        <!-- name -->
        <div class="flex flex-wrap -mx-3 mb-6">
          <!-- first name -->
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="first-name"
            >
              First Name
            </label>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="First Name"
              tag="div"
            >
              <input
                id="first-name"
                v-model="form.firstName"
                :class="[
                  'appearance-none block w-full bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600 transition duration-200 ease-in-out',
                  errors[0] ? 'border-red-500' : 'border-gray-200',
                ]"
                type="text"
                placeholder="Morteza"
              />
              <p v-if="errors[0]" class="text-red-500 text-xs italic">
                {{ errors[0] }}
              </p>
            </ValidationProvider>
          </div>
          <!-- /first name -->

          <!-- last name -->
          <div class="w-full md:w-1/2 px-3">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="last-name"
            >
              Last Name
            </label>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="Last Name"
              tag="div"
            >
              <input
                id="last-name"
                v-model="form.lastName"
                :class="[
                  'appearance-none block w-full bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600 transition duration-200 ease-in-out',
                  errors[0] ? 'border-red-500' : 'border-gray-200',
                ]"
                type="text"
                placeholder="Sabihi"
              />
              <p v-if="errors[0]" class="text-red-500 text-xs italic">
                {{ errors[0] }}
              </p>
            </ValidationProvider>
          </div>
          <!-- /last name -->
        </div>
        <!-- /name -->

        <!-- email -->
        <div class="-mx-3 mb-6">
          <div class="px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="email"
            >
              Email
            </label>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required|email"
              name="Email"
              tag="div"
            >
              <input
                id="email"
                v-model="form.email"
                :class="[
                  'appearance-none block w-full bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600 transition duration-200 ease-in-out',
                  errors[0] ? 'border-red-500' : 'border-gray-200',
                ]"
                type="text"
                placeholder="mortezasabihi87@gmail.com"
              />
              <p v-if="errors[0]" class="text-red-500 text-xs italic">
                {{ errors[0] }}
              </p>
            </ValidationProvider>
          </div>
        </div>
        <!-- /email -->

        <!-- message -->
        <div class="-mx-3 mb-6">
          <div class="px-3 mb-6 md:mb-0">
            <label
              class="
                block
                uppercase
                tracking-wide
                text-gray-700 text-xs
                font-bold
                mb-2
              "
              for="message"
            >
              Message
            </label>
            <ValidationProvider
              v-slot="{ errors }"
              rules="required"
              name="Message"
              tag="div"
            >
              <textarea
                id="message"
                v-model="form.message"
                :class="[
                  'appearance-none resize-none block w-full bg-gray-200 text-gray-700 border-2 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600 transition duration-200 ease-in-out',
                  errors[0] ? 'border-red-500' : 'border-gray-200',
                ]"
                placeholder="Hello morteza sabihi ..."
                rows="6"
              ></textarea>
              <p v-if="errors[0]" class="text-red-500 text-xs italic">
                {{ errors[0] }}
              </p>
            </ValidationProvider>
          </div>
        </div>
        <!-- /message -->

        <!-- recaptcha -->
        <div class="mb-6">
          <VueRecaptcha
            :sitekey="siteKey"
            :load-recaptcha-script="true"
            @verify="isSubmitable = true"
          />
        </div>
        <!-- /recaptcha -->

        <button
          :class="[
            'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out',
            { 'opacity-50 cursor-not-allowed': !isSubmitable },
          ]"
          type="submit"
        >
          <span>Send Message</span>
          <font-awesome-icon v-if="loading" icon="spinner" spin class="ml-2" />
        </button>
      </form>
    </ValidationObserver>
    <!-- /form -->
  </div>
</template>

<script>
import axios from 'axios'
import VueRecaptcha from 'vue-recaptcha'

export default {
  name: 'Form',
  components: {
    VueRecaptcha,
  },
  data() {
    return {
      siteKey: process.env.RECAPTCHA_SITE_KEY,
      isSubmitable: false,
      loading: false,
      alert: {},
      form: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    /**
     * Validate form
     * @function
     * @returns { boolean }
     */
    validateForm() {
      return new Promise((resolve, reject) => {
        this.$refs.form
          .validate()
          // eslint-disable-next-line prefer-promise-reject-errors
          .then((success) => (success ? resolve() : reject()))
      })
    },
    /**
     * Submit
     * @function
     * @returns { void }
     */
    submit() {
      this.isSubmitable &&
        this.validateForm().then(() => this.submitForm(this.form))
    },
    /**
     * Submit form
     * @function
     * @returns { void }
     */
    async submitForm() {
      this.loading = true

      const { firstName, lastName, email, message } = this.form

      const DATA = {
        service_id: process.env.EMAILJS_SERVICE_ID,
        template_id: process.env.EMAILJS_TEMPLATE_ID,
        user_id: process.env.EMAILJS_USER_ID,
        template_params: {
          from_name: `${firstName} ${lastName}`,
          message_html: `${message}`,
          email,
        },
      }

      try {
        await axios.post('https://api.emailjs.com/api/v1.0/email/send', DATA)
        this.alert = {
          type: 'success',
          message: 'Your message has been successfully sent.',
        }
        this.resetForm()
      } catch (error) {
        this.alert = {
          type: 'danger',
          message:
            'Something went wrong, You can stay in touch with me on social media',
        }
      }

      this.loading = false
      setTimeout(() => (this.alert = {}), 10000)
    },
    /**
     * Reset form
     * @function
     * @returns { void }
     */
    resetForm() {
      Object.keys(this.form).forEach((key) => (this.form[key] = ''))
      this.$nextTick(() => this.$refs.form.reset())
    },
  },
}
</script>
