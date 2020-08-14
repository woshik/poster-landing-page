<template>
  <header>
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 bg-white border-bottom shadow-sm custom-navbar"
    >
      <a href="#" class="mr-md-auto">
        <img src="../assets/images/logo-light.png" />
      </a>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">Home</a>
        <a class="p-2 text-dark" href="#">Wie es funktioniert</a>
        <a class="p-2 text-dark" href="#">Inspiration</a>
      </nav>
      <a class="btn btn-outline-primary btn-zum-editor" href="#">
        <font-awesome-icon icon="edit" />Zum Editor
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>