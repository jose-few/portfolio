<nav class="navholder fill">
    <ul class="navbar">
        <li>
            <a class="navlink" href="/">Home</a>
        </li>
        <li>
            <a class="navlink" href="/about">About</a>
        </li>
    </ul>
</nav>

<link href='https://fonts.googleapis.com/css?family=Averia Sans Libre' rel='stylesheet'>

<slot></slot>

<div class="footer">
    <p class="footText">I will stick some links here.</p>
</div>

<style>
    :global(body) {
        background-color: #001220;
        font-family: 'Averia Sans Libre';
        margin: 0;
        padding: 0;
    }
    :global(html) {
        margin: 0;
        padding: 0;
    }
    :global(.footer) {
        height: 200px;
        color: aliceblue;
        font-size: 1.5rem;
        text-align: center;
        background-color: #6824b9;
    }
    :global(.footText) {
        margin: 0;
    }
    :global(.spacer) {
        height: 150px;
        color: aliceblue;
        font-size: 1.5rem;
        text-align: center;
        background-color: #6824b9;
    }
    :global(h1) {
        color: aliceblue;
        text-align: center;
        font-size:4rem;
    }
    :global(h2) {
        color: aliceblue;
        text-align: center;
        font-size: 3rem;
    }
    :global(.svgCont) {
        overflow-x: hidden;
        width: 100%;
        height: 1080px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }
    :global(p) {
        color: aliceblue;
        text-align: center;
        font-size: 1.5rem;
        margin: 0;
    }
    .navholder {
        height: 200px;
        width: 100%;
        margin: 0;
        text-align: center;
        background-image: url("../svg/navbar_1.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #001220;
    }
    .navbar {
        padding: 0;
        list-style: none;
        list-style-type: none;
        text-align: center;
        overflow: hidden;
    }
    nav:hover li {
        filter: blur(2px);
        transition: all 100ms ease-in-out;
        font-size: 1.75rem;
    }
    li {
        display: inline-block;
    }
    nav li a:hover {
        opacity: 1;
        font-size: 2.25rem;
        filter: blur(0px);
        transition: all 100ms ease-in-out;
    }
    li a {
        display: block;
        color: aliceblue;
        margin: 0 10px;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 2rem;
        border-radius: 25px;
        opacity: 0.8;
    }
</style>