import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { T as Typewriter } from "../../chunks/Typewriter.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tw.svelte-12tk3yh{height:300px;text-align:center}.container.svelte-12tk3yh{margin:auto;width:50%;text-align:center}h1.svelte-12tk3yh{display:inline-block;position:relative}h1.svelte-12tk3yh::after{content:'';position:absolute;width:100%;transform:scaleX(0);height:3px;bottom:0;left:0;background-color:aliceblue;transform-origin:bottom right;transition:transform 0.25s ease-out}h1.svelte-12tk3yh:hover::after{transform:scaleX(1);transform-origin:bottom left}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-12tk3yh"}"><h1 class="${"svelte-12tk3yh"}">Welcome
    </h1></div>
<div class="${"tw svelte-12tk3yh"}">${validate_component(Typewriter, "Typewriter").$$render(
    $$result,
    {
      keepCursorOnFinish: true,
      delay: 500,
      mode: "cascade",
      interval: 60,
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
  )}
</div>`;
});
export {
  Page as default
};
