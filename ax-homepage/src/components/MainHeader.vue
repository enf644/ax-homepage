<template>
  <div>
    <div class='main-header'>
      <Toolbar></Toolbar>

      <div class='shout-1'>
        Open source, no-code
        <br />
        <b>workflow automation</b>
      </div>

      <div class='shout-2'>Ax makes workflow automation less annoying</div>
      <div class='shout-2'>
        <v-btn
          @click.prevent='openInTab("https://github.com/enf644/ax")'
          color='success'
          href='https://github.com/enf644/ax#getting-started'
        >Get Started</v-btn>
        <v-btn class='ml-2' to='/demo'>Try live demo</v-btn>
      </div>

      <div class='d-none d-lg-block'>
        <transition enter-active-class='animated tada'>
          <img @load='gifLoaded' class='demo' src='~@/assets/img/demo2.gif' v-show='demoIsPlaying' />
        </transition>
      </div>
    </div>

    <div class='grey-logos-row'>
      <a href='https://github.com/enf644'>
        <i class='fab fa-github grey-logo'></i>
      </a>
      <router-link to='/support'>
        <i class='fab fa-stack-overflow grey-logo'></i>
      </router-link>
      <a @click.prevent='openInTab("https://medium.com/@enf644")' href='https://medium.com/@enf644'>
        <i class='fab fa-medium grey-logo'></i>
      </a>
      <i @click='openNotYet' class='fab fa-slack-hash grey-logo'></i>
      <i @click='openNotYet' class='fab fa-patreon grey-logo'></i>
    </div>

    <div
      class='d-none d-lg-block'
      data-termynal
      data-ty-line-delay='700'
      data-ty-type-delay='40'
      id='termynal'
    >
      <span data-ty='input'>pip3 install ax</span>
      <span data-ty='progress'></span>
      <span data-ty>Successfully installed ax</span>
      <span data-ty='input'>ax --host=127.0.0.1 --port=8080</span>
      <span data-ty>
        <div>⛏️ | Ax is running with 1 workers</div>
        <div>
          <nobr>⛏️ | Admin is avalible - http://127.0.0.1:8080/admin/signin</nobr>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import Termynal from "@/termynal";
import Toolbar from "@/components/Toolbar.vue";

export default {
  name: "MainHeader",
  components: { Toolbar },
  data: () => ({
    termynal: null,
    demoIsPlaying: false
  }),
  computed: {},
  watch: {},
  mounted() {
    this.termynal = new Termynal("#termynal");
    setTimeout(() => {
      this.demoIsPlaying = true;
    }, 12000);
  },
  methods: {
    gifLoaded() {},
    openInTab(url) {
      Object.assign(document.createElement("a"), {
        target: "_blank",
        href: url
      }).click();
    },
    openNotYet() {
      this.$modal.show("not-yet");
    }
  }
};
</script>

<style scoped>
.main-header {
  height: 500px;
  color: white;
  position: relative;
  /* background: url(~@/assets/img/bg_shadow-light_community.png),
    url(~@/assets/img/bg_pattern.png),
    linear-gradient(315deg, #56ccf2 0, #3a95ee 73%, #2f80ed 100%); */

  background: url(~@/assets/img/bg_shadow-light_community.png),
    url(~@/assets/img/bg_pattern.png),
    linear-gradient(315deg, #a7dbd8 0, #3a95ee 73%, #69d2e7 100%);

  /* background: url(~@/assets/img/bg_shadow-light_community.png),
    url(~@/assets/img/bg_pattern.png),
    linear-gradient(315deg, #a7dbd8 0, #00a8c6 73%, #40c0cb 100%); */

  background-size: contain, 75%;
  background-position: top left, top left;
}

.shout {
  font-size: 40px;
}

.shout-1 {
  margin-left: 5%;
  margin-top: 50px;
  font-size: 40px;
  line-height: 42px;
}

.shout-2 {
  margin-left: 5%;
  margin-top: 30px;
  font-size: 18px;
}

.demo {
  position: absolute;
  right: 5%;
  top: 143px;
  border-radius: 5px;
  z-index: 1;
}

.grey-logos-row {
  display: flex;
  min-height: 50px;
  background: #e0e4cc;
  flex-direction: row;
}

.grey-logo {
  color: #666666;
  font-size: 30px;
  margin: 15px 30px;
  transition: 50ms;
  cursor: pointer;
}

.grey-logo:hover {
  color: #000;
}

#termynal {
  position: absolute;
  right: 8%;
  top: 150px;
}
</style>