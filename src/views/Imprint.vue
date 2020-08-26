<template>
  <div>
    <main role="main">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center top-margin" v-html="$t('imprint')"></div>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  name: "Imprint",
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

h1.heading {
  font-weight: 600;
  color: #303030;
}

.customer-support {
  margin-top: 75px;
}

.customer-support h2 {
  font-size: 32px;
}

.content {
  margin-top: 100px;
}

.email-address {
  margin-top: 15px;
  font-weight: bolder;
  font-size: 20px;
}

p {
  font-size: 17px;
  color: #303030;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}

h1,
h2 {
  word-break: break-all;
}

.quelle,
.quelle a {
  color: #999999;
}
</style>