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