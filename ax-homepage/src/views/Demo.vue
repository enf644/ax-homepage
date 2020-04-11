<template>
  <div>
    <Header></Header>
    <div class='content'>
      <ax-form db_name='AxDemo'></ax-form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Demo",
  components: { Header },
  data: () => ({
    guid: null,
    demoIsShown: true
  }),
  computed: {},
  watch: {},
  mounted() {
    // let axScript = document.createElement("script");
    // axScript.id = "ax_draw_script";
    // axScript.src = "http://84.201.167.104:8080/api/draw_ax";
    // // axScript.src = "http://127.0.0.1/api/draw_ax";
    // axScript.onload = this.showForm;
    // document.head.appendChild(axScript);
  },
  methods: {
    showForm() {
      // console.log("show form");
      // setTimeout(() => {
      //   this.demoIsShown = true;
      // }, 300);
    }
  }
};
</script>

<style scoped>
</style>