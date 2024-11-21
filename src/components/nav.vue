<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-navbar-brand href="#">Cassidy Cheesman</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#projects">Projects</b-nav-item>
        <b-nav-item href="#research">Research</b-nav-item>
        <b-nav-item href="#about">About</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar-brand {
  font-family: 'Times New Roman', Times, serif;
  font-size: 2rem;
}

.b-nav-item {
  font-family: Arial, sans-serif;
  font-size: 1rem;
}
</style>
