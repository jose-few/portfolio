<script lang="ts">
    import { inview } from 'svelte-inview';
    import type { ObserverEventDetails, Options } from 'svelte-inview';

    const options: Options = {
        root: null,
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

<div class="container">
    <h1>
        Welcome
    </h1>
</div>
<div class="spacer"></div>
<div class="hide" use:inview={options} on:inview_change={show}>
    <p>
        My name is Joe
    </p>
</div>
<div class="spacer"></div>
<div class="hide" use:inview={options} on:inview_change={show}>
    <p>
        This is my portfolio
    </p>
</div>
<div class="spacer"></div>
<div class="hide" use:inview={options} on:inview_change={show}>
    <p>
        I will probably put my projects here.
    </p>
</div>
<div class="spacer"></div>
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