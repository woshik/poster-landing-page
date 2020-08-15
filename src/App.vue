<template>
  <home />
</template>

<script>
export default {
  name: "App",
  components: {
    Home: () => import("./screen/Home"),
  },
};
</script>