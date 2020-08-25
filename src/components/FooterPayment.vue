<template>
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
</template>

<script>
import payment from "../assets/images/payment.png";
export default {
  name: "FooterPayment",
  data() {
    return {
      payment,
    };
  },
};
</script>
