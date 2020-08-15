<template>
  <section class="service-section">
    <div class="container marketing">
      <div class="row text-center">
        <div v-for="item in serviceList" :key="item.id" class="col-md-3 col-sm-6">
          <p>
            <font-awesome-icon :icon="item.icon" />
          </p>
          <h2 class="service-title">{{item.title}}</h2>
          <p class="service-subtitle">{{item.des}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Service",
  data() {
    return {
      serviceList: [
        {
          id: 1,
          title: this.$t("service.one.heading"),
          des: this.$t("service.one.paragraph"),
          icon: "gift",
        },
        {
          id: 2,
          title: this.$t("service.two.heading"),
          des: this.$t("service.two.paragraph"),
          icon: "vote-yea",
        },
        {
          id: 3,
          title: this.$t("service.three.heading"),
          des: this.$t("service.three.paragraph"),
          icon: "shipping-fast",
        },
        {
          id: 4,
          title: this.$t("service.four.heading"),
          des: this.$t("service.four.paragraph"),
          icon: "lock",
        },
      ],
    };
  },
};
</script>
