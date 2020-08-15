<template>
  <footer class="page-footer">
    <div class="container-fluid footer-upper-container">
      <div class="row text-center">
        <div class="col-12">
          <ul class="list-horizontal">
            <li>
              <a href="#!">{{$t("footer.home")}}</a>
            </li>
            <li>
              <a href="#!">{{$t("footer.imprint")}}</a>
            </li>
            <li>
              <a href="#!">{{$t("footer.terms_and_conditions")}}</a>
            </li>
            <li>
              <a href="#!">{{$t("footer.privacy_policy")}}</a>
            </li>
            <li>
              <a href="#!" v-html="$t('footer.shipping_payment')"></a>
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