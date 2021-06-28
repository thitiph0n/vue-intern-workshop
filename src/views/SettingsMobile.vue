<template>
  <div class="container-fluid h-100 px-md-0 wrapper">
    <div class="row h-100">
      <div class="col-12 col-md-4 col-lg-4 setting h-100 py-2 ">
        <div class="heading text-md-center mt-3 ms-2 align-middle">
          Settings
        </div>
        <div class="search-bar d-flex justify-content-center pt-3 pb-1 px-3">
          <div class="input-group mb-3">
            <button
              class="btn border border-end-0 search-icon py-2"
              type="button"
              id="button-addon1"
            >
              <i class="bi bi-search"></i>
            </button>
            <input
              type="text"
              class="form-control border-start-0 search-input py-2"
              placeholder="Search settings"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
            />
          </div>
        </div>
        <settings-list :settings-list="settingsList"></settings-list>
      </div>
      <div
        class="col-md-8 setting-content d-none d-md-block pt-2 px-2 border-start "
      >
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SettingsList from '../components/SettingsList.vue';

export default {
  components: {
    SettingsList,
  },
  data() {
    return {
      settingsList: [
        { name: 'Account', iconClass: 'bi-person', link: '/settings/account' },
        {
          name: 'Privacy & Security',
          iconClass: 'bi-lock',
          link: '/settings/privacy-and-security',
        },
        {
          name: 'Notifications',
          iconClass: 'bi-bell',
          link: '/settings/notifications',
        },

        { name: 'About', iconClass: 'bi-info-circle', link: '/settings/about' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.setting {
  height: 100%;
  background-color: white;
  animation: moveLeft 0.2s;
}

.setting-content {
  height: 100%;
  background-color: white;
}

.heading {
  font-size: 2.2rem;
  font-weight: 300;
}

.search-icon {
  border-radius: 50px 0px 0px 50px;
  border-color: #ddd;
}

.search-input {
  border-radius: 0px 50px 50px 0px;
  border-color: #ddd;
}

@keyframes moveLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
