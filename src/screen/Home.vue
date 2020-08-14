<template>
  <div>
    <Header />
    <main role="main">
      <FullBanner />
      <Album />
      <OurWorks />
      <Price />
      <Gallery />
      <Poster />
      <Testimonial />
      <hr class="featurette-divider" />
      <Service />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    Header: () => import("../components/Header"),
    FullBanner: () => import("../components/FullBanner"),
    Album: () => import("../components/Album"),
    OurWorks: () => import("../components/OurWorks"),
    Price: () => import("../components/Price"),
    Gallery: () => import("../components/Gallery"),
    Poster: () => import("../components/Poster"),
    Testimonial: () => import("../components/Testimonial"),
    Service: () => import("../components/Service"),
    Footer: () => import("../components/Footer"),
  },
};
</script>