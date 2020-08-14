<template>
  <section class="container">
    <div class="row featurette text-center">
      <div class="col-md-7">
        <h2 class="featurette-heading">Astronomisch korrekt</h2>
        <p class="featurette-heading-subtitle">
          Wir verwenden den Sternenkatalog der Hipparcos-Mission der Europäischen
          Weltraumorganisation,
          einen hochpräzisen Sternenkatalog, der vom weltraumgestützten Hipparcos-Teleskop erzeugt wird. Wir verwenden
          diesen Sternenkatalog, um die Positionen der Sterne für jedes Datum und jeden Ort in der Vergangenheit oder
          Zukunft zu bestimmen.
          <br />Deine Karte ist daher immer astronomisch korrekt!
        </p>
        <button class="btn btn-feature">Jetzt deinen Sternenhimmel gestalten!</button>
      </div>
      <div class="col-md-5">
        <video
          src="https://sternenhimmel-poster.gumlet.com/wp-content/uploads/2020/05/Sternenhimmel.mov"
          autoplay
          loop
          muted="muted"
          playsinline
          controlslist="nodownload"
        ></video>
      </div>
    </div>

    <div class="row featurette text-center">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">Verewige die schönsten Momente</h2>
        <p class="featurette-heading-subtitle">
          Erinnere Dich und deine Liebsten zurück an besondere Momente und
          Erinnerungen. Genau diese
          Momente machen ein Leben aus und dies kannst du nun als Kunstwerk verewigen. Wähle Ort und Datum des
          besonderen Momentes und personalisiere das Poster mit Deiner persönlichen Widmung oder Botschaft.
          <br />Du kannst Meisterwerke kreieren, die Emotionen wecken, an besondere Momente im Leben erinnern und zeigen,
          wie viel Dir ein ganz spezieller Mensch bedeutet.
        </p>
        <button class="btn btn-feature">Jetzt deinen Sternenhimmel gestalten!</button>
      </div>
      <div class="col-md-5 order-md-1">
        <img
          class="featurette-image img-fluid mx-auto"
          src="../assets/images/poster.png"
          alt="poster"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Poster",
};
</script>