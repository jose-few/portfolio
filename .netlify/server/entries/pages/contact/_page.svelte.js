import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as Typewriter } from "../../../chunks/Typewriter.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1dme10w{margin:auto;width:50%;text-align:center}h1.svelte-1dme10w{display:inline-block;position:relative}h1.svelte-1dme10w::after{content:'';position:absolute;width:100%;transform:scaleX(0);height:3px;bottom:0;left:0;background-color:aliceblue;transform-origin:bottom right;transition:transform 0.25s ease-out}h1.svelte-1dme10w:hover::after{transform:scaleX(1);transform-origin:bottom left}form.svelte-1dme10w{position:relative;margin:auto;width:35svw;min-width:35svw;height:75svh;min-height:70svh;background-color:#00203a;border-radius:10px;color:#001220;text-align:center;box-shadow:0 0 2px black}#form_name.svelte-1dme10w,#form_email.svelte-1dme10w,#form_msg.svelte-1dme10w{width:70%;font-size:1.25rem;padding:10px;margin:10px;font-family:'Roboto', sans-serif;background-color:aliceblue;border:none;border-radius:5px;min-width:70%;max-width:70%}#form_msg.svelte-1dme10w{resize:none}button.svelte-1dme10w:hover{background-color:#EEFFDB;transition:500ms all}button.svelte-1dme10w{position:relative;bottom:0;width:50%;min-width:45%;font-size:1.25rem;padding:10px;margin-top:5svh;font-family:'Roboto', sans-serif;background-color:aliceblue;border-radius:5px;border:none;transition:500ms all;color:#001220}@media screen and (max-width: 1000px){form.svelte-1dme10w{height:75svh;width:80svw;min-width:70svw;min-height:75svh}h1.svelte-1dme10w{font-size:2.25rem}h4.svelte-1dme10w{font-size:1.5rem}#form_name.svelte-1dme10w,#form_email.svelte-1dme10w,#form_msg.svelte-1dme10w{min-width:75%;font-size:1.1rem}button.svelte-1dme10w{width:40%;min-width:35%;color:#001220;font-size:1.1rem}}@media screen and (max-width: 600px){form.svelte-1dme10w{height:75svh;width:90svw;min-width:90svw;min-height:75svh}h1.svelte-1dme10w{font-size:1.95rem}h4.svelte-1dme10w{font-size:1.25rem}#form_name.svelte-1dme10w,#form_email.svelte-1dme10w,#form_msg.svelte-1dme10w{min-width:85%;font-size:1.05rem}button.svelte-1dme10w{width:40%;min-width:35%;color:#001220;font-size:1.05rem}}@media screen and (max-width: 500px){form.svelte-1dme10w{height:70svh;width:95svw;min-width:95svw;min-height:70svh}h1.svelte-1dme10w{font-size:1.85rem}h4.svelte-1dme10w{font-size:1.15rem}#form_name.svelte-1dme10w,#form_email.svelte-1dme10w,#form_msg.svelte-1dme10w{min-width:85%;font-size:1.03rem}button.svelte-1dme10w{width:50%;min-width:45%;color:#001220;font-size:1.03rem}}@media screen and (max-width: 400px){form.svelte-1dme10w{height:85svh;width:95svw;min-width:95svw;min-height:85svh}}@media screen and (max-width: 375px){form.svelte-1dme10w{height:90svh;width:95svw;min-width:95svw;min-height:90svh}}@media screen and (max-width: 360px){form.svelte-1dme10w{height:95svh;width:95svw;min-width:95svw;min-height:95svh}}@media screen and (max-width: 320px){form.svelte-1dme10w{height:100svh;width:95svw;min-width:95svw;min-height:100svh}h1.svelte-1dme10w{font-size:1.74rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1dme10w"}">${validate_component(Typewriter, "Typewriter").$$render(
    $$result,
    {
      keepCursorOnFinish: false,
      delay: 500,
      mode: "cascade",
      interval: 30,
      showCursorOnDelay: false
    },
    {},
    {
      default: () => {
        return `<h1 class="${"svelte-1dme10w"}">Get in touch
        </h1>`;
      }
    }
  )}</div>

<div class="${"spacer"}"></div>

<form name="${"contact"}" method="${"POST"}" data-netlify="${"true"}" action="${"/contact"}" class="${"svelte-1dme10w"}"><input type="${"hidden"}" name="${"form-name"}" value="${"contact"}">
    <div><h4 class="${"svelte-1dme10w"}">Fill out the form and hit send.</h4></div>
    <div><input id="${"form_name"}" type="${"text"}" name="${"name"}" placeholder="${"Your name."}" required class="${"svelte-1dme10w"}"></div>
    <div><input id="${"form_email"}" type="${"email"}" name="${"email"}" placeholder="${"Your email."}" required class="${"svelte-1dme10w"}"></div>
    <div><textarea id="${"form_msg"}" placeholder="${"Your query."}" name="${"message"}" rows="${"12"}" required class="${"svelte-1dme10w"}"></textarea></div>
    <button type="${"submit"}" class="${"svelte-1dme10w"}">Send</button>
</form>`;
});
export {
  Page as default
};
