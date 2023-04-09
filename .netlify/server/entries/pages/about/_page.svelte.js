import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as Typewriter } from "../../../chunks/Typewriter.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1fgsx52{display:block;object-fit:cover;object-position:23%;border-radius:50%;aspect-ratio:1 / 1;width:30%;margin-left:auto;margin-right:auto;margin-bottom:5svh;margin-top:5svh}.container.svelte-1fgsx52{margin:auto;width:50%;text-align:center}h1.svelte-1fgsx52{display:inline-block;position:relative}h1.svelte-1fgsx52::after{content:'';position:absolute;width:100%;transform:scaleX(0);height:3px;bottom:0;left:0;background-color:aliceblue;transform-origin:bottom right;transition:transform 0.25s ease-out}h1.svelte-1fgsx52:hover::after{transform:scaleX(1);transform-origin:bottom left}@media screen and (max-width: 500px){img.svelte-1fgsx52{width:75%}}@media screen and (max-width: 600px){img.svelte-1fgsx52{width:65%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1fgsx52"}"><h1 class="${"svelte-1fgsx52"}">About me
    </h1></div>
<img src="${"/IMG_5905.JPG"}" alt="${"Me!"}" class="${"svelte-1fgsx52"}">
${validate_component(Typewriter, "Typewriter").$$render(
    $$result,
    {
      keepCursorOnFinish: true,
      delay: 500,
      mode: "cascade",
      interval: 80,
      showCursorOnDelay: true
    },
    {},
    {
      default: () => {
        return `<p>I am a developer from Devon, England. I studied IT at Aberystwyth University, where 
        I developed a passion for programming. Since graduating, I have been working as a 
        Junior Developer at Hawksmoor, where I have been developing not just code - but my 
        skills as well.
    </p>
    <p style="${"margin-top: 3%;"}">My skillset includes JS, PHP, and more! I have hand crafted this portfolio using 
        the JS framework Svelte. Please contact me if you have any queries or just want 
        to chat!
    </p>`;
      }
    }
  )}`;
});
export {
  Page as default
};
