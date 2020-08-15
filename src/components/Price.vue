<template>
  <section class="album py-5 bg-light custom-middle-section">
    <div class="container-fluid">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="middle-section-title">{{$t("price.heading")}}</h1>
      </div>
      <div class="album py-5">
        <div class="container">
          <div class="row text-center align-items-center">
            <div v-for="(item, i) in priceList" :key="item.id" class="col-4">
              <img
                :class="[i === 1 ? 'price-img-active' : 'price-img']"
                :src="item.image"
                alt="price"
              />
            </div>
          </div>
          <!-- pricing desc -->
          <div class="row pt-5 pb-5">
            <!-- 1st cloumn -->
            <div v-for="item in priceList" :key="item.id" class="col-md-4 price-slot">
              <div class="card card-image">
                <div class="card-body">
                  <div class="card-title price-title">{{item.title}}</div>
                  <div class="price">{{item.price}}</div>
                  <div class="price-desc mt-4">
                    <div v-for="point in item.points" :key="point" class="d-flex flex-row">
                      <div class="custom-icon">
                        <font-awesome-icon icon="check-circle" class="mr-2" />
                      </div>
                      <div>{{point}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 1st column -->
          </div>
          <!-- pricing desc -->
          <div class="row">
            <poster-button :button-text="$t('price.button_text')" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PosterButton from "./generic/PosterButton";
import pricePoster1 from "../assets/images/price-1.png";
import pricePoster2 from "../assets/images/price-2.png";
import pricePoster3 from "../assets/images/price-3.png";

export default {
  name: "Price",
  components: {
    PosterButton,
  },
  data() {
    return {
      priceList: [
        {
          id: 1,
          title: this.$t("price.list.item_one.heading"),
          image: pricePoster1,
          price: this.$t("price.list.item_one.price"),
          points: [
            this.$t("price.list.item_one.sub_list.one"),
            this.$t("price.list.item_one.sub_list.two"),
          ],
        },
        {
          id: 2,
          title: this.$t("price.list.item_two.heading"),
          image: pricePoster2,
          price: this.$t("price.list.item_two.price"),
          points: [
            this.$t("price.list.item_two.sub_list.one"),
            this.$t("price.list.item_two.sub_list.two"),
            this.$t("price.list.item_two.sub_list.three"),
          ],
        },
        {
          id: 3,
          title: this.$t("price.list.item_three.heading"),
          image: pricePoster3,
          price: this.$t("price.list.item_three.price"),
          points: [
            this.$t("price.list.item_three.sub_list.one"),
            this.$t("price.list.item_three.sub_list.two"),
            this.$t("price.list.item_three.sub_list.three"),
          ],
        },
      ],
    };
  },
};
</script>