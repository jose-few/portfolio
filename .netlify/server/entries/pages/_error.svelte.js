import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../chunks/index.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    updated: stores.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: '.svg1.svelte-bec09c{background-image:url("../svg/waves_2.svg")}',
  map: null
};
const Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<h1>Oh no!</h1>
<h2>${escape($page.status)}: ${escape($page.error.message)}</h2>
<p>That page you&#39;re trying to access couldn&#39;t be found, or I haven&#39;t finished it yet, sorry!</p>

<div class="${"svgCont svg1 svelte-bec09c"}"></div>`;
});
export {
  Error$1 as default
};
