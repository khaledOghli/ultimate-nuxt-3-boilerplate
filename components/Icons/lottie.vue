<template>
  <div ref="lavContainer" 
  :style="{
    overflow: 'hidden',
  }" 
  @mouseenter="playAnimation" @focus="playAnimation" @blur="stopAnimation" @mouseleave="stopAnimation" 
  
  />
</template>

<script>
import lottie from 'lottie-web'

export default {
  props: {
    // This will be the icon json file
    json: {
      type: Object,
      required: true,
    },
    loop: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    // When the component is mounted, lottie will do it's work creating a svg and renders the icon.
    this.anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: 'svg',
      animationData: this.json,
      autoplay: false, // Prevents playing on load
      loop: this.loop, // Option whether you want to keep playing
    })
  },

  methods: {
    playAnimation() {
      this.anim.play(); // Starts animation
    },
    stopAnimation() {
      this.anim.stop() // Stops animation
    },
  },
}
</script>