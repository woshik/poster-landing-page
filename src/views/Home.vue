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
import FullBanner from "../components/FullBanner";
import Album from "../components/Album";
import OurWorks from "../components/OurWorks";
import Price from "../components/Price";
import Gallery from "../components/Gallery";
import Poster from "../components/Poster";
import Testimonial from "../components/Testimonial";
import Service from "../components/Service";
import Footer from "../components/Footer";
import FooterPayment from "../components/FooterPayment";

export default {
  name: "Home",
  components: {
    FullBanner,
    Album,
    OurWorks,
    Price,
    Gallery,
    Poster,
    Testimonial,
    Service,
    Footer,
    FooterPayment,
  },
  mounted: function () {
    let hash = this.$route.hash;
    if (hash) {
      setTimeout(function () {
        let element = document.querySelector(hash);
        if (element) {
          window.scroll({
            top: window.scrollY + element.getBoundingClientRect().top,
            behavior: "smooth",
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  },
};
</script>