<script lang="ts">
    import Typewriter from 'svelte-typewriter';
</script>

<div class="container">
    <h1>
        About me
    </h1>
</div>
<img src="/IMG_5905.JPG" alt="Me!">
<div class="tw">
    <Typewriter keepCursorOnFinish={false} delay={500} mode={"cascade"} interval={60} showCursorOnDelay={true}>
        <p>
            I'm a developer from Devon, England. I studied IT at Aberystwyth University, where I developed a passion for programming. Since graduating, I have been working as a Junior Developer at Hawksmoor, where I've been developing not just code - but my skills as well. I'm driven and hard working, and always eager to improve!
        </p>
    </Typewriter>
    <Typewriter keepCursorOnFinish={true} delay={20500} mode={"cascade"} interval={60} showCursorOnDelay={false}>
        <p style="margin-top: 3%;">
            My skillset includes JS, PHP, and more! I have hand crafted this portfolio using the JS framework Svelte. Please contact me if you have any queries or just want to chat!
        </p>
    </Typewriter>
</div>
<style>
    .tw {
        height: 300px;
    }
    img {
        display: block;
        object-fit: cover;
        object-position: 23%;
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
    @media screen and (max-width: 1350px) {
        .tw {
            height: 400px;
        }
    }
    @media screen and (max-width: 1200px) {
        .tw {
            height: 600px;
        }
    }
    @media screen and (max-width: 800px) {
        .tw {
            height: 600px;
        }
    }
    @media screen and (max-width: 700px) {
        .tw {
            height: 600px;
        }
    }
    @media screen and (max-width: 600px) {
        img {
            width: 65%;
        }
        .tw {
            height: 500px;
        }
    }
    @media screen and (max-width: 500px) {
        img {
            width: 75%;
        }
        .tw {
            height: 400px;
        }
    }
    @media screen and (max-width: 400px) {
        .tw {
            height: 400px;
        }
    }
    @media screen and (max-width: 360px) {
        .tw {
            height: 500px;
        }
    }
</style>