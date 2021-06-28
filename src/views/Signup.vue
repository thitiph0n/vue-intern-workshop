<template>
  <div class="row justify-content-center">
    <div class="col-12 wrapper mt-2 mt-lg-4">
      <div
        class="
              box
              row
              bg-white
              border
              rounded-2
              mx-1     
              mx-md-5    
              mx-lg-1 mx-xl-5
              shadow-sm
              justify-content-center
            "
      >
        <div class="box-content col-12 col-lg-8 col-xl-6">
          <div class="fw-bold text-center my-4 heading my-lg-2">
            Create an Account
          </div>
          <form
            @submit.prevent=""
            autocomplete="off"
            class="
                  register-form
                  d-flex
                  flex-column
                  justify-content-center
                  px-lg-4 px-xl-5
                "
          >
            <div class="fullname-field">
              <label for="fullname" class="form-label mb-1">Fullname</label>
              <div class="d-md-flex justify-content-between">
                <div class="input w-100 me-md-1">
                  <input
                    type="text"
                    class="input-field form-control mb-2"
                    placeholder="First name"
                    name="first-name"
                    autocomplete="off"
                    required
                  />
                </div>
                <div class="spacer"></div>
                <div class="input w-100 ms-md-1">
                  <input
                    type="text"
                    class="input-field form-control mb-2"
                    placeholder="Last name"
                    name="last-name"
                    autocomplete="off"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="username-field input">
              <label for="username" class="form-label mb-1">Username</label>
              <input
                type="text"
                class="input-field form-control mb-2"
                placeholder="Username"
                name="username"
                autocomplete="off"
                required
              />
            </div>
            <div class="email-field input">
              <label for="email" class="form-label mb-1">Email</label>
              <input
                type="email"
                class="input-field form-control mb-2"
                placeholder="Email"
                name="email"
                autocomplete="off"
                required
              />
            </div>
            <div class="dob-field input">
              <label for="dob" class="form-label mb-1">Date of Birth</label>
              <input
                type="text"
                onfocus="(this.type='date')"
                onblur="(this.type='text')"
                class="input-field form-control mb-2"
                placeholder="Date of Birth"
                name="dob"
                required
              />
            </div>
            <div class="gender-field mt-1 mb-2 d-md-flex align-items-center">
              <label for="gender" class="me-md-2">Gender</label>
              <div class="me-md-2">
                <input
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
                  class="form-check-input me-1"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                />
                <label class="form-check-label fw-light" for="female"
                  >Female</label
                >
              </div>
              <div>
                <input
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
            <div class="tel-field input">
              <label for="tel" class="form-label mb-1">Phone</label>
              <input
                type="tel"
                class="input-field form-control mb-2"
                placeholder="Phone"
                name="tel"
                autocomplete="off"
                required
              />
            </div>
            <div class="role-field input">
              <label for="role" class="form-label mb-1">Role</label>
              <select
                name="role"
                id="role"
                class="input-field form-select mb-2"
              >
                <option value="" disabled selected hidden>
                  Select your role
                </option>
                <option value="admin">Admin</option>
                <option value="customer">Customer</option>
                <option value="employee">Employee</option>
              </select>
            </div>
            <div class="password-field input">
              <div class="input">
                <label for="password" class="form-label mb-1">Password</label>
                <input
                  type="password"
                  class="input-field form-control mb-2"
                  placeholder="Password"
                  name="password"
                  autocomplete="off"
                  required
                />
              </div>

              <div class="input">
                <label for="confirm-password" class="form-label mb-1"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  class="input-field form-control mb-2"
                  placeholder="Confirm Password"
                  name="confirm-password"
                  autocomplete="off"
                  required
                />
              </div>
            </div>
            <div class="tos-field mt-2 mb-3 text-center">
              <input
                type="checkbox"
                name="tos"
                class="form-check-input"
                id="tos-check"
              />
              <label class="form-check-label d-inline fw-light" for="tos-check">
                I accepting
                <a href="#" class="fw-bold "
                  >Terms of Service and Privacy Policy</a
                >
              </label>
            </div>
            <div
              class="
                    submit
                    d-flex
                    justify-content-center
                    flex-column
                    text-center
                  "
            >
              <button
                type="submit"
                class="btn btn-secondary text-white w-100 p-2"
              >
                Sign up
              </button>
              <div class="mt-1 mb-3 mt-lg-2 mb-lg-4">
                <div class="d-lg-inline me-lg-2 fw-light">Or</div>
                <router-link to="login" class="mb-4">Sign in</router-link>
              </div>
            </div>
          </form>
        </div>
        <div
          class="
                box-img
                col-12
                d-none d-lg-flex
                justify-content-center
                align-items-lg-center
                col-lg-4 col-xl-6
                overflow-hidden
              "
        >
          <img
            class="img-fluid"
            src="@/assets/images/20943447.jpg"
            alt="Designed by vectorjuice / Freepik"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
