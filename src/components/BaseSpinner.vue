<template>
  <div v-if="!isDataLoaded" class="d-flex justify-content-center">
    <div class="spinner-grow text-primary me-2" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary me-2" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-primary me-2" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-secondary me-2" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-grow text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isDataLoaded'],
};
</script>
