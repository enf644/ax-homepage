<template>
  <div>
    <Header></Header>
    <div class='content'>
      <h1>Community</h1>
      <div>
        Ax just recently launched. You can become one of the first community members to influence the development of Ax.
        <br />
        <br />If you are looking for support, please visit
        <router-link to='/support'>support page</router-link>.
        <br />
        <br />For general questions and discussions, you can either use
        <a
          href='mailto:enf644@ax-workflow.com'
          target='_blank'
        >direct email</a> or
        <a href='https://spectrum.chat/ax-workflow' target='_blank'>Spectrum community</a>
        .
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Community",
  components: { Header },
  data: () => ({
    guid: null
  }),
  computed: {},
  watch: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>