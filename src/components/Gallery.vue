<template>
  <section class="text-center py-5">
    <div class="container">
      <h1 class="jumbotron-heading">Das außergewöhnliche Geschenk für jeden Anlass</h1>
      <p class="lead text-muted">
        Für jeden Anlass ist das Sternenhimmel Poster das perfekte Geschenk. Der
        personalisierte Sternenhimmel verewigt dabei besondere Momente und Erinnerungen. Es macht nicht nur dir
        Freude, sondern auch deinen Liebsten mit denen du diese Momente teilst.
      </p>
      <div class="album py-5">
        <div class="container">
          <div class="row">
            <div v-for="item in galleryItems" :key="item.id" class="col-md-3">
              <div class="card mb-4 shadow-sm card-image">
                <div class="card-title card-title-bottom">{{item.title}}</div>
                <img class="card-img-top" :src="item.image" :alt="item.title" />
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
        { id: 1, image: gallery1, title: "Liebe" },
        { id: 2, image: gallery2, title: "Freundschaft" },
        { id: 3, image: gallery3, title: "Jahrestag" },
        { id: 4, image: gallery4, title: "Hochzeit" },
        { id: 5, image: gallery5, title: "Geburt" },
        { id: 6, image: gallery6, title: "Geburtstag" },
        { id: 7, image: gallery7, title: "Erfolg" },
        { id: 8, image: gallery8, title: "Abenteuer" },
      ],
    };
  },
};
</script>