<template>
  <icon-lottie :loop="true" :json="json" />
</template>

<script>
import IconLottie from './Lottie'
import json from '~/assets/json/icons/Globe.json'

export default {
  components: {
    IconLottie,
  },

  data() {
    return {
      json,
    }
  },
}
</script>