<template>
  <div class="nav-top">
    <div
      @click="isSideBarOpened = false"
      class="z-modal w-100"
      :class="openSideBar"
    ></div>
    <nav
      class="
        top-0
        position-fixed
        w-100
        d-flex
        bg-white
        align-items-center
        px-2 px-lg-4
        border-bottom
        shadow-sm
      "
    >
      <div @click="isSideBarOpened = true" class="ms-2 me-3 d-lg-none">
        <div class="text-black-50 fs-2">
          <i class="bi bi-list"></i>
        </div>
      </div>

      <div class="ms-1 ms-lg-2">
        <router-link to="/">
          <div class="d-flex align-items-center logo fw-bold fs-3 text-primary">
            <img src="@/assets/images/logo.png" class="avatar" alt="logo" />
            Hungry <span class="text-secondary">Dog</span>
          </div></router-link
        >
      </div>

      <div class="flex-fill"></div>

      <div v-if="!isLoggedIn" class="d-none d-lg-flex justify-content-between">
        <router-link to="/login"
          ><button class="btn rounded-pill px-4">
            Login
          </button></router-link
        >
        <router-link to="/signup">
          <button class="btn btn-outline-secondary rounded-pill px-3 ms-2">
            Sign up
          </button></router-link
        >
      </div>

      <div
        v-else
        v-click-outside="hideDropDown"
        class="drop-down d-none d-lg-inline-block ms-5"
        :class="{ opened: isDropDownOpened }"
      >
        <button
          @click="isDropDownOpened = !isDropDownOpened"
          class="
            btn
            d-flex
            rounded-pill
            border
            p-1
            justify-content-between
            align-items-center
          "
        >
          <div class="d-flex justify-content-between align-items-center">
            <img
              :src="user.avatar || '@/assets/images/user.png'"
              class="avatar rounded-circle"
              alt="avatar"
            />
            <div class="px-3 text-uppercase">
              {{ user.username || 'Username' }}
            </div>
          </div>
          <i class="bi bi-chevron-down px-2"></i>
        </button>
        <div class="drop-down-content bg-white rounded-3" :class="openDropDown">
          <router-link
            to="/settings"
            @click.native="hideDropDown"
            class="align-middle"
            ><i class="bi bi-gear-wide-connected fs-5"></i
            ><span class="ms-2">Setting</span></router-link
          >
          <router-link to="/support" class="align-middle"
            ><i class="bi bi-question-circle fs-5"></i
            ><span class="ms-2">Support</span></router-link
          >
          <a @click="logOut" class="align-middle"
            ><i class="bi bi-box-arrow-right fs-5"></i
            ><span class="ms-2">Sign out</span></a
          >
        </div>
      </div>
    </nav>

    <div
      v-if="isLoggedIn"
      :class="openSideBar"
      class="sidebar d-lg-none d-flex flex-column"
    >
      <div class="sidebar-logo border-bottom shadow-sm me-md-5 w-100">
        <i
          @click="hideSideBar"
          class="bi bi-arrow-left-short fs-1 fw-bolder ms-2 me-2"
        ></i>

        <div class="d-flex align-items-center logo fw-bold fs-3">
          <img src="@/assets/images/logo.png" class="avatar" alt="logo" />
          Hungry <span>Dog</span>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center pt-3 border-bottom">
        <img
          :src="user.avatar || '@/assets/images/user.png'"
          class="rounded-circle"
          alt="avatar-big"
        />
        <div class="pt-2 pb-3 fw-bold fs-4">
          {{ user.username || 'Username' }}
        </div>
      </div>
      <router-link
        @click.native="hideSideBar"
        to="/settings-mobile"
        class="align-middle d-inline-block ps-3 py-2"
        ><i class="bi bi-gear-wide-connected fs-5"></i
        ><span class="ms-2">Setting</span></router-link
      >
      <router-link to="/support" class="align-middle d-inline-block ps-3 py-2"
        ><i class="bi bi-question-circle fs-5"></i
        ><span class="ms-2">Support</span></router-link
      >
      <div class="flex-fill"></div>

      <button
        @click="logOut"
        class="btn btn-outline-danger rounded-pill px-3 m-3"
      >
        <i class="bi bi-box-arrow-right fs-5"></i
        ><span class="ms-2">Sign out</span>
      </button>
    </div>
    <div
      v-else
      :class="openSideBar"
      class="sidebar d-lg-none d-flex flex-column"
    >
      <div class="sidebar-logo border-bottom shadow-sm me-md-5 w-100">
        <i
          @click="hideSideBar"
          class="bi bi-arrow-left-short fs-1 fw-bolder ms-2 me-2"
        ></i>

        <div class="d-flex align-items-center logo fw-bold fs-3">
          <img src="@/assets/images/logo.png" class="avatar" alt="logo" />
          Hungry <span>Dog</span>
        </div>
      </div>

      <a href="#" class="align-middle d-inline-block ps-3 py-2"
        ><i class="bi bi-question-circle fs-5"></i
        ><span class="ms-2">Support</span></a
      >
      <div class="flex-fill"></div>
      <router-link
        @click.native="hideSideBar"
        to="/login"
        class="btn btn-outline-primary rounded-pill px-3 m-3"
      >
        <i class="bi bi-box-arrow-in-right fs-5"></i
        ><span class="ms-2">Login/Sign up</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside';

export default {
  name: 'NavBar',
  props: ['isLoggedIn', 'user'],
  // do not forget this section
  directives: {
    ClickOutside,
  },
  emits: ['logout'],
  data() {
    return {
      isSideBarOpened: false,
      isDropDownOpened: false,
    };
  },
  computed: {
    openSideBar() {
      if (this.isSideBarOpened) {
        return ['opened'];
      }
      return [];
    },
    openDropDown() {
      if (this.isDropDownOpened) {
        return ['opened'];
      }
      return [];
    },
  },
  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },
  methods: {
    hideDropDown() {
      this.isDropDownOpened = false;
    },
    hideSideBar() {
      this.isSideBarOpened = false;
    },
    logOut() {
      this.$emit('logout');
      this.isSideBarOpened = false;
      this.isDropDownOpened = false;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  height: 75px;
  z-index: 2;
}

.form-check-label {
  font-weight: 300;
}

.bg-blue {
  background-color: #002453;
}

.z-modal {
  display: none;
  position: fixed;
  top: 0;
  z-index: 3;
  height: 100%;
  background: rgba(0, 0, 0, 0.335) fixed;
}

.z-modal.opened {
  display: block;
}

.avatar {
  width: 40px;
  height: 40px;
}

.avatar-big {
  width: 64;
  height: 64;
}

.drop-down i {
  overflow: hidden;
  transition-duration: 0.5s;
  transition-property: transform;
}

.drop-down {
  position: relative;
  display: inline-block;
}

.drop-down.opened i {
  transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
}

.drop-down-content {
  display: none;
  right: 10px;
  position: absolute;
  min-width: 200px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.drop-down-content.opened {
  display: block;
}

.drop-down-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  cursor: pointer;
}

.drop-down-content a:hover {
  background-color: #ddd;
}

.sidebar {
  top: 0;
  width: 250px;
  position: fixed;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  background-color: white;
  transform: translateX(-100%);
  transition: transform 0.3s;
  z-index: 3;
}

.sidebar.opened {
  transform: none;
}

.sidebar-logo {
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.sidebar a {
  color: black;
}

.sidebar a:hover,
.sidebar a:active {
  background-color: #ddd;
}

.btn-outline-secondary:hover {
  color: white;
}
</style>
