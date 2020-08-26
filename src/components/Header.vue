<template>
  <header>
    <b-navbar toggleable="lg" type="dark" class="custom-navbar">
      <b-navbar-brand :href="'/'+$route.params.lang">
        <img :src="logo" width="100%" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <span
            v-for="item in menuItems"
            :key="item.id"
            class="p-2 mr-3"
            @click="navClick(item.link)"
          >{{item.name}}</span>
          <a class="btn btn-zum-editor" href="https://editor.sternenhimmel-poster.de/new/">
            <font-awesome-icon icon="edit" class="mr-1" />Zum Editor
          </a>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import logo from "../assets/images/logo-light.png";

export default {
  name: "Header",
  data() {
    return {
      logo,
      menuItems: [
        { id: 1, link: "home", name: this.$t("header.home") },
        { id: 2, link: "our-works", name: this.$t("header.how_it_works") },
        { id: 3, link: "inspiration", name: this.$t("header.inspiration") },
      ],
    };
  },
  methods: {
    navClick: function (hash) {
      let element = document.getElementById(hash);

      if (!element) {
        this.$router.push(`/${this.$route.params.lang}#${hash}`);
        return;
      }

      if (hash) {
        window.scroll({
          top: window.scrollY + element.getBoundingClientRect().top,
          behavior: "smooth",
        });
      } else {
        window.scroll({
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style scoped>
.navbar-nav span {
  color: #fff;
  cursor: pointer;
  font-size: 17px;
  font-weight: bolder;
}
</style>