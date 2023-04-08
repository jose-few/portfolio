<script lang="ts">
    import Typewriter from 'svelte-typewriter';
</script>

<div class="container">
    <h1>
        About me
    </h1>
</div>
<img src="..\src\img\IMG_5905.JPG" alt="Me!">
<Typewriter keepCursorOnFinish={true} delay={500} mode={"cascade"} interval={80} showCursorOnDelay={true}>
    <p>
        I am a developer from Devon, England. I studied IT at Aberystwyth University, where 
        I developed a passion for programming. Since graduating, I have been working as a 
        Junior Developer at Hawksmoor, where I have been developing not just code - but my 
        skills as well.
    </p>
    <p style="margin-top: 3%;">
        My skillset includes JS, PHP, and more! I have hand crafted this portfolio using 
        the JS framework Svelte. Please contact me if you have any queries or just want 
        to chat!
    </p>
</Typewriter>
<style>
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
    @media screen and (max-width: 500px) {
        img {
            width: 75%;
        }
    }
    @media screen and (max-width: 600px) {
        img {
            width: 65%;
        }
    }
</style>