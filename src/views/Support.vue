<template>
  <div class="container">
    <h1 class="my-4 text-center fw-light">Hi! {{ $store.getters.getName }}</h1>
    <h2 class="text-center fw-light mb-5">How can we help?</h2>
    <h4>Frequently Asked Questions</h4>
    <base-spinner :is-data-loaded="isDataLoaded"></base-spinner>
    <div v-if="isDataLoaded" class="mt-2 row g-3">
      <support-faq-card
        v-for="faq in faqData"
        :key="faq.id"
        :title="faq.title"
        class="col-12"
      >
        <p class="card-text fw-light text-dark">{{ faq.body }}</p>
      </support-faq-card>
    </div>
  </div>
</template>

<script>
import BaseSpinner from '../components/BaseSpinner';
import SupportFaqCard from '../components/SupportFaqCard';

export default {
  components: { SupportFaqCard, BaseSpinner },
  data() {
    return {
      isDataLoaded: false,
      faqData: [],
    };
  },
  async mounted() {
    await this.fetchData();
    this.isDataLoaded = true;
  },
  methods: {
    async fetchData() {
      try {
        const { data } = await this.$axios.get(
          'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10'
        );

        this.faqData = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>>
