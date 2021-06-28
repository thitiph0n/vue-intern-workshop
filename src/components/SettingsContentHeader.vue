<template>
  <div class="mt-3">
    <i
      @click="$router.push('/settings-mobile')"
      class="bi bi-chevron-left fs-3 me-2 d-md-none"
    ></i>
    <h2 class="d-inline">
      <slot></slot>
    </h2>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.heading {
  font-size: 2.2rem;
  font-weight: 300;
}
</style>
