<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';

    let isInView: boolean;
    const options: Options = {
        rootMargin: '-50px',
        unobserveOnEnter: true,
    };

    const show = ({detail}: CustomEvent<ObserverEventDetails>) => {
        (isInView = true);
    };

    const hide = ({detail}: CustomEvent<ObserverEventDetails>) => {
        (isInView = false);
    };
</script>

<div use:inview={options} on:inview_enter={show} on:inview_leave={hide}>
    <h1 class="hide" class:show={isInView}>
        Welcome.
    </h1>
</div>
<div use:inview={options} on:inview_enter={show} on:inview_leave={hide}>
    <p class="hide" class:show={isInView}>
        This is my website.
    </p>
</div>
<div use:inview={options} on:inview_enter={show} on:inview_leave={hide}>
    <p class="hide" class:show={isInView}>
        This site is still under construction!
    </p>
</div>

<div class="svgCont svg1"></div>

<div class="spacer">
    <p>
        This is some text.
    </p>
    <p>
        This is some more text.
    </p>
    <p>
        I will probably put my projects here.
    </p>
</div>

<div class="svgCont svg2"></div>

<div class="svgCont svg3"></div>

<style>
    .svg1 {
        background-image: url("../svg/waves_1.svg");
    }
    .svg2 {
        background-image: url("../svg/reverse_waves_1.svg");
    }
    .svg3 {
        background-image: url("../svg/waves_5.svg");
    }
</style>