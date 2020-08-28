<template>
  <section class="container">
    <div class="row featurette text-center d-flex mb-5 align-items-center">
      <div class="col-md-7 order-change-mobile">
        <h2 class="featurette-heading">{{$t("poster.one.heading")}}</h2>
        <p class="featurette-heading-subtitle">{{$t("poster.one.paragraph_one")}}</p>
        <p>{{$t("poster.one.paragraph_two")}}</p>
        <div class="row">
          <poster-button
            :button-text="$t('poster.one.button_text', {kw: $route.query.kw ? $route.query.kw : 'Sternenhimmel'})"
          />
        </div>
      </div>
      <div class="col-md-5 order-md-1">
        <img v-lazy="poster1" alt="poster" width="100%" />
      </div>
    </div>

    <div class="row featurette text-center d-flex align-items-center">
      <div class="col-md-7 mt-5 order-md-1 order-change-mobile">
        <h2 class="featurette-heading">{{$t("poster.two.heading")}}</h2>
        <p class="featurette-heading-subtitle">{{$t("poster.two.paragraph_one")}}</p>
        <p>{{$t("poster.two.paragraph_two")}}</p>
        <div class="row">
          <poster-button
            :button-text="$t('poster.two.button_text', {kw: $route.query.kw ? $route.query.kw : 'Sternenhimmel'})"
          />
        </div>
      </div>
      <div class="col-md-5">
        <img class="featurette-image img-fluid mx-auto" v-lazy="poster" alt="poster" />
      </div>
    </div>
  </section>
</template>

<script>
import PosterButton from "./generic/PosterButton";
import poster from "../assets/images/poster.png";
import poster1 from "../assets/images/poster1.gif";
export default {
  name: "Poster",
  components: {
    PosterButton,
  },
  data() {
    return {
      poster,
      poster1,
    };
  },
};
</script>