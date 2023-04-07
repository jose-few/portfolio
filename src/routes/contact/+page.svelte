<div class="container">
    <h1>
        Get in touch.
    </h1>
</div>

<div class="spacer"></div>

<form name="contact" method="POST" data-netlify="true" action="/contact">
    <input type="hidden" name="form-name" value="contact" />
    <div>
        <h4>Fill out the form and hit send.</h4>
    </div>
    <div>
        <input id="form_name" type="text" name="name" placeholder="Your name." required>
    </div>
    <div>
        <input id="form_email" type="email" name="email" placeholder="Your email." required>
    </div>
    <div>
        <textarea id="form_msg" placeholder="Your query." name="message" rows="12" required></textarea>
    </div>
    <div>
        <button type="submit">Send</button>
    </div>
</form>
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
    form {
        margin: auto;
        width: 50svw;
        min-width: 40svw;
        height: 75svh;
        min-height: 70svh;
        background-color: #00203a;
        border-radius: 10px;
        color: #001220;
        text-align: center;
        box-shadow: 0 0 2px black;
    }
    #form_name, #form_email, #form_msg {
        width: 70%;
        font-size: 1.25rem;
        padding: 10px;
        margin: 10px;
        font-family: 'Roboto', sans-serif;
        background-color: aliceblue;
        border: none;
        border-radius: 5px;
        min-width: 70%;
        max-width: 70%;
    }
    #form_msg {
        resize: none;
    }
    button:hover {
        background-color: #EEFFDB;
        transition: 500ms all;
    }
    button {
        width: 50%;
        min-width: 45%;
        font-size: 1.25rem;
        padding: 10px;
        margin: 10px;
        font-family: 'Roboto', sans-serif;
        background-color: aliceblue;
        border-radius: 5px;
        border: none;
        transition: 500ms all;
        color: #001220;
    }
    @media screen and (max-width: 1000px) {
        form {
            height: 100svh;
            width: 80svw;
            min-width: 70svw;
            min-height: 90svh;
        }
        h1 {
            font-size: 2.25rem;
        }
        h4 {
            font-size: 1.5rem;
        }
        #form_name, #form_email, #form_msg {
            min-width: 75%;
            font-size: 1.1rem;
        }
        button {
            width: 40%;
            min-width: 35%;
            color: #001220;
            font-size: 1.1rem;
        }
    }
    @media screen and (max-width: 600px) {
        form {
            height: 95svh;
            width: 90svw;
            min-width: 90svw;
            min-height: 90svh;
        }
        h1 {
            font-size: 1.95rem;
        }
        h4 {
            font-size: 1.25rem;
        }
        #form_name, #form_email, #form_msg {
            min-width: 85%;
            font-size: 1.05rem;
        }
        button {
            width: 40%;
            min-width: 35%;
            color: #001220;
            font-size: 1.05rem;
        }
    }
    @media screen and (max-width: 500px) {
        form {
            height: 105svh;
            width: 90svw;
            min-width: 90svw;
            min-height: 105svh;
        }
        h1 {
            font-size: 1.85rem;
        }
        h4 {
            font-size: 1.15rem;
        }
        #form_name, #form_email, #form_msg {
            min-width: 85%;
            font-size: 1.03rem;
        }
        button {
            width: 50%;
            min-width: 45%;
            color: #001220;
            font-size: 1.03rem;
        }
    }
</style>