var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequired7c6=t);var i=t("iQIUW");const r=document.querySelector(".form ");function l(e,o){const n=Math.random()>.3;return console.log(o),new Promise(((t,i)=>{setTimeout((()=>{n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}r.addEventListener("submit",(function(e){e.preventDefault();let o=Number(r.delay.value),n=0;for(n=1;n<=r.amount.value;n+=1)1===n||(o+=Number(r.step.value)),l(n,o).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`),i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`),i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`)}));e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.25e6d33f.js.map
