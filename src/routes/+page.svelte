<script lang="ts">
    import Typewriter from 'svelte-typewriter';
</script>

<div class="container">
    <h1>
        Welcome
    </h1>
</div>
<Typewriter keepCursorOnFinish={true} delay={500} mode={"cascade"} interval={80} showCursorOnDelay={true}>
    <p>
        My name is Joe.
    </p>
    <p style="margin-top: 3%;">
        This is my portfolio.
    </p>
    <p style="margin-top: 3%;">
        I will probably put my projects here.
    </p>
</Typewriter>
<style>
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
</style>