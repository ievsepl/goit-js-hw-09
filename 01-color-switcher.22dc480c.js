const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),bodyColor:document.querySelector("body")};let e=null;function o(){e=setInterval((()=>{console.log(t.bodyColor),t.bodyColor.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.removeEventListener("click",o)}t.startBtn.addEventListener("click",o),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.addEventListener("click",o)}));
//# sourceMappingURL=01-color-switcher.22dc480c.js.map