<template>
  <div class="pt-1 pb-2 px-3 px-md-5">
    <settings-content-header>Account Settings</settings-content-header>
    <form
      v-if="isDataLoaded"
      @submit.prevent="updateData"
      autocomplete="off"
      class="
                  pt-3
                  register-form
                  row
                "
    >
      <div class="fullname-field col-12 mb-2">
        <label for="fullname" class="form-label mb-1">Fullname</label>
        <div class="d-md-flex justify-content-between">
          <div class="input w-100 me-md-1">
            <input
              type="text"
              class="input-field form-control mb-2"
              ref="firstName"
              :value="user.firstName"
              name="first-name"
              required
            />
          </div>
          <div class="input w-100 ms-md-4">
            <input
              type="text"
              class="input-field form-control mb-2"
              v-model="user.lastName"
              name="last-name"
              required
            />
          </div>
        </div>
      </div>
      <div class="username-field input col-12 col-xl-6 mb-2">
        <label for="username" class="form-label mb-1">Username</label>
        <input
          type="text"
          class="input-field form-control mb-2"
          v-model="user.username"
          name="username"
          disabled
        />
      </div>
      <div class="email-field input col-12 col-xl-6 mb-2">
        <label for="email" class="form-label mb-1">Email</label>
        <input
          type="email"
          class="input-field form-control mb-2"
          v-model="user.email"
          name="email"
          required
        />
      </div>
      <div class="dob-field input col-12 col-xl-6 mb-2">
        <label for="dob" class="form-label mb-1">Date of Birth</label>
        <input
          type="date"
          class="input-field form-control mb-2"
          v-model="user.dob"
          name="dob"
          required
        />
      </div>
      <div class="tel-field col-12 col-xl-6 mb-2">
        <label for="tel" class="form-label mb-1">Phone</label>
        <input
          type="tel"
          class="input-field form-control mb-2"
          v-model="user.phone"
          name="phone"
          required
        />
      </div>
      <div
        class="gender-field mt-1 mb-2 d-md-flex align-items-center col-12 mb-2"
      >
        <label for="gender" class="me-md-2">Gender</label>
        <div class="me-md-2">
          <input
            v-model="user.gender"
            class="form-check-input me-1"
            type="radio"
            id="male"
            name="gender"
            value="male"
          />
          <label class="form-check-label fw-light" for="male">Male</label>
        </div>
        <div class=" me-md-2">
          <input
            v-model="user.gender"
            class="form-check-input me-1"
            type="radio"
            id="female"
            name="gender"
            value="female"
          />
          <label class="form-check-label fw-light" for="female">Female</label>
        </div>
        <div>
          <input
            v-model="user.gender"
            type="radio"
            class="form-check-input me-1"
            id="other"
            name="gender"
            value="ns"
          />
          <label class="form-check-label fw-light" for="other"
            >Not specified</label
          >
        </div>
      </div>
      <div class="role-field col-12 mb-2">
        <label for="role" class="form-label mb-1">Role</label>
        <select
          name="role"
          id="role"
          class="input-field form-select mb-2"
          v-model="user.role"
        >
          <option value="" disabled selected hidden>
            Select your role
          </option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
          <option value="employee">Employee</option>
        </select>
      </div>
      <div
        class="
                    mt-3
                    submit
                    d-flex
                    text-center
                  "
      >
        <button
          type="submit"
          class="btn btn-secondary text-white px-3 py-2 me-3"
        >
          Update
        </button>
        <button class="btn btn-light px-3 py-2">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import SettingsContentHeader from './SettingsContentHeader.vue';
export default {
  components: { SettingsContentHeader },
  data() {
    return {
      isDataLoaded: false,
      user: null,
    };
  },
  mounted() {
    //fetch data
    const user = {
      firstName: 'John',
      lastName: 'ChaoRai',
      username: 'john',
      email: 'john@mail.com',
      dob: '1991-07-13',
      phone: '0812345678',
      role: 'admin',
      gender: 'male',
    };

    this.user = user;
    this.isDataLoaded = true;
  },
  methods: {
    updateData() {
      this.user.firstName = this.$refs.firstName.value;
      console.log(this.user);
    },
  },
};
</script>
