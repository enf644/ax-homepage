<template>
  <div>
    <Header></Header>
    <div class='content'>
      <h1>For Enterprise</h1>
      <div>
        A paid support plan is available for enterprise users.
        <br />
        <br />
        <b>The plan provides a list of benefits:</b>
        <ul>
          <li>Live support via Email and Skype</li>
          <li>Issues created by enterprise users are addressed first</li>
          <li>Ax development Roadmap is created from enterprise users needs</li>
          <li>Paid plan support development of Ax workflow</li>
        </ul>
        <br />
        <br />Price - 10$ per user per month. (10 users minimum)
        <br />For more information, please
        <a href='mailto:enf644@ax-workflow.com' target='_blank'>contact the team via email</a>
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