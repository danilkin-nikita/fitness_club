(()=>{"use strict";var e,t,l,c,n,s,o;o=document.querySelector(".clubs-list>ul"),document.addEventListener("click",(function(e){var t;e.target.closest(".club-select")?"block"===(t=o).style.display?t.style.display="none":t.style.display="block":o.style.display="none"})),e=document.getElementById("free_visit_form"),t=document.querySelector(".open-popup"),l=document.getElementById("callback_form"),c=document.querySelector(".callback-btn"),n=document.querySelector(".fixed-gift>img"),s=document.getElementById("gift"),document.addEventListener("click",(function(o){var i=o.target,a=function(e,t){i===e&&(t.style.display="block"),(i.classList.contains("close_icon")||i.classList.contains("overlay")||i.classList.contains("close-btn"))&&(t.style.display="none")};a(t,e),a(c,l),a(n,s),i===n&&(n.style.display="none")}))})();