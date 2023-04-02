<nav class="navholder">
    <ul class="navbar">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
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
    :global(.show) {
        opacity: 1 !important;
        transition: all 2s;
    }
    :global(.hide) {
        opacity: 0;
        transition: all 2s;
    }
    .navholder {
        height: 200px;
        width: 100%;
        text-align: center;
        background-image: url("../svg/navbar_1.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #001220;
    }
    .navbar {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    ul:hover li {
        opacity: 0.9;
        filter: blur(2px);
        -webkit-filter: blur(2px);
        transition: all 100ms ease-in-out;
    }
    ul:hover li a {
        font-size: 1.75rem;
    }
    li {
        float: left;
    }
    li a {
        display: block;
        color: aliceblue;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 2rem;
        border-radius: 25px;
    }
    ul li:hover {
        opacity: 1;
        filter: blur(0);
        -webkit-filter: blur(0);
        transition: all 100ms ease-in-out;
    }
    ul li a:hover{
        font-size: 2.25rem;
    }
</style>