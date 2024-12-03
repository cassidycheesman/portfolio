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
      Creative Cross-Disciplinary Innovation<span class="title-period">.</span>
    </h1>
    <div class="experience">
      <div class="xptype">
        <h3>
          12+ years
        </h3>
        <p>
          of fine art experience
        </p>
      </div>
      <div class="xptype">
        <h3>
          8+ years
        </h3>
        <p>
          of CS experience
        </p>
      </div>
      <div class="xptype">
        <h3>
          5+ years
        </h3>
        <p>
          of HCI experience
        </p>
      </div>
    </div>

    <div class="me">
      <div class="textabout">
        <h2 class="about-heading">
          About Me<span class="title-period-reverse">.</span>
        </h2>
        <h3 class="about-sub">
          I am a jack of all trades, master of some.
        </h3>
        <p>
          Through my diverse experiences and toolbelt of skills, I am able to approach problems from a unique
          perspective and create innovative solutions. I am passionate about working with others to find new solutions
          to old problems.
        </p>
        <p>
          The superpowers I bring to the table are my positive energy, curiosity, and ability to bring people together.
          Every problem has a solution, we may just not have the right minds on it yet. I am here to help bring those
          minds together and create something amazing.
        </p>
      </div>
      <img class="portrait" src="/images/portrait.jpg" alt="A photo of Cassidy Cheesman">
    </div>

    <div class="favproj">
      <div class="carousel-title">
        <h2 class="about-heading">
          Favorite Projects<span class="title-period">.</span>
        </h2>
        <p>
          A quick look at some of my favorite projects I have worked on. My projects range in disciplines - from fine art to mechanical design to full stack development - but all include a deep understanding of the user, creative touches, and a problem solved. Head to my projects page to see more!
        </p>
      </div>
      <div class="carousel">
        <BCarousel :interval="slideInterval" controls indicators ride="carousel" class="projcarousel">
          <BCarouselSlide img-src="/images/littleman1.png">
            <h1 class = "carousel-heading">Running Automaton</h1>
          </BCarouselSlide>
          <BCarouselSlide img-src="/images/cmachine.jpg">
            <h1 class = "carousel-heading">Automated Cocktail Machine</h1>
          </BCarouselSlide>
          <BCarouselSlide img-src="/images/prisonerexpress.png">
            <h1 class = "carousel-heading2">Prisoner Express PWA</h1>
          </BCarouselSlide>
        </BCarousel>
      </div>
    </div>
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

.experience {
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
  /* Adjust the margin as needed */
  margin-left: 7vw;
}

.xptype {
  text-align: left;
  margin-right: 3rem;
  padding-right: 2vw;
  padding-bottom: 11vw;
}

.xptype h3 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 2.5rem;
  /* Adjust the size as needed */
  font-weight: bold;
}

.xptype p {
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 1rem;
  /* Adjust the size as needed */
  margin-top: 0.5rem;
  /* Adjust the margin as needed */
}

.me {
  display: flex;
  justify-content: center;
  background-color: rgb(88, 116, 141);
  /* Change this to the desired color */
}

.portrait {
  width: 30vw;
  /* Adjust the width as needed */
  height: auto;
  margin-right: 9vw;
  margin-top: 5vw;
  margin-bottom: 5vw;
}

.title-period-reverse {
  color: white;
}

.about-heading {
  font-family: 'Times New Roman', Times, serif;
  font-size: 4rem;
  margin-bottom: 2vh;
}

.textabout {
  text-align: right;
  margin-left: 7vw;
  margin-right: 5vw;
  margin-top: 5vw;
  margin-bottom: 5vw;
}

.textabout p {
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 1.3rem;
  /* Adjust the size as needed */
  text-align: right;
  width: 40vw;
}

.about-sub {
  font-family: 'Times New Roman', Times, serif;
  font-size: 2rem;
  margin-bottom: 2.5vh;
}

.favproj {
  margin-top: 13vw;
  margin-bottom: 11vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.carousel-title {
  text-align: end;
  margin-right: 3vw;
  width: 35vw;
}

.carousel-title p {
  font-family: 'Trebuchet MS', sans-serif;
  font-size: 1.3rem;
}

.projcarousel {
  width: 45vw;
}

.carousel-heading {
  font-family: 'Times New Roman', Times, serif;
  font-size: 2.5rem;
  color: white;
  text-decoration: underline;
}

.carousel-heading2 {
  font-family: 'Times New Roman', Times, serif;
  font-size: 2.5rem;
  color: black;
  text-decoration: underline;
}
</style>
