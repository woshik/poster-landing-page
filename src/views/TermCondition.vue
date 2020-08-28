<template>
  <div>
    <main role="main">
      <div class="container" v-html="$t('term_condition')"></div>
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";

export default {
  name: "TermCondition",
  components: {
    Footer,
  },
  mounted: () => {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
p,
div {
  color: #7a7a7a;
}

p {
  font-size: 19px;
}

h1,
h2 {
  word-break: break-all;
}

.top-margin {
  margin-top: 75px;
}
</style>