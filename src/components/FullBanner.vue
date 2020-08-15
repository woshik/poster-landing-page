<template>
  <section class="full-banner-view" id="home">
    <div class="full-banner">
      <div class="container">
        <div class="banner-height">
          <div class="row featurette banner-text">
            <div class="col-md-8">
              <h2 class="featurette-heading">
                <span class="text-muted"></span>
              </h2>
              <div class="heading-title">{{$t("banner.heading")}}</div>
              <div
                class="heading-title-default"
              >{{$t("banner.sub_heading", {kw: $route.query.kw ? $route.query.kw : 'Sternenhimmel'})}}</div>
              <ul class="features">
                <li>{{$t("banner.list.one")}}</li>
                <li>{{$t("banner.list.two")}}</li>
                <li>{{$t("banner.list.three")}}</li>
              </ul>
              <div
                class="features-details"
              >{{$t("banner.paragraph", {kw: $route.query.kw ? $route.query.kw : 'Sternenhimmel'})}}</div>
              <a
                href="https://editor.sternenhimmel-poster.de/new/"
                class="btn btn-features mt-3"
              >{{$t("banner.button_text")}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row featurette banner-text-off">
      <div class="col-md-6">
        <h2 class="featurette-heading">
          <span class="text-muted"></span>
        </h2>
        <div class="heading-title">{{$t("banner.heading")}}</div>
        <div class="heading-title-default">{{$t("banner.sub_heading")}}</div>
        <ul class="features">
          <li>{{$t("banner.list.one")}}</li>
          <li>{{$t("banner.list.two")}}</li>
          <li>{{$t("banner.list.three")}}</li>
        </ul>
        <div class="features-details">{{$t("banner.paragraph")}}</div>
        <a
          href="https://editor.sternenhimmel-poster.de/new/"
          class="btn btn-outline-primary btn-features mt-3"
        >{{$t("banner.button_text")}}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FullBanner",
};
</script>