<template>
  <div class="col-md-12 text-center">
    <a
      href="https://editor.sternenhimmel-poster.de/new/"
      class="btn btn-design-poster"
    >{{buttonText}}</a>
  </div>
</template>

<script>
export default {
  name: "PosterButton",
  props: {
    buttonText: {
      type: String,
    },
  },
};
</script>
