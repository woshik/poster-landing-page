<template>
  <div>
    <main role="main">
      <div class="container" v-html="$t('term_condition')"></div>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "TermCondition",
  components: {
    Footer: () => import("../components/Footer"),
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

.top-margin {
  margin-top: 75px;
}
</style>