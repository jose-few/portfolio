<script>
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';

    let cara1;
    let cara2;

    function goBack() {
        cara1.goToPrev()
        cara2.goTo(cara1.currentPageIndex, {animated: false})
    }

    function goNext() {
        cara1.goToNext()
        cara2.goTo(cara1.currentPageIndex, {animated: false})
    }
</script>

<div class="bg-cont">
    <div>
        <p class="work-head">Check out what I've been up to:</p>
    </div>
    <div class="carousel-container">
        <div class="main-carousel">
            {#if browser}
                <Carousel arrows={false} swiping={false} dots={false} bind:this={cara1}>
                    <div>
                        <img id="aber" src="/Aber Uni logo 150th edition - MONO WHITE.png" alt="Aberystwyth Uni Logo White">
                    </div>
                    <div>
                        <img id="hawk" src="/hawksmoor-logo-white.png" alt="Hawksmoor Logo">
                    </div>
                </Carousel>
                <div class="btnCont">
                    <button id="prvBtn" on:click={goBack}><i class="fa-solid fa-arrow-left"></i></button>
                    <button id="nxtBtn" on:click={goNext}><i class="fa-solid fa-arrow-right"></i></button>
                </div>
            {/if}
        </div>
        <div class="second-carousel">
            {#if browser}
                <Carousel dots={false} swiping={false} arrows={false} bind:this={cara2}>
                    <div>
                        <p class="cara-head">
                            Aberystwyth University
                        </p>
                        <p class="cara-text">
                            2017 - 2021
                        </p>
                        <p class="cara-text">
                            I studied BSc I.T. at Aberystwyth University, where I discovered my love for development and problem solving.
                        </p>
                        <p class="cara-text">
                            The skills I learnt here have become invaluable to me, and are the foundation of my current abilities.
                        </p>
                    </div>
                    <div>
                        <p class="cara-head">
                            Hawksmoor IM
                        </p>
                        <p class="cara-text">
                            2021 - Present
                        </p>
                        <p class="cara-text">
                            I started at Hawksmoor as a PHP Developer, and I've been learning valuable skills on real-world development and project work.
                        </p>
                        <p class="cara-text">
                            I've worked closely with a variety of languages such as PHP, JS, MySQL, and VB. I've also used selection of softwares such as BitBucket and Dreamweaver.
                        </p>
                    </div>
                </Carousel>
            {/if}
        </div>
    </div>
</div>

<style>
    #aber {
        padding-top: 10svh;
        width: 35svw;
    }
    #hawk {
        width: 25svw;
    }
    .cara-head {
        font-size: 1.75rem;
        padding-bottom: 10px;
        padding-bottom: 10px;
    }
    .cara-text {
        font-size: 1.4rem;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    img {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
    .btnCont {
        display: flex !important;
        width: 50%;
        margin: auto;
        margin-top: 20px;
    }
    #prvBtn {
        margin-right: 5px;
    }
    #nxtBtn {
        margin-left: 5px;
    }
    button {
        width: 15%;
        padding: 10px 0px;
        margin: auto;
        background-color: transparent;
        border: 2px solid aliceblue;
        transition: all 0.35s ease-in-out;
        border-radius: 25px;
    }
    button:hover {
        background-color: aliceblue;
    }
    button i {
        color: aliceblue;
        transition: all 0.35s ease-in-out;
    }
    button:hover i{
        color: #001220;
    }
    .carousel-container {
        padding-top: 20px;
        display: flex;
        width: 100%;
        flex-direction: row;
    }
    .main-carousel, .second-carousel {
        width: 50%;
        margin: auto;
    }
    .work-head {
        margin-top: 5svh;
        font-size: 2rem;
        font-weight: 700;
        min-height: 40px;
    }
    .bg-cont {
        margin-top: 10svh;
        width: 100%;
        height: 60svh;
        border-color: aliceblue;
        border-width: 12px 0px;
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
    @media screen and (max-width: 600px) {
        img {
            width: 70svw !important;
        }
        .carousel-container {
            padding-top: 0px;
            flex-direction: column;
        }
        .main-carousel, .second-carousel {
            width: 90%;
            margin: auto;
        }
        .bg-cont {
            border-width: 7px 0px;
            height: 100svh;
        }
        .btnCont {
            padding-top: 1svh;
            padding-bottom: 1svh;
            width: 70%;
        }
        .work-head {
            font-size: 1.25rem;
        }
        .cara-text {
            font-size: 1.1rem;
        }
    }
</style>