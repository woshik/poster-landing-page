<template>
  <section class="container">
    <div class="row featurette text-center mb-5">
      <div class="col-md-7 order-md-1 order-sm-2">
        <h2 class="featurette-heading">{{$t("poster.one.heading")}}</h2>
        <p class="featurette-heading-subtitle">{{$t("poster.one.paragraph_one")}}</p>
        <p>{{$t("poster.one.paragraph_two")}}</p>
        <button class="btn btn-feature">{{$t("poster.one.button_text")}}</button>
      </div>
      <div class="col-md-5 order-md-2 order-sm-1">
        <video
          src="https://sternenhimmel-poster.gumlet.com/wp-content/uploads/2020/05/Sternenhimmel.mov"
          autoplay
          loop
          muted="muted"
          playsinline
          controlslist="nodownload"
        />
      </div>
    </div>

    <div class="row featurette text-center">
      <div class="col-md-7 order-md-2 order-sm-1 mt-5">
        <h2 class="featurette-heading">{{$t("poster.two.heading")}}</h2>
        <p class="featurette-heading-subtitle">{{$t("poster.two.paragraph_one")}}</p>
        <p>{{$t("poster.two.paragraph_two")}}</p>
        <button class="btn btn-feature">{{$t("poster.two.button_text")}}</button>
      </div>
      <div class="col-md-5 order-md-1">
        <img class="featurette-image img-fluid mx-auto" :src="poster" alt="poster" />
      </div>
    </div>
  </section>
</template>

<script>
import poster from "../assets/images/poster.png";
export default {
  name: "Poster",
  data() {
    return {
      poster,
    };
  },
};
</script>