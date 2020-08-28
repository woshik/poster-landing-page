<template>
  <section class="container testimonial">
    <div class="row text-center mx-auto">
      <div class="col-md-12">
        <font-awesome-icon icon="quote-left" />
      </div>
      <div class="col-md-12">
        <div class="testimonial-desc">{{$t("testimonial.one.heading")}}</div>
        <div class="d-flex flex-row justify-content-center align-items-center mt-2">
          <img v-lazy="testimonial" alt="testimonial" />
          <div class="testimonial-person">
            <div class="name">{{$t("testimonial.one.name")}}</div>
            <div class="writer">{{$t("testimonial.one.occupation")}}</div>
          </div>
        </div>
        <a
          href="https://editor.sternenhimmel-poster.de/new/"
          class="btn btn-design-poster"
        >{{$t("testimonial.button_text",{kw: $route.query.kw ? $route.query.kw : 'Sternenhimmel'})}}</a>
      </div>
    </div>
  </section>
</template>

<script>
import testimonial from "../assets/images/testimonial.jpeg";
export default {
  name: "Testimonial",
  data() {
    return {
      testimonial,
    };
  },
};
</script>