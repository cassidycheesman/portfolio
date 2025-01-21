<script setup>
import { ref } from 'vue'
const slideInterval = ref(5000)
import NavBar from '@/components/nav.vue'
import FootBar from '@/components/footer.vue'
</script>

<template>
    <header>
        <NavBar />
    </header>
    <main>
        <h1 class="main-heading">
            Careful, developer at work<span class="title-period">.</span>
        </h1>
    </main>
    <footer>
    <FootBar />
  </footer>
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
  color: rgb(88, 116, 141);
  /* Change this to the desired color */
}
</style>