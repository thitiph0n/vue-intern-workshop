<template>
  <div class="w-100">
    <div class="row justify-content-center w-100">
      <div class="wrapper col-12 col-xl-10 col-xxl-8 mt-2 mt-xxl-4">
        <div
          class="
              box
              row
              bg-white
              border
              rounded-2
              mx-1
              my-5
              shadow-sm
              mx-md-5
              justify-content-center
            "
        >
          <div class="box-img d-none d-lg-flex justify-content-center col-lg-6">
            <img
              src="@/assets/images/20945597.jpg"
              alt="Designed by vectorjuice / Freepik"
              class="m-auto overflow-hidden"
            />
          </div>
          <div class="box-content mt-auto col-12 col-md-10 col-lg-6 p-lg-5">
            <div class="fs-1 fw-bold text-center mt-3 mb-4 text-lg-start">
              Sign in
            </div>
            <div
              id="invalid-uname-password"
              class="alert alert-danger d-none fw-light"
              role="alert"
            >
              username or password is incorrect.
            </div>
            <form
              @submit.prevent=""
              class="mb-5 needs-validation"
              id="login-form"
              autocomplete="off"
              novalidate
            >
              <div class="mb-2">
                <label for="uname" class="form-label">Username</label>
                <input
                  id="uname"
                  type="text"
                  class="form-control p-2"
                  placeholder="Enter Username"
                  name="username"
                  required
                />
                <div class="invalid-feedback fw-light">
                  Username is required.
                </div>
              </div>
              <div class="mb-2">
                <label for="password" class="form-label">Password</label>
                <input
                  id="password"
                  type="password"
                  class="form-control p-2"
                  placeholder="Enter Password"
                  name="password"
                  required
                />
                <div class="invalid-feedback fw-light">
                  Password is required.
                </div>
              </div>

              <div class="d-flex justify-content-between">
                <div>
                  <input
                    id="remember-me"
                    type="checkbox"
                    class="form-check-input me-2"
                    name="remember"
                  />
                  <label class="form-check-label text-primary">
                    Remember me
                  </label>
                </div>

                <a id="forgot-password">Forgot Password?</a>
              </div>

              <div class="my-4 d-flex flex-column align-items-center">
                <button
                  type="submit"
                  class="btn btn-primary w-100 p-2"
                  name="login"
                >
                  Login
                </button>
                <div class="text-center my-1">Or</div>
                <router-link to="signup" class="w-100">
                  <button
                    type="button"
                    class="btn btn-secondary w-100 p-2 text-white"
                  >
                    Sign up
                  </button></router-link
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@media (min-width: 1400px) {
  .wrapper {
    max-width: 1200px;
  }
}
</style>
