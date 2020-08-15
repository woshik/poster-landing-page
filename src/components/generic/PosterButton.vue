<template>
  <div class="col-md-12 text-center">
    <button class="btn btn-design-poster">{{buttonText}}</button>
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
