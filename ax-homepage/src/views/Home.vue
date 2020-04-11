<template>
  <div>
    <MainHeader></MainHeader>

    <div class='cont-2'>
      <div class='col-2'>
        <h2>What is Ax</h2>
        <ul>
          <li>The Ax is a software for building and running workflow applications.</li>
          <li>
            It is a python program distributed by
            <a href='#'>PyPi</a> package manager.
          </li>
          <li>
            It is self-hosted and uses super-fast
            <a href='#'>Sanic</a> framework.
          </li>
        </ul>
      </div>
      <div class='col-2'>
        <h2>How does it work</h2>
        <ul>
          <li>Create a form with a constructor.</li>
          <li>Form records have a lifecycle that is defined by a set of states.</li>
          <li>States are connected with each other with "Actions" forming a Finite State Machine.</li>
          <li>Users can have different field permissions for each state.</li>
          <li>When "Action" is performed and record state is changed an arbitrary python code is executed.</li>
          <li>This can be used to send emails, call APIs, move robots, launch rockets, etc.</li>
          <!-- <li>Forms can have 1to1 and 1toM fields to reference each other.</li>
          <li>Forms can be grouped into Ax application, packed and published to Application Marketplace.</li>-->
        </ul>
      </div>
      <div class='col-2'>
        <h2>Use cases</h2>
        <ul>
          <li>
            Workflow automation
            <ul>
              <li>Example - Facility Access Request, RFC request, Estimation queries, Asset Purchase, New Hire Request, Time Off Request, Purchase Request, Job Offer, etc</li>
            </ul>
          </li>
          <li>
            Content management
            <span class='misc-grey'>[Headless CMS]</span>
          </li>
          <li>CRM</li>
          <li>ECM</li>
          <li>HelpDesk</li>
          <li>Expert systems</li>
          <li>Educational courses</li>
        </ul>
      </div>
    </div>

    <div class='banner'>
      <div class>
        <span id='typed_element'></span>
        <b>workflow automation</b>
      </div>
    </div>

    <div class='features' id='features'>
      <div class='feat'>
        <div class='feat-header'>
          <i class='fab fa-wpforms'></i>
          <b>Forms</b>
        </div>
        <ul>
          <li>35 field types currently available</li>
          <li>1toМ and МtoM relation field types avalible</li>
          <li>Guide for building custom field types is avalible</li>
          <li>Forms are responsive and can be used on mobile devices</li>
          <li>Form tabs for large forms with 100+ fields</li>
          <li>Payment field types</li>
        </ul>
      </div>

      <div class='feat'>
        <div class='feat-header'>
          <i class='fas fa-project-diagram'></i>
          <b>Workflow</b>
        </div>
        <ul>
          <li>Finite state-machine workflow</li>
          <li>Simple drag-n-drop workflow constructor</li>
          <li>Role model with field based permissions</li>
          <li>Running python code opon Action (entity changes state)</li>
        </ul>
      </div>

      <div class='feat'>
        <div class='feat-header'>
          <i class='fas fa-store'></i>
          <b>Marketplace</b>
        </div>
        <ul>
          <li>Forms can be grouped and packaged into workflow applications</li>
          <li>Applications can be installed on any Ax instance in seconds</li>
          <li>Workflow applications can be published to GitHub and to Ax Marketplace</li>
        </ul>
      </div>
    </div>
    <div class='features'>
      <div class='feat'>
        <div class='feat-header'>
          <i class='fas fa-feather-alt'></i>
          <b>Lightweight</b>
        </div>
        <ul>
          <li>
            Ax front-end bundle weighs
            <b>2MB</b> gzipped. This is 4 times less than a demo GIF at the top.
          </li>
          <li>
            The whole back-end is
            <b>7MB</b> gzipped and can be installed from the PyPi package manager within 3 minutes.
          </li>
        </ul>
      </div>

      <div class='feat'>
        <div class='feat-header'>
          <i class='fas fa-robot'></i>
          <b>GraphQL</b>
        </div>
        <ul>
          <li>Forms data and workflow actions are available by GraphQL queries</li>
          <li>Ax-workflow can be used as a headless CMS</li>
        </ul>
      </div>

      <div class='feat'>
        <div class='feat-header'>
          <i class='fab fa-html5'></i>
          <b>Web components</b>
        </div>
        <ul>
          <li>Ax forms and grids are available as web-components</li>
          <li>
            <b>&lt;ax-form></b> and
            <b>&lt;ax-grid></b> components can be used on external websites with 2 lines of code.
          </li>
          <li>Check the live demo for more info</li>
        </ul>
      </div>
    </div>

    <div class='features'>
      <div class='feat'>
        <div class='feat-header'>
          <i class='fas fa-columns'></i>
          <b>Grids</b>
        </div>
        <ul>
          <li>Ax uses the best html5 grid available: ag-grid</li>
          <li>Server-side filtering available</li>
          <li>Custom SQL queries for grids available</li>
        </ul>
      </div>

      <div class='feat'>
        <div class='feat-header'>
          <i class='fas fa-desktop'></i>
          <b>Pages</b>
        </div>
        <ul>
          <li>Stand-alone Progress Web Application (PWA) available for displaying forms and grids for end-users</li>
          <li>Can be installed on mobile iOS and Android similar to native applications</li>
        </ul>
      </div>

      <div class='feat'>
        <div class='feat-header'>
          <i class='fas fa-database'></i>
          <b>DB structure</b>
        </div>
        <ul>
          <li>Every form is a database table. Every field is a table column.</li>
          <li>Only two columns are created on default - guid and state.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Typed from "typed.js";
import MainHeader from "@/components/MainHeader.vue";

export default {
  name: "Home",
  components: { MainHeader },
  data: () => ({
    typed: null
  }),
  computed: {},
  mounted() {
    let options = {
      strings: [
        "Open source",
        "No code",
        "Self hosted",
        "Zero configuration",
        "Rapid",
        "Less annoying",
        "Business process"
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
      backDelay: 1400
    };

    this.typed = new Typed("#typed_element", options);
  },
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
.shout {
  font-size: 40px;
}

.cont-1 {
  margin: 30px 5% 30px 5%;
}

.cont-2 {
  display: flex;
  margin: 30px 5% 30px 5%;
  flex-direction: column;
}

@media (min-width: 960px) {
  .cont-2 {
    flex-direction: row;
  }
}

.cont-2-row-1 {
  padding-right: 15px;
}

.cont-2-row-2 {
  padding-left: 15px;
}

.misc-grey {
  color: #666666;
}

.features {
  display: flex;
  flex-direction: column;
  margin: 30px 5%;
}

@media (min-width: 960px) {
  .features {
    flex-direction: row;
  }
}

.feat {
  flex-grow: 1;
  min-width: 100%;
  padding: 25px;
}

@media (min-width: 960px) {
  .feat {
    min-width: 33%;
  }
}

.feat-header {
  margin: 0px 0px 15px 7px;
}

.feat-header i {
  font-size: 40px;
}

.feat-header b {
  font-size: 24px;
  padding-left: 20px;
}

.banner {
  padding: 40px 5%;
  background: #e0e4cc;
  color: #555;
  text-align: center;
  font-size: 24px;
}

@media (min-width: 960px) {
  .banner {
    font-size: 40px;
  }
}

.col-2 {
  min-width: 100%;
}

@media (min-width: 960px) {
  .col-2 {
    min-width: 33%;
  }
}
</style>
