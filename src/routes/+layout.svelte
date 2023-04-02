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
        margin: 0 auto;
        padding: 50px 0;
        text-align: center;
        background-image: url("../svg/navbar_1.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #001220;
    }
    .navbar {
        list-style: none;
        list-style-type: none;
        text-align: center;
        overflow: hidden;
    }
    li {
        display: inline-block;
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
    li a,
    li a:after,
    li a:before {
        transition: all .5s;
    }
    li a:hover {
        color: #555;
        opacity: 100%;
    }
    nav.fill ul li a {
        position: relative;
    }
    nav.fill ul li a:after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: #aaa;
        height: 1px;
    }
    nav.fill ul li a {
        transition: all 2s;
    }
    nav.fill ul li a:after {
        text-align: left;
        content: '.';
        margin: 0;
        opacity: 0;
    }
    nav.fill ul li a:hover {
        color: #fff;
        z-index: 1;
    }
    nav.fill ul li a:hover:after {
        z-index: -10;
        animation: fill 1s forwards;
        -webkit-animation: fill 1s forwards;
        -moz-animation: fill 1s forwards;
        opacity: 1;
    }
    @-webkit-keyframes fill {
        0% {
            width: 0%;
            height: 1px;
        }
        50% {
            width: 100%;
            height: 1px;
        }
        100% {
            width: 100%;
            height: 100%;
            background: #333;
        }
    }
</style>