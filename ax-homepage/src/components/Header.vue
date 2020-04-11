<template>
  <div class='header'>
    <Toolbar></Toolbar>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  name: "Header",
  components: { Toolbar },
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
.header {
  height: 150px;
  color: white;
  position: relative;

  background: url(~@/assets/img/bg_shadow-light_community.png),
    url(~@/assets/img/bg_pattern.png),
    linear-gradient(315deg, #a7dbd8 0, #3a95ee 73%, #69d2e7 100%);

  background-size: contain, 75%;
  background-position: top left, top left;
}
</style>