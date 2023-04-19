<nav class="navholder">
    <ul class="navbar">
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="/about">About</a>
        </li>
        <li>
            <a href="/contact">Contact</a>
        </li>
    </ul>
</nav>

<link href='https://fonts.googleapis.com/css?family=Averia Sans Libre' rel='stylesheet'>

<slot></slot>

<div class="footer">
    <div class="footCont">
        <p class="footText" id="svLogoCont">Designed and built using <img id="svLogo" src="./1200px-Svelte_Logo.png" alt="Svelte."></p>
        <p class="footText"><i class="fa-regular fa-copyright"></i> 2023.</p>
        <div class="linkCont">
            <p class="footText" id="myLinks">My links:</p>
            <div class="links">
                <a href="https://github.com/jose-few"><i class="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/joseph-few-1a033b207/"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap');
    :global(body) {
        background-color: #001220;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        margin: 0;
        padding: 0;
        overflow: overlay;
        --cursor-color: aliceblue;
        --cursor-width: 3px;
    }
    :global(html) {
        margin: 0;
        padding: 0;
    }
    :global(.footer) {
        position: relative;
        min-height: 70vh;
        color: aliceblue;
        font-size: 1.25rem;
        text-align: center;
        background-image: url("../svg/animate_1.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #001220;
        overflow-x: hidden;
    }
    :global(.footCont) {
        width: 100%;
        position: absolute;
        margin: auto;
        bottom: 15px;
    }
    :global(.footText) {
        width: 50%;
        position: relative;
        margin: auto;
    }
    :global(.links) {
        width: 10%;
        position: relative;
        margin: 0;
    }
    :global(.linkCont) {
        width: 50%;
        display:flex;
        flex-direction: row;
        position: relative;
        margin: auto;
        align-items: center;
        justify-content: center;
    }
    :global(.links i) {
        size: 1.25rem;
        color: aliceblue;
    }
    :global(.spacer) {
        height: 150px;
        color: aliceblue;
        font-size: 1.5rem;
        text-align: center;
    }
    :global(h1) {
        font-weight: 900;
        color: aliceblue;
        text-align: center;
        font-size:4rem;
    }
    :global(h2) {
        color: aliceblue;
        font-weight: 700;
        text-align: center;
        font-size: 3rem;
    }
    :global(h4) {
        color: aliceblue;
        font-size: 1.75rem;
        font-weight: 600;
        margin: 10px;
        padding-top: 35px;
        padding-bottom: 10px;
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
        width: 50%;
        color: aliceblue;
        text-align: center;
        font-size: 1.5rem;
        margin: auto;
    }
    :global(.show) {
        opacity: 1 !important;
        transition: all 2s;
        filter: blur(0) !important;
        transform: translateY(0) !important;
    }
    :global(.hide) {
        opacity: 0;
        transition: all 2s;
        filter: blur(5px);
        transform: translateY(5px);
    }
    :global(::-webkit-scrollbar-track)
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: transparent;
    }
    :global(::-webkit-scrollbar)
    {
        width: 12px;
        background-color: transparent;
    }
    :global(::-webkit-scrollbar-thumb)
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
    }
    #svLogoCont {
        display: flex;
        justify-content: center;
    }
    #svLogo {
        width: 2%;
        align-self: center;
        margin-left: 5px;
    }
    #myLinks {
        width: 10%;
        margin: 0;
    }
    .navholder {
        height: 400px;
        width: 100%;
        text-align: center;
        background-image: url("../svg/animate_ud_2.svg");
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        background-color: #001220;
    }
    .navbar {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        margin-top: 15px;
        padding: 5px 10px 5px 10px;
        overflow: hidden;
        border-radius: 5px;
        background-color: transparent;
        /* box-shadow: 0 0 5px #001220; */
    }
    ul:hover li {
        opacity: 0.9;
        filter: blur(2px);
        -webkit-filter: blur(2px);
        transition: all 0.5s;
    }
    ul li:hover {
        opacity: 1;
        filter: blur(0);
        -webkit-filter: blur(0);
        transition: all 0.5s;
    }
    li {
        float: left;
        padding-left: 5px;
        padding-right: 5px;
    }
    li a {
        display: inline-block;
        position: relative;
        color: aliceblue;
        text-align: center;
        margin: 14px 16px;
        text-decoration: none;
        font-size: 2rem;
        font-weight: 500;
    }
    li a:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: aliceblue;
        transform-origin: bottom right;
        transition: transform 0.5s ease-out;
    }
    li a:hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
    @media screen and (max-width: 600px) {
        .linkCont {
            flex-direction: column;
            width: 85%;
        }
        .links {
            width: 100%;
        }
        .navbar {
            margin-top: 0;
        }
        ul {
            display: flex !important;
            flex-direction: column;
            max-width: 30vw;
            text-align: left;
        }
        a {
            font-size: 1.6rem !important;
        }
        .footer {
            max-height: 30svh;
            background-size: auto;
        }
        .footText {
            font-size: 1.2rem;
            width: 90% !important;
        }
        :global(.show) {
            opacity: 1 !important;
            transition: all 1s;
            filter: blur(0) !important;
            transform: translateY(0) !important;
        }
        :global(.hide) {
            opacity: 0;
            transition: all 1s;
            filter: blur(5px);
            transform: translateY(2px);
        }
        :global(h1) {
            font-size: 2.5rem;
        }
        :global(p) {
            font-size: 1.25rem;
            width: 90%;
        }
        :global(.spacer) {
            height: 50px;
        }
    }
    @media screen and (max-width: 320px) {
        a {
            font-size: 1.4rem !important;
        }
    }
</style>