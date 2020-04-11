<template>
  <v-toolbar color='rgb(255, 0, 0, 0)' flat height='130px'>
    <router-link class='logo' to='/'>
      <img class='logo-img' src='~@/assets/img/small_axe_white.png' />
      <span class='logo-text'>
        <span class='d-none d-lg-block'>Ax workflow</span>
        <span class='d-lg-none'>Ax</span>
      </span>
    </router-link>

    <v-spacer></v-spacer>

    <div class='big-menu d-none d-md-block'>
      <v-menu offset-y>
        <template v-slot:activator='{ on }'>
          <a class='header-link' href='#' v-on='on'>
            Product
            <i class='fas fa-chevron-down toolbar-ico'></i>
          </a>
        </template>

        <v-list>
          <v-list-item :to='{ path: "/", hash: "#features" }' v-scroll-to='"#features"'>
            <v-list-item-title>Features</v-list-item-title>
          </v-list-item>
          <v-list-item to='/faq'>
            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item>
          <v-list-item to='/enterprise'>
            <v-list-item-title>For Enterprise</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- <a class='header-link' href='#'>Use cases</a> -->

      <v-menu offset-y>
        <template v-slot:activator='{ on }'>
          <a class='header-link' href='#' v-on='on'>
            Community
            <i class='fas fa-chevron-down toolbar-ico'></i>
          </a>
        </template>

        <v-list>
          <v-list-item to='/community'>
            <v-list-item-title>Get involved</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click.prevent='openInTab("https://medium.com/@enf644")'
            href='https://medium.com/@enf644'
          >
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item>
          <v-list-item to='/support'>
            <v-list-item-title>Support</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <a
        @click.prevent='openInTab("https://github.com/enf644/ax")'
        class='header-link'
        href='https://github.com/enf644/ax'
      >Documentation</a>

      <v-btn
        @click.prevent='openInTab("https://github.com/enf644/ax#getting-started")'
        class='header-btn'
        href='https://github.com/enf644/ax#getting-started'
      >Get Started</v-btn>
    </div>

    <div class='mobile-menu d-md-none'>
      <v-menu>
        <template v-slot:activator='{ on }'>
          <v-btn fab v-on='on'>
            <i class='fas fa-bars'></i>
          </v-btn>
        </template>

        <v-list>
          <v-list-item :to='{ path: "/", hash: "#features" }' v-scroll-to='"#features"'>
            <v-list-item-title>Features</v-list-item-title>
          </v-list-item>
          <v-list-item to='/faq'>
            <v-list-item-title>FAQ</v-list-item-title>
          </v-list-item>
          <v-list-item to='/enterprise'>
            <v-list-item-title>For Enterprise</v-list-item-title>
          </v-list-item>
          <v-list-item to='/support'>
            <v-list-item-title>Support</v-list-item-title>
          </v-list-item>
          <v-list-item
            @click.prevent='openInTab("https://github.com/enf644/ax")'
            href='https://github.com/enf644/ax'
          >
            <v-list-item-title>Documentation</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-toolbar>
</template>

<script>
// import CatalogItem from '@/components/CatalogItem.vue';

export default {
  name: "Toolbar",
  components: {},
  data: () => ({
    guid: null
  }),
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    openInTab(url) {
      Object.assign(document.createElement("a"), {
        target: "_blank",
        href: url
      }).click();
    }
  }
};
</script>

<style scoped>
.logo {
  margin-left: 5%;
  display: flex;
  flex-direction: row;
  text-decoration: none;
}

.logo-img {
  height: 45px;
}

.logo-text {
  color: white;
  font-size: 30px;
  margin-left: 20px;
}

.toolbar-ico {
  margin-left: 5px;
}

.header-link {
  color: white;
  text-decoration: none;
  margin: 0px 30px 0px 30px;
}

.header-btn {
  margin-right: 5%;
  margin-left: 30px;
  font-weight: 400;
}

.big-menu {
  margin-right: 5%;
  white-space: nowrap;
}

.mobile-menu {
  margin-right: 5%;
}
</style>