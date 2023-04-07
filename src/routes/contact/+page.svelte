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
        width: 30vw;
        min-width: 30vw;
        height: 70svh;
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
        width: 45%;
        font-size: 1.25rem;
        padding: 10px;
        margin: 10px;
        font-family: 'Roboto', sans-serif;
        background-color: aliceblue;
        border-radius: 5px;
        border: none;
        transition: 500ms all;
    }
    @media screen and (max-width: 600px) {
        form {
            min-width: 90vw;
            min-height: 90svh;
        }
        h1 {
            font-size: 2.5rem;
        }
        .spacer {
            height: 50px;
        }
        #form_name, #form_email, #form_msg {
            min-width: 85%;
        }
        button {
            width: 50%;
        }
    }
</style>