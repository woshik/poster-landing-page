<template>
  <div>
    <main role="main">
      <full-banner />
      <album />
      <our-works />
      <price />
      <gallery />
      <poster />
      <testimonial />
      <hr class="featurette-divider" />
      <service />
    </main>

    <Footer />
    <footer-payment />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    FullBanner: () => import("../components/FullBanner"),
    Album: () => import("../components/Album"),
    OurWorks: () => import("../components/OurWorks"),
    Price: () => import("../components/Price"),
    Gallery: () => import("../components/Gallery"),
    Poster: () => import("../components/Poster"),
    Testimonial: () => import("../components/Testimonial"),
    Service: () => import("../components/Service"),
    Footer: () => import("../components/Footer"),
    FooterPayment: () => import("../components/FooterPayment"),
  },
};
</script>