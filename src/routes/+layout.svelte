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
    .navholder {
        width: 100%;
        text-align: center;
    }
    .navbar {
        display: inline-block;
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #001220;
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
        font-size: 1.5rem;
    }
</style>

<slot></slot>