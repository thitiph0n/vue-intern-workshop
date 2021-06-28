<template>
  <div>
    <div
      v-for="setting in settingsList"
      :key="setting.name"
      class="setting-list bg-white rounded-3  d-flex flex-column justify-content-center px-3 py-1"
    >
      <router-link
        :to="setting.link"
        class="setting-item py-2 d-flex align-items-center border-bottom"
      >
        <i class="bi fs-4 mx-2" :class="setting.iconClass"></i>
        <span class="ms-2 fs-6 fw-light">{{ setting.name }}</span>
        <div class="flex-fill"></div>
        <i class="bi bi-chevron-right me-2 fs-4"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    settingsList: Array,
  },
};
</script>

<style lang="scss" scoped>
.setting-item {
  color: #4c545c;
}

.router-link-exact-active {
  background-color: #1c4979;
  color: white;
}

.clr-light {
  color: #4c545c;
}

extarea:focus,
input[type='text']:focus,
input[type='password']:focus,
input[type='datetime']:focus,
input[type='datetime-local']:focus,
input[type='date']:focus,
input[type='month']:focus,
input[type='time']:focus,
input[type='week']:focus,
input[type='number']:focus,
input[type='email']:focus,
input[type='url']:focus,
input[type='search']:focus,
input[type='tel']:focus,
input[type='color']:focus,
.uneditable-input:focus {
  border-color: #ddd;
  box-shadow: none;
  outline: 0 none;
}
</style>
