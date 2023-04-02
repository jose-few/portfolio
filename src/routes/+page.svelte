<script>
    import IntersectionObserver from "svelte-intersection-observer";

    let element;
</script>

<div>
    <IntersectionObserver
     {element}
     on:observe="{(e) => {
        if (e.detail.isIntersecting) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
        console.log(e.detail.isIntersecting);
        }}"
    >
        <h1 class="hide" bind:this="{element}">
            Welcome.
        </h1>
    </IntersectionObserver>
    <IntersectionObserver
     {element}
     on:observe="{(e) => {
        if (e.detail.isIntersecting) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
        console.log(e.detail.isIntersecting);
        }}"
    >
    <p class="hide" bind:this="{element}">
        This is my website.
    </p>
    </IntersectionObserver>
    <IntersectionObserver
     {element}
     on:observe="{(e) => {
        if (e.detail.isIntersecting) {
            element.classList.add('show');
        } else {
            element.classList.remove('show');
        }
        console.log(e.detail.isIntersecting);
        }}"
    >
    <p class="hide" bind:this="{element}">
        This site is still under construction!
    </p>
    </IntersectionObserver>
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