<template>
  <div>
    <Header></Header>
    <div class='content'>
      <h1>Support</h1>
      <div>
        Currently, support is available through GitHub issues.
        <br />
        <br />I really would like to create a tag at StackOverflow, but my rating is not enough.
        <br />If someone having 1500+ rating on StackOverflow is willing to help me creating [ax-workflow] tag,
        <a href='https://spectrum.chat/ax-workflow' target='_blank'>please contact team</a>.
        <br />
        <br />Paid support plan is available for enterprise users. Please
        <a href='/enterprise'>click here</a>
 for more information.
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Support",
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