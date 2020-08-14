<template>
  <section class="container testimonial">
    <div class="row text-center mx-auto">
      <div class="col-md-12">
         <font-awesome-icon icon="quote-left" />
      </div>
      <div class="col-md-12">
        <div
          class="testimonial-desc"
        >Monde und Jahre vergehen, aber ein schöner Moment leuchtet das Leben hindurch.</div>
        <div class="d-flex flex-row justify-content-center align-items-center mt-2">
          <img src="../assets/images/testimonial.jpeg" alt />
          <div class="testimonial-person">
            <div class="name">Franz Grillparzer</div>
            <div class="writer">Schriftsteller</div>
          </div>
        </div>
        <button class="btn btn-design-poster">Jetzt deinen Sternenhimmel gestalten!</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Testimonial",
};
</script>