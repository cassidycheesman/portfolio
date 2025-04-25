<script setup>
import { ref } from 'vue'
import NavBar from '@/components/nav.vue'
import FootBar from '@/components/footer.vue'
</script>

<template>
    <header>
        <NavBar />
    </header>

    <main>
        <div class="background">
            <h1 class="second-heading">
                Research<span class="title-period-second">.</span>
            </h1>

            <div class="video-container">
                <vue-plyr>
                    <video controls crossorigin playsinline data-poster="poster.jpg">
                        <source :src="`${baseDir}videos/SeamPoseVideo.mp4`" type="video/mp4" />
                    </video>
                </vue-plyr>
            </div>

            <div class="pdf-container">
                <embed class="SeamPose" :src="`${baseDir}pdfs/SeamPose.pdf`" />
            </div>
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

.background {
    background-color: rgb(88, 116, 141);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
}

.second-heading {
    font-family: 'Times New Roman', Times, serif;
    font-size: 7.5rem;
    text-align: center;
    margin-top: 5vw;
    margin-bottom: 3vw;
    color: rgb(255, 255, 255);
}

.video-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    max-width: 900px;
    margin: 2rem auto;
}

video {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.pdf-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 2rem auto;
}

.SeamPose {
    width: 100%;
    height: 80vh;
    border: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
</style>
