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
      default: "Jetzt dein Sternenhimmel Poster gestalten und Freude bereiten!",
    },
  },
};
</script>

<style>
.btn-design-poster {
  width: 604.38px;
  height: 48px;
  margin-top: 30px;
  background-color: #ffad1b !important;
  outline: none !important;
  border: none !important;
  border-radius: 10px;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.5) !important;
  font-family: "Varela Round" !important;
  font-size: 18px;
  color: #fff;
}
</style>