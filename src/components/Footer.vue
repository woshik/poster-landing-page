<template>
  <footer class="page-footer">
    <div class="container-fluid footer-upper-container">
      <div class="row text-center">
        <div class="col-12">
          <ul class="list-horizontal">
            <li>
              <a :href="'/'+$route.params.lang">{{$t("footer.home")}}</a>
            </li>
            <li>
              <a href="https://www.sternenhimmel-poster.de/impressum/">{{$t("footer.imprint")}}</a>
            </li>
            <li>
              <a href="https://www.sternenhimmel-poster.de/agb/">{{$t("footer.terms_and_conditions")}}</a>
            </li>
            <li>
              <a href="https://www.sternenhimmel-poster.de/datenschutzerklaerung/">{{$t("footer.privacy_policy")}}</a>
            </li>
            <li>
              <a href="https://www.sternenhimmel-poster.de/versand/" v-html="$t('footer.shipping_payment')"></a>
            </li>
          </ul>
        </div>
        <div class="col-md-6 mx-auto">
          <div class="footer-copyright" v-html="$t('footer.text')" />
        </div>
      </div>
    </div>
    <div class="container-fluid container-footer-lower">
      <div class="row text-center">
        <div class="col-md-12">
          <div class="payment-title">{{$t("footer.payment")}}</div>
        </div>
        <div class="col-md-12 mt-3">
          <img :src="payment" alt="payment" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import payment from "../assets/images/payment.png";
export default {
  name: "Footer",
  data() {
    return {
      payment,
    };
  },
};
</script>