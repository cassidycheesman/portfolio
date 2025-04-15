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

</style>
