<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';

    let isInView: boolean;
    const options: Options = {
        rootMargin: '-200px',
        unobserveOnEnter: false,
    };

    const show = ({detail}: CustomEvent<ObserverEventDetails>) => {
        (isInView = detail.inView);
        console.log(isInView);
    };
</script>

<div use:inview={options} on:inview_change={show}>
    <h1 class="hide" class:show="{isInView}">
        Welcome.
    </h1>
</div>
<div use:inview={options} on:inview_change={show}>
    <p class="hide" class:show="{isInView}">
        This is my website.
    </p>
</div>
<div use:inview={options} on:inview_change={show}>
    <p class="hide" class:show="{isInView}">
        This site is still under construction!
    </p>
</div>

<div class="svgCont svg1"></div>

<div class="spacer">
    <div use:inview={options} on:inview_change={show}>
        <p class="hide" class:show="{isInView}">
            This is some text.
        </p>
    </div>
    <div use:inview={options} on:inview_change={show}>
        <p class="hide" class:show="{isInView}">
            This is some more text.
        </p>
    </div>
    <div use:inview={options} on:inview_change={show}>
        <p class="hide" class:show="{isInView}">
            I will probably put my projects here.
        </p>
    </div>
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