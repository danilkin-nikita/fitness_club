(()=>{"use strict";var e,t,n,s,o,c,i,l,a,r,d,u,m,v,p,y,f,h,g,b,L,E,k,w,S;S=document.querySelector(".clubs-list>ul"),document.addEventListener("click",(function(e){var t;e.target.closest(".club-select")?"block"===(t=S).style.display?t.style.display="none":t.style.display="block":S.style.display="none"})),h=document.getElementById("free_visit_form"),g=document.querySelector(".open-popup"),b=document.getElementById("callback_form"),L=document.querySelector(".callback-btn"),E=document.querySelector(".fixed-gift>img"),k=document.getElementById("gift"),w=document.getElementById("thanks"),document.addEventListener("click",(function(e){var t=e.target,n=function(e,n){t===e&&(n.style.display="block"),(t.classList.contains("close_icon")||t.classList.contains("overlay")||t.classList.contains("close-btn"))&&(n.style.display="none")};n(g,h),n(L,b),E&&n(E,k),t===E&&(E.style.display="none"),(t.classList.contains("close_icon")||t.classList.contains("overlay")||t.classList.contains("close-btn"))&&(w.style.display="none")})),p=document.querySelector(".top-menu"),y=document.querySelector(".popup-menu"),(f=document.querySelector(".fixed-gift"))&&(f.style.display="none"),document.addEventListener("click",(function(e){var t=e.target;t.closest(".hidden-large>img")&&(y.style.display="flex"),(t.closest(".close-menu-btn>img")||t.closest(".scroll"))&&(y.style.display="none")})),document.addEventListener("scroll",(function(){pageYOffset>=200&&window.innerWidth<768?p.style.position="fixed":(pageYOffset<200||window.innerWidth>=768)&&(p.style.position="static"),f&&(pageYOffset>=3600?f.style.display="inline":pageYOffset<3600&&(f.style.display="none"),window.innerWidth<768?(f.querySelector("img").style.maxWidth="70%",f.style.right="55px"):(f.querySelector("img").style.maxWidth="100%",f.style.right="20px"))})),(v=document.getElementById("totop")).style.display="none",document.addEventListener("scroll",(function(){pageYOffset>=620?v.style.display="block":v.style.display="none"})),document.addEventListener("click",(function(e){var t,n=e.target;(n.closest("nav")&&n.closest("a")||n.closest("#totop")||n.closest(".about")||n.closest(".for-clients"))&&(e.preventDefault(),t=n.closest("a").getAttribute("href").substr(1),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"}))})),l=document.querySelectorAll(".time>input"),a=document.getElementById("card_leto_mozaika"),r=document.getElementById("card_leto_schelkovo"),d=document.querySelector(".promo-code"),u=document.getElementById("price-total"),m=function(){var e;a&&a.checked?e=[1990,9900,13900,19900]:r&&r.checked&&(e=[2990,14990,21990,24990]),l.forEach((function(t,n){t.value=e[n],t.checked&&(u.innerHTML=t.value)}))},document.addEventListener("input",(function(){m(),d&&"ТЕЛО2021"===d.value&&(u.innerHTML=100*Math.round(parseInt(.7*u.innerHTML,10)/100))})),m(),function(){var e=document.getElementById("thanks"),t=(document.querySelector('.personal-data>input[type="checkbox"]'),document.querySelector('button[type="submit"]'),function(e){e.style.border="3px solid red",setTimeout((function(){e.style.border="1px solid #b7b7b7"}),1500)});document.addEventListener("submit",(function(s){s.preventDefault();var o=s.target,c=o.querySelector('input[name="name"]'),i=o.querySelector('input[name="phone"]'),l=o.querySelector('.personal-data>input[type="checkbox"]'),a=o.querySelector(".personal-data>label"),r=!0;if(o.matches("form")){if(c&&(c.value.match(/^[а-яА-Я]{2,}$/)||(t(c),r=!1)),i.value.match(/^\+?[78]([-() ]*\d){10}$|^([-() ]*\d){7}$/)||(t(i),r=!1),l&&!1===l.checked&&(a.classList.add("error"),setTimeout((function(){a.classList.remove("error")}),1500),r=!1),!1===r)return;(o.matches("#form1")||o.matches("#form2"))&&(o.closest(".popup").style.display="none"),e.style.display="block",e.innerHTML='\n                          <div class="overlay">\n                          </div>\n                          <div class="form-wrapper">\n                              <div class="close-form">\n                                  <img src="images/close-icon.png" alt="close" class="close_icon">\n                              </div>\n                              <div class="form-content">\n                                  <h4>Заявка отправяется</h4>\n                                  <p><img src="images/preloader.gif" height="35px"></p>\n                                  <button class="btn close-btn" disabled ="true">OK</button>\n                              </div>\n                          </div>\n      ';var d=new FormData(o);o.querySelectorAll("input").forEach((function(e){e.style.border="1px solid #b7b7b7"})),o.reset(),n(d).then((function(t){if(200!==t.status)throw new Error("status network not 200");e.innerHTML='\n                           <div class="overlay">\n                          </div>\n                          <div class="form-wrapper">\n                              <div class="close-form">\n                                  <img src="images/close-icon.png" alt="close" class="close_icon">\n                              </div>\n                              <div class="form-content">\n                                  <h4>Спасибо!</h4>\n                                  <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n                                  <button class="btn close-btn">OK</button>\n                              </div>\n                          </div>\n      ',setTimeout((function(){e.style.display="none"}),5e3)})).catch((function(t){e.innerHTML='\n                           <div class="overlay">\n                          </div>\n                          <div class="form-wrapper">\n                              <div class="close-form">\n                                  <img src="images/close-icon.png" alt="close" class="close_icon">\n                              </div>\n                              <div class="form-content">\n                                  <h4>Ошибка отправки :(</h4>\n                                  <p>Что-то пошло не так...</p>\n                                  <button class="btn close-btn">OK</button>\n                              </div>\n                          </div>\n      ',setTimeout((function(){e.style.display="none"}),5e3),console.error(t)}))}}));var n=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"multipart/aplication/json"},body:JSON.stringify(Object.fromEntries(e))})};document.addEventListener("change",(function(e){var t=e.target;t.matches('input[name="promo-code"]')&&("ТЕЛО2021"===t.value?t.style.border="3px solid green":t.style.border="1px solid #b7b7b7"),t.matches('input[name="name"]')&&(t.value.match(/^[а-яА-Я ]{2,}$/)?t.style.border="3px solid green":t.style.border="1px solid #b7b7b7"),t.matches('input[name="phone"]')&&(t.value.match(/^\+?[78]([-() ]*\d){10}$|^([-() ]*\d){7}$/)?t.style.border="3px solid green":t.style.border="1px solid #b7b7b7")})),document.addEventListener("input",(function(e){var t=e.target;t.matches('input[name="name"]')&&(t.value=t.value.replace(/[^а-яА-Я ]$/,"")),t.matches('input[name="phone"]')&&(t.value=t.value.replace(/[^+\-\)\(0-9 ]$/,"")),t.matches('input[name="promo-code"]')&&(t.value=t.value.toUpperCase())}))}(),function(){for(var e,t=document.querySelector(".gallery-slider"),n=t.querySelectorAll(".slide"),s=t.querySelector(".slider-dots"),o=0,c=0;c<n.length;c++){var i=document.createElement("li");i.className="dot",s.append(i)}var l=document.querySelectorAll(".dot");l[0].className="dot slick-active";var a=function(e,t,n){e[t].classList.remove(n)},r=function(e,t,n){e[t].classList.add(n)},d=function(){a(n,o,"gallery-active-slide"),a(l,o,"slick-active"),++o>=n.length&&(o=0),r(n,o,"gallery-active-slide"),r(l,o,"slick-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(d,t)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".slider-arrow, .dot")&&(a(n,o,"gallery-active-slide"),a(l,o,"slick-active"),t.matches(".next")?o++:t.matches(".prev")?o--:t.matches(".dot")&&l.forEach((function(e,n){e===t&&(o=n)})),o>=n.length?o=0:o<0&&(o=n.length-1),r(n,o,"gallery-active-slide"),r(l,o,"slick-active"))})),t.addEventListener("mouseover",(function(t){(t.target.matches(".slider-arrow")||t.target.matches(".dot"))&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&u()})),u()}(),function(){for(var e,t=document.querySelector(".main-slider"),n=t.querySelectorAll(".slide"),s=t.querySelector(".slider-dots"),o=0,c=0;c<n.length;c++){var i=document.createElement("li");i.className="dot",s.append(i)}var l=document.querySelectorAll(".dot");l[0].className="dot slick-active";var a=function(e,t,n){e[t].classList.remove(n)},r=function(e,t,n){e[t].classList.add(n)},d=function(){a(n,o,"active-main-slide"),a(l,o,"slick-active"),++o>=n.length&&(o=0),r(n,o,"active-main-slide"),r(l,o,"slick-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(d,t)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".slider-arrow, .dot")&&(a(n,o,"active-main-slide"),a(l,o,"slick-active"),t.matches(".next")?o++:t.matches(".prev")?o--:t.matches(".dot")&&l.forEach((function(e,n){e===t&&(o=n)})),o>=n.length?o=0:o<0&&(o=n.length-1),r(n,o,"active-main-slide"),r(l,o,"slick-active"))})),t.addEventListener("mouseover",(function(t){(t.target.matches(".slider-arrow")||t.target.matches(".dot"))&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&u()})),u()}(),e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide"),n=e.querySelectorAll(".slider-arrow"),s=0,o=5,c=function(){s=0,window.innerWidth>=1200?(o=5,n.forEach((function(e){e.style.display="none"}))):(n.forEach((function(e){e.style.display="block"})),window.innerWidth<1200&&window.innerWidth>=767?o=4:window.innerWidth<767&&window.innerWidth>=479?o=2:window.innerWidth<479&&(o=1));for(var e=0;e<t.length;e++)t[e].classList.remove("active-services-slide");for(var c=0;c<o;c++)t[c].classList.add("active-services-slide");i()},i=function(){n.forEach((function(e){e.style.display="block"})),s===t.length-o&&(n[1].style.display="none"),0===s&&(n[0].style.display="none")},document.addEventListener("click",(function(e){var n,c,l,a=e.target;a.closest(".next")&&(s<t.length-o&&(l="active-services-slide",(n=t)[(c=s)+o].classList.add(l),n[c].classList.remove(l),s++),i()),a.matches(".prev")&&(s>0&&s--,function(e,t,n){e[t].classList.add(n),e[t+o].classList.remove(n)}(t,s,"active-services-slide"),i())})),window.addEventListener("resize",(function(){c()})),function(){for(var e=0;e<o;e++)t[e].classList.add("active-services-slide");c()}()})();