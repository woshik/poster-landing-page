<template>
  <section class="text-center py-5" id="inspiration">
    <div class="container">
      <h1 class="jumbotron-heading">{{$t("gallery.heading")}}</h1>
      <p
        class="lead text-muted"
      >{{$t("gallery.sub_heading",{kw: $route.query.kw ? $route.query.kw : 'Sternenhimmel'})}}</p>
      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div v-for="item in galleryItems" :key="item.id" class="col-md-3 col-sm-6 col-6">
              <div class="card mb-4 shadow-sm card-image">
                <div class="card-title card-title-bottom">{{item.title}}</div>
                <img class="card-img-top" v-lazy="item.image" :alt="item.title" />
              </div>
            </div>
          </div>
          <div class="row mb-md-5">
            <poster-button
              :button-text="$t('gallery.button_text', {kw: $route.query.kw ? $route.query.kw : 'Sternenhimmel'})"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PosterButton from "./generic/PosterButton";
import gallery1 from "../assets/images/gallery-1.jpg";
import gallery2 from "../assets/images/gallery-2.jpg";
import gallery3 from "../assets/images/gallery-3.jpg";
import gallery4 from "../assets/images/gallery-4.jpg";
import gallery5 from "../assets/images/gallery-5.jpg";
import gallery6 from "../assets/images/gallery-6.jpg";
import gallery7 from "../assets/images/gallery-7.jpg";
import gallery8 from "../assets/images/gallery-8.jpg";

export default {
  name: "Gallery",
  components: {
    PosterButton,
  },
  data() {
    return {
      galleryItems: [
        { id: 1, image: gallery1, title: this.$t("gallery.list.love") },
        { id: 2, image: gallery2, title: this.$t("gallery.list.friendship") },
        { id: 3, image: gallery3, title: this.$t("gallery.list.anniversary") },
        { id: 4, image: gallery4, title: this.$t("gallery.list.wedding") },
        { id: 5, image: gallery5, title: this.$t("gallery.list.birth") },
        { id: 6, image: gallery6, title: this.$t("gallery.list.birthday") },
        { id: 7, image: gallery7, title: this.$t("gallery.list.success") },
        { id: 8, image: gallery8, title: this.$t("gallery.list.adventure") },
      ],
    };
  },
};
</script>