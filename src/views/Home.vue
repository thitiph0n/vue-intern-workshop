<template>
  <div class="vertical-center">
    <div
      class="
        w-100
        overflow-hidden
        d-flex
        justify-content-center
      "
    >
      <div>
        <div class="fs-1 fw-light text-center">Coming soon</div>
        <div
          class="
            countdown
            row
            g-2
            gy-md-2
            gx-md-5
            justify-content-center
            mt-4
            text-center
          "
        >
          <div class="col-6 col-md-3 fs-2 fw-light">
            <span id="days" class="d-block text-center fs-1 fw-bolder">{{
              countDown.days
            }}</span>
            Days
          </div>
          <div class="col-6 col-md-3 fs-2 fw-light">
            <span id="hours" class="d-block text-center fs-1 fw-bolder">{{
              countDown.hours
            }}</span
            >Hours
          </div>
          <div class="col-6 col-md-3 fs-2 fw-light">
            <span id="mins" class="d-block text-center fs-1 fw-bolder">{{
              countDown.mins
            }}</span
            >Minutes
          </div>
          <div class="col-6 col-md-3 fs-2 fw-light">
            <span id="secs" class="d-block text-center fs-1 fw-bolder">{{
              countDown.secs
            }}</span
            >Seconds
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      countDown: {
        days: 0,
        hours: 0,
        mins: 0,
        secs: 0,
      },
    };
  },

  created() {
    //Countdown
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let launchDay = 'Jun 30, 2021 00:00:00',
      countDown = new Date(launchDay).getTime();

    this.timer = setInterval(() => {
      let now = new Date().getTime(),
        distance = countDown - now;

      (this.countDown.days = Math.floor(distance / day)),
        (this.countDown.hours = Math.floor((distance % day) / hour)),
        (this.countDown.mins = Math.floor((distance % hour) / minute)),
        (this.countDown.secs = Math.floor((distance % minute) / second));
    }, 0);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="scss" scoped>
.vertical-center {
  /* These two lines are counted as one :-)       */
  z-index: 0;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  display: flex;
  align-items: center;
}

.countdown {
  min-width: 200px;
}
</style>
