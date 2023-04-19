<script lang="ts">
    import Typewriter from 'svelte-typewriter';
    import Work from './work/work.svelte';
</script>

<div class="container">
    <Typewriter keepCursorOnFinish={false} delay={500} mode={"cascade"} interval={30} showCursorOnDelay={false}>
        <h1>
            Welcome
        </h1>
    </Typewriter>
</div>
<div class="tw">
    <p>
        My name is Joe.
    </p>
    <p style="margin-top: 3%;">
        I'm a developer from Devon, England.
    </p>
    <p style="margin-top: 3%;">
        This is my website.
    </p>
</div>
<Work/>
<style>
    .tw {
        height: 300px;
        text-align: center;
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
</style>