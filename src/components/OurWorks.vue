<template>
  <section class="text-center" id="our-works" style="padding: 100px 0 50px 0">
    <div class="container-fluid">
      <h1 class="jumbotron-heading">{{$t("our_work.heading")}}</h1>
      <p class="lead text-muted card-image-text">{{$t("our_work.sub_heading")}}</p>
      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div v-for="item in videoItem" :key="item.id" class="col-md-4">
              <div class="card mb-4 shadow-sm card-image">
                <div class="card-title card-title3">{{item.title}}</div>
                <video
                  :src="item.video"
                  autoplay
                  loop
                  muted="muted"
                  playsinline
                  controlslist="nodownload"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <poster-button
              :button-text="$t('our_work.button_text',{kw: $route.query.kw ? $route.query.kw : 'Sternenhimmel'})"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PosterButton from "./generic/PosterButton";

export default {
  name: "OurWorks",
  components: {
    PosterButton,
  },
  data() {
    return {
      videoItem: [
        {
          id: 1,
          video:
            "https://sternenhimmel-poster.gumlet.com/wp-content/uploads/2020/05/Editor-1.1.1.mov",
          title: this.$t("our_work.list.one"),
        },
        {
          id: 2,
          video:
            "https://sternenhimmel-poster.gumlet.com/wp-content/uploads/2020/05/Editor-1.2.mov",
          title: this.$t("our_work.list.two"),
        },
        {
          id: 3,
          video:
            "https://sternenhimmel-poster.gumlet.com/wp-content/uploads/2020/05/Editor-1.3.mov",
          title: this.$t("our_work.list.three"),
        },
      ],
    };
  },
};
</script>