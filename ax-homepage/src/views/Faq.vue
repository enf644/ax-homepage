<template>
  <div>
    <Header></Header>
    <div class='content'>
      <h1>FAQ</h1>
      <div>
        <b>Why do you call Ax-workflow a "No-code" product if complex operations require Python, SQL, and HTML knowledge?</b>
        <br />Most functionality available without any code. Copy-pasting a &lt;ax-form> tag is not a HTML knowledge. Using Python and SQL is totally optional.
        <br />
        <br />

        <b>Can I use Ax-workflow in production? Is it stable?</b>
        <br />Ax-workflow currently in Beta and bugs are possible. Still, most users are running Ax in production.
        Note, that if you are planning to use Ax in business-critical applications we strongly suggest subscribing to an enterprise support plan.
        <br />
        <br />
        <b>Can I use Ax-workflow to build my own Saas product?</b>
        <br />Yes, you can. Please support Ax-workflow if you do so.
        <br />
        <br />If you have any other questions regarding Ax-workflow, please
        <router-link to='community'>visit the community page</router-link>
.
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Enterprise",
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