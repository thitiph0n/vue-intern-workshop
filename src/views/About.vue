<template>
  <div class="container pt-3">
    <h1>This is an about page</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rerum
      perspiciatis reprehenderit enim quas quo minus sed impedit, dolore
      possimus nemo ratione mollitia asperiores vel expedita hic nisi veniam
      iure.
    </p>
    <button class="btn btn-primary mt-2" @click="watchThis++">
      +1 Watch
    </button>
    <div class="my-2">
      <h2 class="mt-2">v-if</h2>
      <div class="mt-3 card p-3">
        <div class="card-content">
          <p>Try typing "Hello"</p>
          <input type="text" v-model="message" class="form-control" />
          <h2 class="mt-2">
            {{ message }} <span v-if="message == 'Hello'">v-if!</span>
            <span v-else>v-else!</span>
          </h2>
        </div>
      </div>
    </div>
    <h2>Computed</h2>
    <div class="mt-3 card p-3">
      <div class="card-content">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
      </div>
    </div>
    <h2 class="mt-2">v-for</h2>
    <div class="mt-3 card p-3">
      <div class="card-content">
        <ul id="example-1">
          <li v-for="(coffee, index) in coffees" :key="coffee">
            {{ index + 1 }} {{ coffee }}
          </li>
        </ul>
      </div>
    </div>
    <h2 class="mt-2">Methods</h2>
    <div class="mt-3 card p-3">
      <div class="card-content">
        <ul id="example-1">
          <li v-for="coffee in coffees" :key="coffee">
            {{ toUpperCase(coffee) }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coffees: ['Latte', 'Black', 'Americano', 'Cappuccino'],
      message: '',
      watchThis: 0,
    };
  },
  computed: {
    reversedMessage() {
      return this.message
        .split('')
        .reverse()
        .join('');
    },
  },
  watch: {
    watchThis(n, o) {
      console.log('newVal', n);
      console.log('oldVal', o);
    },
  },
  methods: {
    onChange(e) {
      console.log(e);
    },
    toUpperCase(msg) {
      return msg.toUpperCase();
    },
  },
};
</script>
