<template>
  <main id="presentation">
    <div class="progress">
      <!-- TODO: Render segmented progress bar for presentation -->
    </div>
    <vue-amp-shadow :src="currentSlideUrl"></vue-amp-shadow>
  </main>
</template>

<script>
import VueAmpShadow from 'vue-amp-shadow';

export default {
  name: 'presentation',
  components: {
    'vue-amp-shadow': VueAmpShadow,
  },
  data() {
    return {
      amendmendIds: [],
      amendmentIndex: 0,
    };
  },
  computed: {
    currentSlideUrl() {
      const amendment = amendmentIds[amendmentIndex];
      return amendment
        ? `https://willie-bill-of-rights.firebaseapp.com/amp/amendment/${amendment.id}`
        : '';
    },
  },
  methods: {
    advance() {
      // TODO: Go to next amendment
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
