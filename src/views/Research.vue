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
        <div class = "background">
            <h1 class="second-heading">
                Research <span class="title-period-second">.</span>
            </h1>

            <div class="seam">
            <h2 class="rtitle">
                SeamPose
            </h2>

            <h3 class="rdescription">
                Repurposing Seams as Capacitive Sensors in a Shirt for Upper-Body Pose Tracking
            </h3>
            </div>

            <vue-plyr>
                <video controls crossorigin playsinline data-poster="poster.jpg">
                    <source :src="`${baseDir}videos/SeamPoseVideo.mp4`" type="video/mp4" />
                </video>
            </vue-plyr>

            <embed class="SeamPose" :src="`${baseDir}pdfs/SeamPose.pdf`" />
        </div>
    </main>

    <footer>
        <FootBar />
    </footer>
</template>

<style scoped>
.background {
    background-color: rgb(88, 116, 141);;
}

.second-heading {
    font-family: 'Times New Roman', Times, serif;
    font-size: 7.5rem;
    text-align: left;
    margin-top: 10vw;
    margin-left: 7vw;
    margin-right: 7vw;
    color: rgb(255, 255, 255);
}

.title-period {
    color: rgb(0, 0, 0);
}

.seam{
    display:flex;
    flex-direction: column;
    align-items: center;
}

.rtitle {
    font-family: 'Times New Roman', Times, serif;
    font-size: 2.5rem;
    /* Adjust the size as needed */
    font-weight: bold;
    color: rgb(255, 255, 255);
}

.rdescription {
    font-family: 'Times New Roman', Times, serif;
    font-size: 2.5rem;
    /* Adjust the size as needed */
    font-weight: bold;
    color: rgb(255, 255, 255);
}
</style>
