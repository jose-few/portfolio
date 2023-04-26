import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as Typewriter } from "../../../chunks/Typewriter.js";
Promise.resolve();
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tw.svelte-1lfvo6u{height:300px}img.svelte-1lfvo6u{display:block;object-fit:cover;object-position:7%;border-radius:50%;aspect-ratio:1 / 1;width:30%;margin-left:auto;margin-right:auto;margin-bottom:5svh;margin-top:5svh}.container.svelte-1lfvo6u{margin:auto;width:50%;text-align:center}h1.svelte-1lfvo6u{display:inline-block;position:relative}h1.svelte-1lfvo6u::after{content:'';position:absolute;width:100%;transform:scaleX(0);height:3px;bottom:0;left:0;background-color:aliceblue;transform-origin:bottom right;transition:transform 0.25s ease-out}h1.svelte-1lfvo6u:hover::after{transform:scaleX(1);transform-origin:bottom left}@media screen and (max-width: 1350px){.tw.svelte-1lfvo6u{height:400px}}@media screen and (max-width: 1200px){.tw.svelte-1lfvo6u{height:600px}}@media screen and (max-width: 800px){.tw.svelte-1lfvo6u{height:600px}}@media screen and (max-width: 700px){.tw.svelte-1lfvo6u{height:600px}}@media screen and (max-width: 600px){img.svelte-1lfvo6u{width:65%}.tw.svelte-1lfvo6u{height:500px}}@media screen and (max-width: 500px){img.svelte-1lfvo6u{width:75%}.tw.svelte-1lfvo6u{height:400px}}@media screen and (max-width: 400px){.tw.svelte-1lfvo6u{height:400px}}@media screen and (max-width: 360px){.tw.svelte-1lfvo6u{height:500px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1lfvo6u"}">${validate_component(Typewriter, "Typewriter").$$render(
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
        return `<h1 class="${"svelte-1lfvo6u"}">About me
        </h1>`;
      }
    }
  )}</div>
<img class="${"hide svelte-1lfvo6u"}" src="${"/self-photo.png"}" alt="${"Me!"}">
<div class="${"tw svelte-1lfvo6u"}"><p>Hi there! I studied IT at Aberystwyth University, where I developed a passion for programming. Since graduating, I have been working as a Junior Developer at Hawksmoor, where I&#39;ve been developing not just code - but my skills as well. I&#39;m driven and hard working, and always eager to improve!
    </p>
    <p style="${"margin-top: 3%;"}">My skillset includes JS, PHP, and more! I have hand crafted this portfolio using the JS framework Svelte. Please contact me if you have any queries, or just want to chat!
    </p>
</div>`;
});
export {
  Page as default
};
