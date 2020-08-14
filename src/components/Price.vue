<template>
  <section class="album py-5 bg-light custom-middle-section">
    <div class="container-fluid">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="middle-section-title">Produkte und Preise</h1>
      </div>
      <div class="album py-5">
        <div class="container">
          <div class="row text-center align-self-center align-self-center align-items-center">
            <div class="col-md-4">
              <img class="price-img" src="../assets/images/price-1.png" alt="price" />
            </div>
            <div class="col-md-4">
              <img class="price-img-active" src="../assets/images/price-2.png" alt="price" />
            </div>
            <div class="col-md-4">
              <img class="price-img" src="../assets/images/price-3.png" alt="price" />
            </div>
          </div>
          <!-- pricing desc -->
          <div class="row align-self-center align-self-center align-items-center mt-5">
            <!-- 1st cloumn -->
            <div class="col-md-4">
              <div class="card card-image">
                <div class="card-body">
                  <div class="card-title price-title">Digital-Druckdatei</div>
                  <div class="price">ab 19 €</div>
                  <div class="price-desc mt-4">
                    <div class="d-flex flex-row">
                      <div>
                        <i class="fa fa-check-circle mr-2" area-hidden="true"></i>
                      </div>
                      <div>Hochauflösende Druckdatei zum selber Drucken</div>
                    </div>
                    <div class="d-flex flex-row">
                      <div>
                        <i class="fa fa-check-circle mr-2" area-hidden="true"></i>
                      </div>
                      <div>Hochauflösende Druckdatei zum selber Drucken</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 1st column -->
            <!-- 2nd cloumn -->
            <div class="col-md-4">
              <div class="card card-image">
                <div class="card-body">
                  <div class="card-title price-title">Digital-Druckdatei</div>
                  <div class="price">ab 19 €</div>
                  <div class="price-desc mt-4">
                    <div class="d-flex flex-row">
                      <div>
                        <i class="fa fa-check-circle mr-2" area-hidden="true"></i>
                      </div>
                      <div>Hochauflösende Druckdatei zum selber Drucken</div>
                    </div>
                    <div class="d-flex flex-row">
                      <div>
                        <i class="fa fa-check-circle mr-2" area-hidden="true"></i>
                      </div>
                      <div>Hochauflösende Druckdatei zum selber Drucken</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 2nd column -->
            <!-- 3rd cloumn -->
            <div class="col-md-4">
              <div class="card card-image">
                <div class="card-body">
                  <div class="card-title price-title">Digital-Druckdatei</div>
                  <div class="price">ab 19 €</div>
                  <div class="price-desc mt-4">
                    <div class="d-flex flex-row">
                      <div>
                        <i class="fa fa-check-circle mr-2" area-hidden="true"></i>
                      </div>
                      <div>Hochauflösende Druckdatei zum selber Drucken</div>
                    </div>
                    <div class="d-flex flex-row">
                      <div>
                        <i class="fa fa-check-circle mr-2" area-hidden="true"></i>
                      </div>
                      <div>Hochauflösende Druckdatei zum selber Drucken</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 3rd column -->
          </div>
          <!-- pricing desc -->
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
  name: "Price",
  components: {
    PosterButton,
  },
};
</script>