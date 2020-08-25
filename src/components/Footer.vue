<template>
  <div class="container-fluid footer-upper-container">
    <div class="row text-center">
      <div class="col-12">
        <ul class="list-horizontal">
          <li>
            <router-link :to="'/'+$route.params.lang">{{$t("footer.home")}}</router-link>
          </li>
          <li>
            <router-link :to="'/'+$route.params.lang+'/impressum'">{{$t("footer.imprint")}}</router-link>
          </li>
          <li>
            <router-link :to="'/'+$route.params.lang+'/agb'">{{$t("footer.terms_and_conditions")}}</router-link>
          </li>
          <li>
            <router-link :to="'/'+$route.params.lang+'/datenschutzerklaerung'">{{$t("footer.privacy_policy")}}</router-link>
          </li>
          <li>
            <router-link :to="'/'+$route.params.lang+'/versand'" v-html="$t('footer.shipping_payment')"></router-link>
          </li>
        </ul>
      </div>
      <div class="col-md-6 mx-auto">
        <div class="footer-copyright" v-html="$t('footer.text')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>