<script lang="ts">
    import Typewriter from 'svelte-typewriter';
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';
    const options: Options = {
        root: null,
        rootMargin: '-50px',
        unobserveOnEnter: false,
    };
    const show = ({detail}: CustomEvent<ObserverEventDetails>) => {
        let isInView: boolean;
        (isInView = detail.inView);
        //console.log(detail.node);
        if (isInView) {
            detail.node.classList.add('show');
        }
    };
</script>

<div class="container">
    <Typewriter keepCursorOnFinish={false} delay={500} mode={"cascade"} interval={30} showCursorOnDelay={false}>
        <h1>
            About me
        </h1>
    </Typewriter>
</div>
<img class="hide" use:inview={options} on:inview_change={show} src="/self-photo.png" alt="Me!">
<div class="tw">
    <p>
        Hi there! I studied IT at Aberystwyth University, where I developed a passion for programming. Since graduating, I have been working as a Junior Developer at Hawksmoor, where I've been developing not just code - but my skills as well. I'm driven and hard working, and always eager to improve!
    </p>
    <p style="margin-top: 3%;">
        My skillset includes JS, PHP, and more! I have hand crafted this portfolio using the JS framework Svelte. Please contact me if you have any queries, or just want to chat!
    </p>
</div>
<style>
    img {
        display: block;
        object-fit: cover;
        object-position: 7%;
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        width: 30%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 5svh;
        margin-top: 5svh;
    }
    .container {
        margin: auto;
        width: 50%;
        text-align: center;
    }
    h1 {
        display: inline-block;
        position: relative;
    }
    h1::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: aliceblue;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }
    h1:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    @media screen and (max-width: 600px) {
        img {
            width: 65%;
        }
    }
    @media screen and (max-width: 500px) {
        img {
            width: 75%;
        }
        
    }
</style>