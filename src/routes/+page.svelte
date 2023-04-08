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

<div class="hide" use:inview={options} on:inview_change={show}>
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