<template>
  <header>
    <b-navbar toggleable="lg" type="dark" class="custom-navbar">
      <router-link :to="{name: 'home'}" class="navbar-brand">
        <img :src="logo" alt="logo" width="100%" />
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <li v-for="item in menuItems" :key="item.id">
            <span class="p-2 mr-3" @click="navClick(item.link)">{{item.name}}</span>
          </li>
          <li>
            <a class="btn btn-zum-editor" href="https://editor.sternenhimmel-poster.de/new/">
              <font-awesome-icon icon="edit" class="mr-1" />Zum Editor
            </a>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
import logo from "../assets/images/logo-light.png";
import { BNavbar, BNavbarToggle, BCollapse, BNavbarNav } from "bootstrap-vue";

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
  components: {
    BNavbar,
    BNavbarToggle,
    BCollapse,
    BNavbarNav,
  },
  methods: {
    navClick: function (hash) {
      let element = document.getElementById(hash);
      this.$router.push(`/${this.$route.params.lang}#${hash}`);
      if (!element) return;
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