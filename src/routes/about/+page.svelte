<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';

    const options: Options = {
        root: document.body,
        rootMargin: '-100px',
        unobserveOnEnter: false,
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

<div>
    <div class="hide" use:inview={options} on:inview_change={show}>
        <h1>
            About me.
        </h1>
    </div>
    <div class="hide" use:inview={options} on:inview_change={show}>
        <p>
            This will be my about page.
        </p>
    </div>
</div>

<div class="svgCont svg1"></div>

<div class="spacer">
    <div class="hide" use:inview={options} on:inview_change={show}>
        <p>
            This is where I will write about myself.
        </p>
    </div>
</div>

<div class="svgCont svg2"></div>

<div class="svgCont svg3"></div>

<style>
    .svg1 {
        background-image: url("../../svg/waves_4.svg");
    }
    .svg2 {
        background-image: url("../../svg/reverse_waves_2.svg");
    }
    .svg3 {
        background-image: url("../../svg/waves_6.svg");
    }
</style>