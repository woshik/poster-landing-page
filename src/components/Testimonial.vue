<template>
  <section class="container testimonial">
    <div class="row text-center mx-auto">
      <div class="col-md-12">
        <font-awesome-icon icon="quote-left" />
      </div>
      <div class="col-md-12">
        <div class="testimonial-desc">{{$t("testimonial.one.heading")}}</div>
        <div class="d-flex flex-row justify-content-center align-items-center mt-2">
          <img :src="testimonial" alt="testimonial" />
          <div class="testimonial-person">
            <div class="name">{{$t("testimonial.one.name")}}</div>
            <div class="writer">{{$t("testimonial.one.occupation")}}</div>
          </div>
        </div>
        <button class="btn btn-design-poster">{{$t("testimonial.button_text")}}</button>
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