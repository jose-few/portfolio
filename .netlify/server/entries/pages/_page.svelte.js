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
  code: '.logo.svelte-nt5389.svelte-nt5389{width:50%;display:block !important;margin:auto;background-position:center;background-size:cover;background-repeat:no-repeat}#aber.svelte-nt5389.svelte-nt5389{background-image:url("../../svg/Aberystwyth University.svg");aspect-ratio:243.3 / 173.1}.btnCont.svelte-nt5389.svelte-nt5389{display:flex !important;width:15%;margin:auto}button.svelte-nt5389.svelte-nt5389{width:45%;padding:10px 0px;margin:auto;background-color:transparent;border:2px solid aliceblue;transition:all 0.35s ease-in-out}button.svelte-nt5389.svelte-nt5389:hover{background-color:aliceblue}button.svelte-nt5389 i.svelte-nt5389{color:aliceblue;transition:all 0.35s ease-in-out}button.svelte-nt5389:hover i.svelte-nt5389{color:#001220}.cara-text.svelte-nt5389 p.svelte-nt5389{padding:10px}.carousel-container.svelte-nt5389.svelte-nt5389{padding-top:20px}.carousel-container.svelte-nt5389 div.svelte-nt5389{display:inline}.main-carousel.svelte-nt5389.svelte-nt5389{width:30svw;margin:auto}.second-carousel.svelte-nt5389.svelte-nt5389{width:30svw;margin:auto}.work-head.svelte-nt5389.svelte-nt5389{font-size:1.8rem}.text-cont.svelte-nt5389.svelte-nt5389{margin:20px;min-height:40px}.bg-cont.svelte-nt5389.svelte-nt5389{margin-top:10svh;width:100%;height:60svh;border-color:aliceblue;border-width:17px 0px;border-style:solid;background-image:linear-gradient(\r\n        135deg,\r\n        hsl(240deg 100% 20%) 0%,\r\n        hsl(289deg 100% 21%) 11%,\r\n        hsl(315deg 100% 27%) 22%,\r\n        hsl(329deg 100% 36%) 33%,\r\n        hsl(337deg 100% 43%) 44%,\r\n        hsl(357deg 91% 59%) 56%,\r\n        hsl(17deg 100% 59%) 67%,\r\n        hsl(34deg 100% 53%) 78%,\r\n        hsl(45deg 100% 50%) 89%,\r\n        hsl(55deg 100% 50%) 100%\r\n        )}@media screen and (max-width: 600px){.carousel-container.svelte-nt5389 div.svelte-nt5389{display:block}.main-carousel.svelte-nt5389.svelte-nt5389{width:80%;margin:auto}.second-carousel.svelte-nt5389.svelte-nt5389{width:80%;margin:auto}.bg-cont.svelte-nt5389.svelte-nt5389{border-width:7px 0px}.btnCont.svelte-nt5389.svelte-nt5389{width:70%}.logo.svelte-nt5389.svelte-nt5389{width:80%}.work-head.svelte-nt5389.svelte-nt5389{font-size:1.2rem}}',
  map: null
};
const Work = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"bg-cont svelte-nt5389"}"><div class="${"text-cont svelte-nt5389"}">${validate_component(Typewriter, "Typewriter").$$render($$result, { delay: 4e3, interval: 50 }, {}, {
      default: () => {
        return `<p class="${"work-head svelte-nt5389"}">Check out what I&#39;ve been up to:</p>`;
      }
    })}</div>
    <div class="${"carousel-container svelte-nt5389"}"><div class="${"main-carousel svelte-nt5389"}">${``}</div>
        <div class="${"second-carousel svelte-nt5389"}">${``}</div></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
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
      keepCursorOnFinish: false,
      delay: 500,
      mode: "cascade",
      interval: 30,
      showCursorOnDelay: true
    },
    {},
    {
      default: () => {
        return `<p>My name is Joe.
        </p>
        <p style="${"margin-top: 3%;"}">I&#39;m a developer from Devon, England.
        </p>
        <p style="${"margin-top: 3%;"}">This is my website.
        </p>`;
      }
    }
  )}</div>
${validate_component(Work, "Work").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
