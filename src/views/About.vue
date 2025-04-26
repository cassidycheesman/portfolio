<script setup>
import NavBar from '@/components/nav.vue'
import FootBar from '@/components/footer.vue'
</script>

<template>
    <header>
        <NavBar />
    </header>

    <main>

        <div class="content-container">
            <h1 class="second-heading">
            About<span class="title-period-second">.</span>
        </h1>
            <h3>
                Born and raised in Boulder County, I have been crafting and inventing since I could get my hands on
                the materials. My mom loves to tell the story about having to hide the hot glue gun when I was home
                alone or else she would come back to cardboard castles and prosthetic hands covering the kitchen
                table. I became very adept with duct tape because of this.
            </h3>
            <h3>
                At Cornell University, I focused on interactive technology and delved deep into wearable tech. I was
                fortunate to work with SciFi Lab on research and become published as a result. I spent my free time
                as a captain of the Varsity Track and Field team at Cornell, and was added to the Cornell Strength
                and Conditioning Wall of Honor. My collegiate side quests included my minor in Global Asian Studies,
                because of which I have become conversational in Japanese.
            </h3>
            <h3>
                My experience and abilities cross a wide range of disciplines, and my favorite thing to do is pull
                ideas and practices from unusual and exciting industries into novel technologies. Please feel free
                to reach out if you would like to talk innovation!
            </h3>
        </div>

        <div class="education-container">
            <h2>
                Education<span class="title-period-second">.</span>
            </h2>
            <p>Cornell University, Bachelor of Arts in Information Science, Interactive Technology</p>
            <p>Minor in Global Asian Studies</p>
            <p>3.7 GPA, 5x Dean’s List</p>
        </div>

        <div class="resume-container">
            <h2>
                Resume<span class="title-period-second">.</span>
            </h2>
            <embed class="Resume" :src="`${baseDir}pdfs/Resume.pdf`" />
        </div>
    </main>

    <footer>
        <FootBar />
    </footer>
</template>

<style scoped>
.title-period-second {
    color: rgb(0, 0, 0);
}

.second-heading {
    font-family: 'Times New Roman', Times, serif;
    font-size: 7.5rem;
    text-align: center;
    margin-top: 5vw;
    margin-bottom: 3vw;
    color: rgb(255, 255, 255);
}

.content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(88, 116, 141);
    color: rgb(255, 255, 255);
    text-align: justify;
}

.content-container h3 {
    font-family: 'Trebuchet MS', sans-serif;
  font-size: 1.8rem;
  /* Adjust the size as needed */
  text-align: center;
  width: 60vw;
    margin-bottom: 1.5rem;
    /* Add vertical space between paragraphs */
}

.education-container,
.resume-container {
    background-color: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    margin: 2rem auto;
    color: rgb(0, 0, 0);
}

.education-container h2,
.resume-container h2 {
    font-family: 'Times New Roman', Times, serif;
    /* Times New Roman font */
    font-size: 4rem;
    /* Bigger font size */
    margin-bottom: 2rem;
    margin-top: 1rem;
    text-align: center;
    color: rgb(0, 0, 0);
}

.education-container h2 span,
.resume-container h2 span {
    color: rgb(88, 116, 141);
    /* Blue period */
}

.education-container p,
.resume-container p {
    font-family: 'Trebuchet MS', sans-serif;
  font-size: 1.3rem;
  /* Adjust the size as needed */
    text-align: center;
}

.Resume {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    height: 90vh;
    border: none;
}
</style>
