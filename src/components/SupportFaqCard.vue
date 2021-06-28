<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
};
</script>

<style lang="scss" scoped>
.clr-blue {
  background-color: royalblue;
}
</style>
