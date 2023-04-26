import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { T as Typewriter } from "../../chunks/Typewriter.js";
import "easy-reactive";
const Dot_svelte_svelte_type_style_lang = "";
const Dots_svelte_svelte_type_style_lang = "";
const Arrow_svelte_svelte_type_style_lang = "";
const Progress_svelte_svelte_type_style_lang = "";
const Carousel_svelte_svelte_type_style_lang = "";
const work_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "#aber.svelte-h59u8h.svelte-h59u8h{padding-top:10svh;width:35svw}#hawk.svelte-h59u8h.svelte-h59u8h{width:25svw}.cara-head.svelte-h59u8h.svelte-h59u8h{font-size:1.75rem;padding-bottom:10px;padding-bottom:10px}.cara-text.svelte-h59u8h.svelte-h59u8h{font-size:1.4rem;padding-top:10px;padding-bottom:10px}img.svelte-h59u8h.svelte-h59u8h{display:block;margin-left:auto;margin-right:auto}.btnCont.svelte-h59u8h.svelte-h59u8h{display:flex !important;width:50%;margin:auto;margin-top:20px}#prvBtn.svelte-h59u8h.svelte-h59u8h{margin-right:5px}#nxtBtn.svelte-h59u8h.svelte-h59u8h{margin-left:5px}button.svelte-h59u8h.svelte-h59u8h{width:15%;padding:10px 0px;margin:auto;background-color:transparent;border:2px solid aliceblue;transition:all 0.35s ease-in-out;border-radius:25px}button.svelte-h59u8h.svelte-h59u8h:hover{background-color:aliceblue}button.svelte-h59u8h i.svelte-h59u8h{color:aliceblue;transition:all 0.35s ease-in-out}button.svelte-h59u8h:hover i.svelte-h59u8h{color:#001220}.carousel-container.svelte-h59u8h.svelte-h59u8h{padding-top:20px;display:flex;width:100%;flex-direction:row}.main-carousel.svelte-h59u8h.svelte-h59u8h,.second-carousel.svelte-h59u8h.svelte-h59u8h{width:50%;margin:auto}.work-head.svelte-h59u8h.svelte-h59u8h{margin-top:5svh;font-size:2rem;font-weight:700;min-height:40px}.bg-cont.svelte-h59u8h.svelte-h59u8h{margin-top:10svh;width:100%;height:60svh;border-color:aliceblue;border-width:12px 0px;border-style:solid;background-image:linear-gradient(\r\n        135deg,\r\n        hsl(240deg 100% 20%) 0%,\r\n        hsl(289deg 100% 21%) 11%,\r\n        hsl(315deg 100% 27%) 22%,\r\n        hsl(329deg 100% 36%) 33%,\r\n        hsl(337deg 100% 43%) 44%,\r\n        hsl(357deg 91% 59%) 56%,\r\n        hsl(17deg 100% 59%) 67%,\r\n        hsl(34deg 100% 53%) 78%,\r\n        hsl(45deg 100% 50%) 89%,\r\n        hsl(55deg 100% 50%) 100%\r\n        )}@media screen and (max-width: 600px){img.svelte-h59u8h.svelte-h59u8h{width:70svw !important}.carousel-container.svelte-h59u8h.svelte-h59u8h{padding-top:0px;flex-direction:column}.main-carousel.svelte-h59u8h.svelte-h59u8h,.second-carousel.svelte-h59u8h.svelte-h59u8h{width:90%;margin:auto}.bg-cont.svelte-h59u8h.svelte-h59u8h{border-width:7px 0px;height:100svh}.btnCont.svelte-h59u8h.svelte-h59u8h{padding-top:1svh;padding-bottom:1svh;width:70%}.work-head.svelte-h59u8h.svelte-h59u8h{font-size:1.25rem}.cara-text.svelte-h59u8h.svelte-h59u8h{font-size:1.1rem}}",
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"bg-cont svelte-h59u8h"}"><div><p class="${"work-head svelte-h59u8h"}">Check out what I&#39;ve been up to:</p></div>
    <div class="${"carousel-container svelte-h59u8h"}"><div class="${"main-carousel svelte-h59u8h"}">${``}</div>
        <div class="${"second-carousel svelte-h59u8h"}">${``}</div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tw.svelte-121yz53{height:300px;text-align:center;margin-top:50px}.container.svelte-121yz53{margin:auto;width:50%;text-align:center}h1.svelte-121yz53{display:inline-block;position:relative}h1.svelte-121yz53::after{content:'';position:absolute;width:100%;transform:scaleX(0);height:3px;bottom:0;left:0;background-color:aliceblue;transform-origin:bottom right;transition:transform 0.25s ease-out}h1.svelte-121yz53:hover::after{transform:scaleX(1);transform-origin:bottom left}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-121yz53"}">${validate_component(Typewriter, "Typewriter").$$render(
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
        return `<h1 class="${"svelte-121yz53"}">Welcome
        </h1>`;
      }
    }
  )}</div>
<div class="${"tw svelte-121yz53"}"><p>My name is Joe.
    </p>
    <p style="${"margin-top: 3%;"}">I&#39;m a developer from Devon, England.
    </p>
    <p style="${"margin-top: 3%;"}">This is my website.
    </p></div>
${validate_component(Work, "Work").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
