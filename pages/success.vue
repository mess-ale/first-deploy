<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-md rounded-lg p-8 text-center">
      <!-- Success Icon -->
      <!-- <div class="flex items-center justify-center w-20 h-20 mx-auto bg-bleu-100 rounded-full mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-blue-600"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </div> -->
      <div class="success-img">
        <img src="/PngItem_3416354.png" alt="success image" />
      </div>
      <!-- Success Message -->
      <h1 class="text-2xl font-bold text-primary mb-4">Submission Successful!</h1>
      <p class="text-primary mb-12">
        Thank you for completing the form. Your submission has been received successfully. We’ll get back to you soon.
      </p>

      <!-- Back Button -->
      <nuxt-link to="/" class="etcare-button p xxxs:px-4 xxxs:py-2 md:px-10 md:py-2 xxxs:text-xs md:text-base">
        Back to Home
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

useHead({
  title: 'Success - Etcare SACCOs Ltd',
});
const title = "Success Page";
</script>

<style scoped>
.success-img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1.5rem;
}

img {
  width: 5rem;
  height: 5rem;
}
</style>
