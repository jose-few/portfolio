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
        Get in touch.
    </h1>
</div>
<div class="spacer"></div>
<div class="hide" use:inview={options} on:inview_change={show}>
    <form name="contact" method="POST" data-netlify="true" action="/contact">
        <div>
            <h4>Fill out the form and hit send :)</h4>
        </div>
        <div>
            <input id="form_name" type="text" placeholder="Your name." required>
        </div>
        <div>
            <input id="form_email" type="text" placeholder="Your email." required>
        </div>
        <div>
            <textarea id="form_msg" placeholder="Your query." rows="9" required></textarea>
        </div>
        <div>
            <button type="submit">Send</button>
        </div>
    </form>
</div>