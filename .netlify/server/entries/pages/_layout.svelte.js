import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: `@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap');body{background-color:#001220;font-family:'Roboto', sans-serif;font-weight:400;margin:0;padding:0;overflow:overlay;--cursor-color:aliceblue;--cursor-width:3px}html{margin:0;padding:0}.footer{position:relative;min-height:70vh;color:aliceblue;font-size:1.5rem;text-align:center;background-image:url("../svg/animate_1.svg");background-position:center;background-size:cover;background-repeat:no-repeat;background-color:#001220}.footText{width:100%;position:absolute;margin:0;bottom:5px;text-align:center}.spacer{height:150px;color:aliceblue;font-size:1.5rem;text-align:center}h1{font-weight:900;color:aliceblue;text-align:center;font-size:4rem}h2{color:aliceblue;font-weight:700;text-align:center;font-size:3rem}h4{color:aliceblue;font-size:1.75rem;font-weight:600;margin:10px;padding-top:35px;padding-bottom:10px}.svgCont{overflow-x:hidden;width:100%;height:1080px;background-position:center;background-size:cover;background-repeat:no-repeat}p{width:50%;color:aliceblue;text-align:center;font-size:1.5rem;margin:auto}.show{opacity:1 !important;transition:all 2s;filter:blur(0) !important;transform:translateY(0) !important}.hide{opacity:0;transition:all 2s;filter:blur(5px);transform:translateY(5px)}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);border-radius:10px;background-color:transparent}::-webkit-scrollbar{width:12px;background-color:transparent}::-webkit-scrollbar-thumb{border-radius:10px;-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#555}.navholder.svelte-1398gob.svelte-1398gob{height:400px;width:100%;text-align:center;background-image:url("../svg/animate_ud_2.svg");background-position:center;background-size:cover;background-repeat:no-repeat;background-color:#001220}.navbar.svelte-1398gob.svelte-1398gob{display:inline-block;list-style-type:none;margin:0;margin-top:15px;padding:5px 10px 5px 10px;overflow:hidden;border-radius:5px;background-color:transparent}ul.svelte-1398gob:hover li.svelte-1398gob{opacity:0.9;filter:blur(2px);-webkit-filter:blur(2px);transition:all 0.5s}ul.svelte-1398gob li.svelte-1398gob:hover{opacity:1;filter:blur(0);-webkit-filter:blur(0);transition:all 0.5s}li.svelte-1398gob.svelte-1398gob{float:left;padding-left:5px;padding-right:5px}li.svelte-1398gob a.svelte-1398gob{display:inline-block;position:relative;color:aliceblue;text-align:center;margin:14px 16px;text-decoration:none;font-size:2rem;font-weight:500}li.svelte-1398gob a.svelte-1398gob:after{content:'';position:absolute;width:100%;transform:scaleX(0);height:2px;bottom:0;left:0;background-color:aliceblue;transform-origin:bottom right;transition:transform 0.5s ease-out}li.svelte-1398gob a.svelte-1398gob:hover:after{transform:scaleX(1);transform-origin:bottom left}@media screen and (max-width: 600px){.navbar.svelte-1398gob.svelte-1398gob{margin-top:0}ul.svelte-1398gob.svelte-1398gob{display:flex !important;flex-direction:column;max-width:30vw;text-align:left}a.svelte-1398gob.svelte-1398gob{font-size:1.6rem !important}.footer.svelte-1398gob.svelte-1398gob{max-height:30svh;background-size:auto}.footText.svelte-1398gob.svelte-1398gob{font-size:1.2rem}.show{opacity:1 !important;transition:all 1s;filter:blur(0) !important;transform:translateY(0) !important}.hide{opacity:0;transition:all 1s;filter:blur(5px);transform:translateY(2px)}h1{font-size:2.5rem}p{font-size:1.25rem;text-align:justify;width:90%}.spacer{height:50px}}@media screen and (max-width: 320px){a.svelte-1398gob.svelte-1398gob{font-size:1.4rem !important}}`,
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="${"navholder svelte-1398gob"}"><ul class="${"navbar svelte-1398gob"}"><li class="${"svelte-1398gob"}"><a href="${"/"}" class="${"svelte-1398gob"}">Home</a></li>
        <li class="${"svelte-1398gob"}"><a href="${"/about"}" class="${"svelte-1398gob"}">About</a></li>
        <li class="${"svelte-1398gob"}"><a href="${"/contact"}" class="${"svelte-1398gob"}">Contact</a></li></ul></nav>

<link href="${"https://fonts.googleapis.com/css?family=Averia Sans Libre"}" rel="${"stylesheet"}">

${slots.default ? slots.default({}) : ``}

<div class="${"footer svelte-1398gob"}"><p class="${"footText svelte-1398gob"}">This will be the footer. I will stick some links here.</p>
</div>`;
});
export {
  Layout as default
};