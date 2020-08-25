<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Header: () => import("./components/Header"),
  },
};
</script>