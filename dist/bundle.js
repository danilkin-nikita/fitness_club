(()=>{"use strict";var e,t,n,o,s,l,c,i,a,r,d,u,m,p,y,v,f,b;b=document.querySelector(".clubs-list>ul"),document.addEventListener("click",(function(e){var t;e.target.closest(".club-select")?"block"===(t=b).style.display?t.style.display="none":t.style.display="block":b.style.display="none"})),d=document.getElementById("free_visit_form"),u=document.querySelector(".open-popup"),m=document.getElementById("callback_form"),p=document.querySelector(".callback-btn"),y=document.querySelector(".fixed-gift>img"),v=document.getElementById("gift"),f=document.getElementById("thanks"),document.addEventListener("click",(function(e){var t=e.target,n=function(e,n){t===e&&(n.style.display="block"),(t.classList.contains("close_icon")||t.classList.contains("overlay")||t.classList.contains("close-btn"))&&(n.style.display="none")};n(u,d),n(p,m),y&&n(y,v),t===y&&(y.style.display="none"),(t.classList.contains("close_icon")||t.classList.contains("overlay")||t.classList.contains("close-btn"))&&(f.style.display="none")})),i=document.querySelector(".top-menu"),a=document.querySelector(".popup-menu"),(r=document.querySelector(".fixed-gift"))&&(r.style.display="none"),document.addEventListener("click",(function(e){var t=e.target;t.closest(".hidden-large>img")&&(a.style.display="flex"),(t.closest(".close-menu-btn>img")||t.closest(".scroll"))&&(a.style.display="none")})),document.addEventListener("scroll",(function(){pageYOffset>=200&&window.innerWidth<768?i.style.position="fixed":(pageYOffset<200||window.innerWidth>=768)&&(i.style.position="static"),r&&(pageYOffset>=3600?r.style.display="inline":pageYOffset<3600&&(r.style.display="none"),window.innerWidth<768?(r.querySelector("img").style.maxWidth="70%",r.style.right="55px"):(r.querySelector("img").style.maxWidth="100%",r.style.right="20px"))})),(c=document.getElementById("totop")).style.display="none",document.addEventListener("scroll",(function(){pageYOffset>=620?c.style.display="block":c.style.display="none"})),e=document.querySelectorAll(".time>input"),t=document.getElementById("card_leto_mozaika"),n=document.getElementById("card_leto_schelkovo"),o=document.querySelector(".promo-code"),s=document.getElementById("price-total"),l=function(){var o;t&&t.checked?o=[1990,9900,13900,19900]:n&&n.checked&&(o=[2990,14990,21990,24990]),e.forEach((function(e,t){e.value=o[t],e.checked&&(s.innerHTML=e.value)}))},document.addEventListener("input",(function(){l(),o&&"ТЕЛО2021"===o.value&&(s.innerHTML=100*Math.round(parseInt(.7*s.innerHTML,10)/100))})),l(),function(){var e=document.getElementById("thanks"),t=(document.querySelector('.personal-data>input[type="checkbox"]'),document.querySelector('button[type="submit"]'),function(e){e.style.border="3px solid red",setTimeout((function(){e.style.border="1px solid #b7b7b7"}),1500)});document.addEventListener("submit",(function(o){o.preventDefault();var s=o.target,l=s.querySelector('input[name="name"]'),c=s.querySelector('input[name="phone"]'),i=s.querySelector('.personal-data>input[type="checkbox"]'),a=s.querySelector(".personal-data>label"),r=!0;if(s.matches("form")){if(l&&(l.value.match(/^[а-яА-Я]{2,}$/)||(t(l),r=!1)),c.value.match(/^\+?[78]([-() ]*\d){10}$|^([-() ]*\d){7}$/)||(t(c),r=!1),i&&!1===i.checked&&(a.classList.add("error"),setTimeout((function(){a.classList.remove("error")}),1500),r=!1),!1===r)return;(s.matches("#form1")||s.matches("#form2"))&&(s.closest(".popup").style.display="none"),e.style.display="block",e.innerHTML='\n                          <div class="overlay">\n                          </div>\n                          <div class="form-wrapper">\n                              <div class="close-form">\n                                  <img src="images/close-icon.png" alt="close" class="close_icon">\n                              </div>\n                              <div class="form-content">\n                                  <h4>Заявка отправяется</h4>\n                                  <p><img src="images/preloader.gif" height="35px"></p>\n                                  <button class="btn close-btn" disabled ="true">OK</button>\n                              </div>\n                          </div>\n      ';var d=new FormData(s);s.querySelectorAll("input").forEach((function(e){e.style.border="1px solid #b7b7b7"})),s.reset(),n(d).then((function(t){if(200!==t.status)throw new Error("status network not 200");e.innerHTML='\n                           <div class="overlay">\n                          </div>\n                          <div class="form-wrapper">\n                              <div class="close-form">\n                                  <img src="images/close-icon.png" alt="close" class="close_icon">\n                              </div>\n                              <div class="form-content">\n                                  <h4>Спасибо!</h4>\n                                  <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n                                  <button class="btn close-btn">OK</button>\n                              </div>\n                          </div>\n      ',setTimeout((function(){e.style.display="none"}),5e3)})).catch((function(t){e.innerHTML='\n                           <div class="overlay">\n                          </div>\n                          <div class="form-wrapper">\n                              <div class="close-form">\n                                  <img src="images/close-icon.png" alt="close" class="close_icon">\n                              </div>\n                              <div class="form-content">\n                                  <h4>Ошибка отправки :(</h4>\n                                  <p>Что-то пошло не так...</p>\n                                  <button class="btn close-btn">OK</button>\n                              </div>\n                          </div>\n      ',setTimeout((function(){e.style.display="none"}),5e3),console.error(t)}))}}));var n=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"multipart/aplication/json"},body:JSON.stringify(Object.fromEntries(e))})};document.addEventListener("change",(function(e){var t=e.target;t.matches('input[name="promo-code"]')&&("ТЕЛО2021"===t.value?t.style.border="3px solid green":t.style.border="1px solid #b7b7b7"),t.matches('input[name="name"]')&&(t.value.match(/^[а-яА-Я ]{2,}$/)?t.style.border="3px solid green":t.style.border="1px solid #b7b7b7"),t.matches('input[name="phone"]')&&(t.value.match(/^\+?[78]([-() ]*\d){10}$|^([-() ]*\d){7}$/)?t.style.border="3px solid green":t.style.border="1px solid #b7b7b7")})),document.addEventListener("input",(function(e){var t=e.target;t.matches('input[name="name"]')&&(t.value=t.value.replace(/[^а-яА-Я ]$/,"")),t.matches('input[name="phone"]')&&(t.value=t.value.replace(/[^+\-\)\(0-9 ]$/,"")),t.matches('input[name="promo-code"]')&&(t.value=t.value.toUpperCase())}))}()})();