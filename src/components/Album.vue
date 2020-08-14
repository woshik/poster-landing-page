<template>
  <section class="album py-5 bg-light custom-middle-section">
    <div class="container-fluid custom-image-container">
      <p
        class="middle-section-title custom-margin-1"
      >Das perfekte personalisierte Geschenk für deine Liebsten</p>
      <div class="row">
        <div v-for="item in cardItems" :key="item.id" class="col-md-3">
          <div class="card mb-4 shadow-sm card-image">
            <img class="card-img-top" :src="item.image" alt="1-quad" />
            <div class="card-body">
              <p class="card-image-text">{{item.title}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Quad1 from "../assets/images/1-quad.png";
import Quad2 from "../assets/images/2-quad.png";
import Quad3 from "../assets/images/3-quad.png";
import Quad4 from "../assets/images/4-quad.png";

export default {
  name: "Album",
  data() {
    return {
      cardItems: [
        { id: 1, image: Quad1, title: "Außergewöhnliches Geschenk" },
        { id: 2, image: Quad2, title: "Persönliche Widmung" },
        { id: 3, image: Quad3, title: "Individuelle Auswahl des Designs" },
        { id: 4, image: Quad4, title: "Hochwertiger Druck" },
      ],
    };
  },
};
</script>