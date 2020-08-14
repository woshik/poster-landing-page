<template>
  <section class="text-center">
    <div class="container-fluid">
      <h1 class="jumbotron-heading custom-top-bottom-margin">Wie es funktioniert</h1>
      <p
        class="lead text-muted card-image-text"
      >Erstelle dein Sternhimmel Poster in nur drei einfachen Schritten.</p>
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
            <PosterButton />
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
          title: "1. Ort und Datum",
        },
        {
          id: 2,
          video:
            "https://sternenhimmel-poster.gumlet.com/wp-content/uploads/2020/05/Editor-1.2.mov",
          title: "2. Persönliche Widmung",
        },
        {
          id: 3,
          video:
            "https://sternenhimmel-poster.gumlet.com/wp-content/uploads/2020/05/Editor-1.3.mov",
          title: "3. Dein Design",
        },
      ],
    };
  },
};
</script>