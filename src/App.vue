<template>
  <div id="app" class="h-100">
    <nav-bar :is-logged-in="isLoggedIn" :user="user" @logout="loggedOut" />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/BaseNavBar';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      isLoggedIn: true,
      user: {},
    };
  },
  computed: {
    ...mapGetters(['getProfile']),
  },
  async mounted() {
    await this.fetchUser();
    this.user = this.getProfile;
  },
  methods: {
    loggedOut() {
      this.isLoggedIn = false;
    },

    ...mapActions(['fetchUser']),
  },
};
</script>

<style lang="scss">
$primary: #02387e;
$secondary: salmon;

@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;500;700&display=swap');
@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';

.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active,
.btn-primary:active:focus:not(:disabled):not(.disabled),
.btn:focus,
.btn:active,
.btn:hover {
  box-shadow: none !important;
  outline: 0;
}

*,
*:focus,
*:hover {
  outline: none;
}

html,
body {
  font-family: 'Kanit', sans-serif;
  margin: 0;
  background-color: rgba(249, 250, 251, 1);
  color: #02387e;
  height: 100%;
}

a,
.router-link-active {
  text-decoration: none;
  cursor: pointer;
}

.vertical-center {
  min-height: 100%; /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */
  display: flex;
  align-items: center;
}

.content {
  padding-top: 75px;
  width: 100%;
  height: 100%;
  justify-content: center;
}

.form-control,
.form-select {
  font-weight: 300;
}

option {
  font-weight: 300;
}

.heading {
  color: #02387e;
  font-size: 2.5rem;
}

.btn-secondary:hover {
  background-color: rgb(250, 96, 78);
  opacity: 1;
}

@media (min-width: 1400px) {
  .wrapper {
    max-width: 1440px;
  }
}
</style>
