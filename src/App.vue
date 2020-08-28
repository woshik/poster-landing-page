<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/style.css";

export default {
  name: "App",
  components: {
    Header: () => import("./components/Header"),
  },
};
</script>