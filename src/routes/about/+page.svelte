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
        About me
    </h1>
</div>
<div class="spacer"></div>
<div class="hide" use:inview={options} on:inview_change={show}>
    <p>
        I am a developer from Devon, England. I studied IT at Aberystwyth University, where 
        I developed a passion for programming. Since graduating, I have been working as a 
        Junior Developer at Hawksmoor, where I have been developing not just code - but my 
        skills as well.
    </p>
</div>
<div class="spacer"></div>
<div class="hide" use:inview={options} on:inview_change={show}>
    <p>
        My skillset includes JS, PHP, and more! I have hand crafted this portfolio using 
        the JS framework Svelte. Please contact me if you have any queries or just want 
        to chat!
    </p>
</div>
<div class="spacer"></div>