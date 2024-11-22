<script setup>
import NavBar from '@/components/nav.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <h1 class="main-heading">
      Creative Cross-Disciplinary Innovation<span class="title-period">.</span>
    </h1>
    <div class = "experience">
      <div class = "xptype">
        <h3>
          12+ years
        </h3>
        <p>
          of fine art experience
        </p>
      </div>
      <div class = "xptype">
        <h3>
          8+ years
        </h3>
        <p>
          of CS experience
        </p>
      </div>
      <div class = "xptype">
        <h3>
          5+ years
        </h3>
        <p>
          of HCI experience
        </p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.main-heading {
  font-family: 'Times New Roman', Times, serif;
  font-size: 7.5rem;
  text-align: left;
  margin-top: 10vw;
  margin-left: 7vw;
  margin-right: 7vw;
}

.title-period {
  color: rgb(44, 118, 192); /* Change this to the desired color */
}

.experience {
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem; /* Adjust the margin as needed */
  margin-left: 7vw;
}

.xptype {
  text-align: left;
  margin-right: 3rem;
  padding-right: 2vw;
}

.xptype h3 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 2.5rem; /* Adjust the size as needed */
  font-weight: bold;
}

.xptype p {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem; /* Adjust the size as needed */
  margin-top: 0.5rem; /* Adjust the margin as needed */
}


</style>
