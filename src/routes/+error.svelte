<script>
    import { page } from '$app/stores';
</script>


<h1>Oh no!</h1>
<h2>{$page.status}: {$page.error.message}</h2>
<p>That page you're trying to access couldn't be found, sorry!</p>

<div class="svgCont svg1"></div>

<style>
    .svg1 {
        background-image: url("../svg/waves_2.svg");
    }
</style>