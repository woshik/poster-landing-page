<template>
  <div>
    <main role="main">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center top-margin" v-html="$t('shipping')"></div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "ShippingPayment",
  components: {
    Footer: () => import("../components/Footer"),
  },
  mounted: () => {
    window.scrollTo(0, 0);
  },
};
</script>

<style>
.top-margin {
  margin-top: 75px;
}
h1,
h2 {
  color: #222121;
  font-weight: 600;
}

h1,
h2 {
  word-break: break-all;
}

p {
  color: #303030;
  font-weight: 400;
}
</style>