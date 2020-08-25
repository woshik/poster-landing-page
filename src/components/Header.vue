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
          <a
            v-for="item in menuItems"
            :key="item.id"
            v-scroll-to="item.element"
            class="p-2 mr-3"
            href="#"
          >{{item.name}}</a>
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
        { id: 1, element: "#home", name: this.$t("header.home") },
        { id: 2, element: "#our-works", name: this.$t("header.how_it_works") },
        { id: 3, element: "#inspiration", name: this.$t("header.inspiration") },
      ],
    };
  },
};
</script>