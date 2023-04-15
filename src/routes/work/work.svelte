<script>
    import Typewriter from 'svelte-typewriter';
    import Carousel from 'svelte-carousel';
    import { browser } from '$app/environment';

    let cara1;
    let cara2;

    function goBack() {
        cara1.goToPrev()
        cara2.goToPrev()
    }

    function goNext() {
        cara1.goToNext()
        cara2.goToNext()
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
                    <div>
                        <p>
                            Hawksmoor
                        </p>
                    </div>
                    <div>
                        <p>
                            Hawksmoor Test
                        </p>
                    </div>
                </Carousel>
                <button on:click={goBack}>Prev</button>
                <button on:click={goNext}>Next</button>
            {/if}
        </div>
        <div class="second-carousel">
            {#if browser}
                <Carousel dots={false} swiping={false} arrows={false} bind:this={cara2}>
                    <div>
                        <p>
                            2021 - Present
                        </p>
                    </div>
                    <div>
                        <p>
                            2021 - Present Test
                        </p>
                    </div>
                </Carousel>
            {/if}
        </div>
    </div>
</div>

<style>
    @media screen and (max-width: 600px) {
        .carousel-container {
            padding-top: 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .main-carousel {
            width: 80%;
            margin: auto;
        }
        .second-carousel {
            width: 80%;
            margin: auto;
        }
    }
    .carousel-container {
        padding-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .main-carousel {
        width: 40%;
        margin: auto;
    }
    .second-carousel {
        width: 40%;
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