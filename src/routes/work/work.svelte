<script>
    import Typewriter from 'svelte-typewriter';
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';

    let cara1;
    let cara2;

    function goBack() {
        cara1.goToPrev()
        cara2.goToPrev({animated: false})
    }

    function goNext() {
        cara1.goToNext()
        cara2.goToNext({animated: false})
    }
</script>

<div class="bg-cont">
    <div class="text-cont">
        <Typewriter delay={4000} interval={50}>
            <p class="work-head">Check out what I've been up to:</p>
        </Typewriter>
    </div>
    <div class="carousel-container">
        <div class="main-carousel">
            {#if browser}
                <Carousel arrows={false} swiping={false} dots={false} bind:this={cara1}>
                    <div class="cara-text">
                        <p>
                            Aberystwyth University
                        </p>
                        <p>
                            2017 - 2021
                        </p>
                    </div>
                    <div class="cara-text">
                        <p>
                            Hawksmoor IM
                        </p>
                        <p>
                            2021 - Present
                        </p>
                    </div>
                </Carousel>
                <button id="prvBtn" on:click={goBack}><i class="fa-solid fa-arrow-left"></i></button>
                <button id="nxtBtn" on:click={goNext}><i class="fa-solid fa-arrow-right"></i></button>
            {/if}
        </div>
        <div class="second-carousel">
            {#if browser}
                <Carousel dots={false} swiping={false} arrows={false} bind:this={cara2}>
                    <div class="cara-text">
                        <p>
                            I studied a BSc in I.T. at Aber Uni, where I quickly found a passion for development and problem solving.
                        </p>
                    </div>
                    <div class="cara-text">
                        <p>
                            I started at Hawksmoor as a PHP Developer, and I've been learning valuable skills on real-world development and project work.
                        </p>
                    </div>
                </Carousel>
            {/if}
        </div>
    </div>
</div>

<style>
    @media screen and (max-width: 600px) {
        .carousel-container div {
            display: block;
        }
        .main-carousel {
            width: 80%;
            margin: auto;
        }
        .second-carousel {
            width: 80%;
            margin: auto;
        }
        .bg-cont {
            border-width: 12px 0px;
        }
    }
    button {
        width: 20%;
        padding: 10px;
        margin: auto;
        background-color: transparent;
        border: 2px solid aliceblue;
    }
    button i {
        color: aliceblue;
    }
    .cara-text p {
        padding: 10px;
    }
    .carousel-container {
        padding-top: 20px;
    }
    .carousel-container div {
        display: inline;
    }
    .main-carousel {
        width: 30svw;
        margin: auto;
    }
    .second-carousel {
        width: 30svw;
        margin: auto;
    }
    .work-head {
        font-size: 1.8rem;
    }
    .text-cont {
        margin: 20px;
        min-height: 40px;
    }
    .bg-cont {
        margin-top: 10svh;
        width: 100%;
        height: 60svh;
        border-color: aliceblue;
        border-width: 17px 0px;
        border-style: solid;
        background-image: linear-gradient(
        135deg,
        hsl(240deg 100% 20%) 0%,
        hsl(289deg 100% 21%) 11%,
        hsl(315deg 100% 27%) 22%,
        hsl(329deg 100% 36%) 33%,
        hsl(337deg 100% 43%) 44%,
        hsl(357deg 91% 59%) 56%,
        hsl(17deg 100% 59%) 67%,
        hsl(34deg 100% 53%) 78%,
        hsl(45deg 100% 50%) 89%,
        hsl(55deg 100% 50%) 100%
        );
    }
</style>