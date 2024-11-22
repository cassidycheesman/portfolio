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
        <p>
          I am a jack of all trades, master of some. Through my diverse experiences and toolbelt of skills, I am able to approach problems from a unique perspective and create innovative solutions. I am passionate about working with others to find new solutions to old problems.
        </p>
        <p>
          The superpower I bring to the table is my positive energy and ability to bring people together. Every problem has a solution, we may just not have the right minds on it yet. I am here to help bring those minds together and create something amazing.
        </p>
      </div>
      <img class="portrait" src="/public/images/portrait.jpg" alt="A photo of Cassidy Cheesman">
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
  color: rgb(44, 118, 192);
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
  background-color: rgb(93, 141, 188);
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
  /* Change this to the desired color */
}

.about-heading {
  font-family: 'Times New Roman', Times, serif;
  font-size: 4rem;
  margin-bottom:2vh;
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
</style>
