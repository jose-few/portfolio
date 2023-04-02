<script>
    function show(e) {
        const observer = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                let elem = entries[0].target;
                elem.classList.add('show');
            } else {
                let elem = entries[0].target;
                elem.classList.remove('show');
            }
        }, options);

        observer.observe(e);
    }
</script>

<div>
    <h1 use:show>
        Welcome.
    </h1>
    <p>
        This is my website.
    </p>
    <p>
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