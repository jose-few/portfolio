import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { T as Typewriter } from "../../chunks/Typewriter.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1rritbw{margin:auto;width:50%;text-align:center}h1.svelte-1rritbw{display:inline-block;position:relative}h1.svelte-1rritbw::after{content:'';position:absolute;width:100%;transform:scaleX(0);height:3px;bottom:0;left:0;background-color:aliceblue;transform-origin:bottom right;transition:transform 0.25s ease-out}h1.svelte-1rritbw:hover::after{transform:scaleX(1);transform-origin:bottom left}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1rritbw"}"><h1 class="${"svelte-1rritbw"}">Welcome
    </h1></div>
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
        return `<p>My name is Joe.
    </p>
    <p style="${"margin-top: 3%;"}">This is my portfolio.
    </p>
    <p style="${"margin-top: 3%;"}">I will probably put my projects here.
    </p>`;
      }
    }
  )}`;
});
export {
  Page as default
};
