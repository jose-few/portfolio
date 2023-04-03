<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';

    const options: Options = {
        rootMargin: '-100px',
        unobserveOnEnter: false,
        threshold: 0.9
    };

    const show = ({detail}: CustomEvent<ObserverEventDetails>) => {
        let isInView: boolean;
        (isInView = detail.inView);
        //console.log(detail.node);
        if (isInView) {
            detail.node.classList.add('show');
        } else {
            detail.node.classList.remove('show');
        }
    };
</script>

<div class="hide" use:inview={options} on:inview_change={show}>
    <h1>
        Welcome.
    </h1>
</div>
<div class="hide" use:inview={options} on:inview_change={show}>
    <p>
        This is my website.
    </p>
</div>
<div class="hide" use:inview={options} on:inview_change={show}>
    <p>
        This site is still under construction!
    </p>
</div>

<div class="svgCont svg1"></div>

<div class="spacer">
    <div class="hide" use:inview={options} on:inview_change={show}>
        <p>
            This is some text.
        </p>
    </div>
    <div class="hide" use:inview={options} on:inview_change={show}>
        <p>
            This is some more text.
        </p>
    </div>
    <div class="hide" use:inview={options} on:inview_change={show}>
        <p>
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