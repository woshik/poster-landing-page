<template>
  <section class="text-center" id="our-works" style="padding: 100px 0 0 0">
    <div class="container-fluid">
      <h1 class="jumbotron-heading">{{$t("our_work.heading")}}</h1>
      <p class="lead text-muted card-image-text">{{$t("our_work.sub_heading")}}</p>
      <div class="album py-5">
        <div class="container-fluid">
          <div class="row">
            <div v-for="item in videoItem" :key="item.id" class="col-md-4">
              <div class="card mb-4 shadow-sm card-image">
                <div class="card-title card-title3">{{item.title}}</div>
                <img v-lazy="item.gif" width="100%" :alt="item.title" />
                <poster-button :button-text="item.mobile_button" class="word-poster-mobile-button" />
              </div>
            </div>
          </div>
          <div class="row">
            <poster-button
              :button-text="$t('our_work.button_text',{kw: $route.query.kw ? $route.query.kw : 'Sternenhimmel'})"
              class="word-poster-destop-button"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PosterButton from "./generic/PosterButton";
import work1 from "../assets/images/work1.gif";
import work2 from "../assets/images/work2.gif";
import work3 from "../assets/images/work3.gif";
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
          gif: work1,
          title: this.$t("our_work.list.one"),
          mobile_button: this.$t("our_work.mobile_button.one"),
        },
        {
          id: 2,
          gif: work2,
          title: this.$t("our_work.list.two"),
          mobile_button: this.$t("our_work.mobile_button.two"),
        },
        {
          id: 3,
          gif: work3,
          title: this.$t("our_work.list.three"),
          mobile_button: this.$t("our_work.mobile_button.three", {
            kw: this.$route.query.kw ? this.$route.query.kw : "Sternenhimmel",
          }),
        },
      ],
    };
  },
};
</script>