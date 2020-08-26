<template>
  <div>
    <main role="main">
      <div class="container">
        <div class="row">
          <div class="col-12 top-margin" v-html="$t('privacy_policy')"></div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "PrivacyPolicy",
  components: {
    Footer: () => import("../components/Footer"),
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