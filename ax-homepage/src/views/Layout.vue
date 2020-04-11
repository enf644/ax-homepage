<template>
  <v-app>
    <transition enter-active-class='animated fadeIn faster' name='fade'>
      <div class='wrapper'>
        <router-view></router-view>
      </div>
    </transition>
    <div class='footer'>
      <div class='footer-row-1 d-none d-md-block'>
        <img src='~@/assets/img/small_axe_white.png' />
      </div>
      <div class='footer-row'>
        <b>Product</b>
        <ul>
          <li>
            <router-link :to='{ path: "/", hash: "#features" }' v-scroll-to='"#features"'>Features</router-link>
          </li>
          <li>
            <router-link to='/enterprise'>For Enterprise</router-link>
          </li>
          <li>
            <router-link to='/faq'>FAQ</router-link>
          </li>
        </ul>
      </div>
      <div class='footer-row'>
        <b>Developers</b>
        <ul>
          <li>
            <a href='https://github.com/enf644/ax#getting-started'>How to install Ax</a>
          </li>
          <li>
            <a href='https://github.com/enf644/ax'>Documentation</a>
          </li>
          <li>
            <router-link to='/community'>Community</router-link>
          </li>
          <li>
            <router-link to='/support'>Support</router-link>
          </li>
        </ul>
      </div>
      <div class='footer-row'>
        <b>About</b>
        <ul>
          <li>
            <a _target='_blank' href='https://medium.com/@enf644'>Blog</a>
          </li>
          <li>
            <a href='mailto:enf644@ax-workflow.com' target='_blank'>Contacts</a>
          </li>
        </ul>
      </div>
    </div>
    <modal name='not-yet'>
      <div class='not-yet'>
        <i class='fas fa-tractor'></i>
        <div>Not avalible yet</div>
      </div>
    </modal>
  </v-app>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  height: 100%;
}
.footer {
  background: url(~@/assets/img/bg_pattern.png),
    linear-gradient(315deg, #10192a 0, #161d29 100%);
  background-size: contain;
  color: #fff;
  padding: 5% 15px;
  display: flex;
}

.footer-row-1 {
  flex-grow: 2;
  text-align: center;
}

.footer-row-1 img {
  height: 60px;
}

.footer-row {
  padding: 0px 15px;
  flex-grow: 1;
}

.footer-row li {
  display: block;
}

.footer-row ul {
  display: contents;
}

.footer-row a {
  color: white;
  text-decoration: none;
}

.not-yet {
  padding: 40px;
  text-align: center;
  font-size: 24px;
}

.not-yet i {
  font-size: 40px;
}
</style>