(()=>{"use strict";var e,t,n,o,s,c,l,i,r,a,d,u,m,v,y,p,f,h,g,b,L,k,E,w,S,q,x,I;I=document.querySelector(".clubs-list>ul"),document.addEventListener("click",(function(e){var t;e.target.closest(".club-select")?"block"===(t=I).style.display?t.style.display="none":t.style.display="block":I.style.display="none"})),L=document.getElementById("free_visit_form"),k=document.querySelector(".open-popup"),E=document.getElementById("callback_form"),w=document.querySelector(".callback-btn"),S=document.querySelector(".fixed-gift>img"),q=document.getElementById("gift"),x=document.getElementById("thanks"),document.addEventListener("click",(function(e){var t=e.target,n=function(e,n){t===e&&(n.style.display="block"),(t.classList.contains("close_icon")||t.classList.contains("overlay")||t.classList.contains("close-btn"))&&(n.style.display="none")};n(k,L),n(w,E),S&&n(S,q),t===S&&(S.style.display="none"),(t.classList.contains("close_icon")||t.classList.contains("overlay")||t.classList.contains("close-btn"))&&(x.style.display="none")})),h=document.querySelector(".top-menu"),g=document.querySelector(".popup-menu"),(b=document.querySelector(".fixed-gift"))&&(b.style.display="none"),document.addEventListener("click",(function(e){var t=e.target;t.closest(".hidden-large>img")&&(g.style.display="flex"),(t.closest(".close-menu-btn>img")||t.closest(".scroll"))&&(g.style.display="none")})),document.addEventListener("scroll",(function(){pageYOffset>=200&&window.innerWidth<768?h.style.position="fixed":(pageYOffset<200||window.innerWidth>=768)&&(h.style.position="static"),b&&(pageYOffset>=3600?b.style.display="inline":pageYOffset<3600&&(b.style.display="none"),window.innerWidth<768?(b.querySelector("img").style.maxWidth="70%",b.style.right="55px"):(b.querySelector("img").style.maxWidth="100%",b.style.right="20px"))})),(f=document.getElementById("totop")).style.display="none",document.addEventListener("scroll",(function(){pageYOffset>=620?f.style.display="block":f.style.display="none"})),document.addEventListener("click",(function(e){var t,n=e.target;(n.closest("nav")&&n.closest("a")||n.closest("#totop")||n.closest(".about")||n.closest(".for-clients"))&&(e.preventDefault(),t=n.closest("a").getAttribute("href").substr(1),document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"}))})),i=document.querySelectorAll(".time>input"),r=document.getElementById("card_leto_mozaika"),a=document.getElementById("card_leto_schelkovo"),d=document.querySelector(".promo-code"),u=document.querySelector('input[name="cost"]'),m=document.querySelectorAll("label>.cost"),v=document.querySelectorAll('input[name="card-type"]'),y=document.getElementById("price-total"),p=function(){var e;r&&r.checked?e=[{time:"1 месяц",money:1990},{time:"2 месяца",money:9900},{time:"9 месяцев",money:13900},{time:"12 месяцев",money:19900}]:a&&a.checked?e=[{time:"1 месяц",money:2990},{time:"2 месяца",money:14990},{time:"9 месяцев",money:21990},{time:"12 месяцев",money:24990}]:v.forEach((function(e,t){e.checked&&(u.value=m[t].textContent.slice(0,-1))})),i.forEach((function(t,n){t.value=e[n].time,t.checked&&(d&&"ТЕЛО2021"===d.value&&(e[n].money=100*Math.round(parseInt(.7*e[n].money,10)/100)),y.innerHTML=e[n].money,u.value=e[n].money)}))},document.addEventListener("input",(function(){p()})),p(),function(){var e=document.getElementById("thanks"),t=function(e){e.style.border="3px solid red",setTimeout((function(){e.style.border="1px solid #b7b7b7"}),1500)};document.addEventListener("submit",(function(o){o.preventDefault();var s=o.target,c=s.querySelector('input[name="name"]'),l=s.querySelector('input[name="phone"]'),i=s.querySelector('.personal-data>input[type="checkbox"]'),r=s.querySelector(".personal-data>label"),a=s.querySelectorAll(".club>input"),d=s.querySelector(".club>input:checked"),u=s.querySelector("#price-total"),m=!0;if(s.matches("form")){if(c&&(c.value.match(/^[а-яА-Я]{2,}$/)||(t(c),m=!1)),l.value.match(/^\+?[78]([-() ]*\d){10}$|^([-() ]*\d){7}$/)||(t(l),m=!1),a.length>0&&!d){var v=document.createElement("p");v.innerHTML="Выберите клуб!",v.classList.add("error"),s.appendChild(v),setTimeout((function(){v.style.display="none"}),1500),m=!1}if(i&&!1===i.checked&&(r.classList.add("error"),setTimeout((function(){r.classList.remove("error")}),1500),m=!1),!1===m)return;(s.matches("#form1")||s.matches("#form2"))&&(s.closest(".popup").style.display="none"),e.style.display="block",e.innerHTML='\n                          <div class="overlay">\n                          </div>\n                          <div class="form-wrapper">\n                              <div class="close-form">\n                                  <img src="images/close-icon.png" alt="close" class="close_icon">\n                              </div>\n                              <div class="form-content">\n                                  <h4>Заявка отправяется</h4>\n                                  <p><img src="images/preloader.gif" height="35px"></p>\n                                  <button class="btn close-btn" disabled ="true">OK</button>\n                              </div>\n                          </div>\n      ';var y=new FormData(s);s.querySelectorAll("input").forEach((function(e){e.style.border="1px solid #b7b7b7"})),s.reset(),u&&(u.innerHTML=1990),n(y).then((function(t){if(200!==t.status)throw new Error("status network not 200");e.innerHTML='\n                           <div class="overlay">\n                          </div>\n                          <div class="form-wrapper">\n                              <div class="close-form">\n                                  <img src="images/close-icon.png" alt="close" class="close_icon">\n                              </div>\n                              <div class="form-content">\n                                  <h4>Спасибо!</h4>\n                                  <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n                                  <button class="btn close-btn">OK</button>\n                              </div>\n                          </div>\n      ',setTimeout((function(){e.style.display="none"}),5e3)})).catch((function(t){e.innerHTML='\n                           <div class="overlay">\n                          </div>\n                          <div class="form-wrapper">\n                              <div class="close-form">\n                                  <img src="images/close-icon.png" alt="close" class="close_icon">\n                              </div>\n                              <div class="form-content">\n                                  <h4>Ошибка отправки :(</h4>\n                                  <p>Что-то пошло не так...</p>\n                                  <button class="btn close-btn">OK</button>\n                              </div>\n                          </div>\n      ',setTimeout((function(){e.style.display="none"}),5e3),console.error(t)}))}}));var n=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"multipart/aplication/json"},body:JSON.stringify(Object.fromEntries(e))})};document.addEventListener("change",(function(e){var t=e.target;t.matches('input[name="promo-code"]')&&("ТЕЛО2021"===t.value?t.style.border="3px solid green":t.style.border="1px solid #b7b7b7"),t.matches('input[name="name"]')&&(t.value.match(/^[а-яА-Я ]{2,}$/)?t.style.border="3px solid green":t.style.border="1px solid #b7b7b7"),t.matches('input[name="phone"]')&&(t.value.match(/^\+?[78]([-() ]*\d){10}$|^([-() ]*\d){7}$/)?t.style.border="3px solid green":t.style.border="1px solid #b7b7b7")})),document.addEventListener("input",(function(e){var t=e.target;t.matches('input[name="name"]')&&(t.value=t.value.replace(/[^а-яА-Я ]$/,"")),t.matches('input[name="phone"]')&&(t.value=t.value.replace(/[^+\-\)\(0-9 ]$/,"")),t.matches('input[name="promo-code"]')&&(t.value=t.value.toUpperCase())}))}(),function(){for(var e,t=document.querySelector(".gallery-slider"),n=t.querySelectorAll(".slide"),o=t.querySelector(".slider-dots"),s=0,c=0;c<n.length;c++){var l=document.createElement("li");l.className="dot",o.append(l)}var i=document.querySelectorAll(".dot");i[0].className="dot slick-active";var r=function(e,t,n){e[t].classList.remove(n)},a=function(e,t,n){e[t].classList.add(n)},d=function(){r(n,s,"gallery-active-slide"),r(i,s,"slick-active"),++s>=n.length&&(s=0),a(n,s,"gallery-active-slide"),a(i,s,"slick-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(d,t)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".slider-arrow, .dot")&&(r(n,s,"gallery-active-slide"),r(i,s,"slick-active"),t.matches(".next")?s++:t.matches(".prev")?s--:t.matches(".dot")&&i.forEach((function(e,n){e===t&&(s=n)})),s>=n.length?s=0:s<0&&(s=n.length-1),a(n,s,"gallery-active-slide"),a(i,s,"slick-active"))})),t.addEventListener("mouseover",(function(t){(t.target.matches(".slider-arrow")||t.target.matches(".dot"))&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&u()})),u()}(),function(){for(var e,t=document.querySelector(".main-slider"),n=t.querySelectorAll(".slide"),o=t.querySelector(".slider-dots"),s=0,c=0;c<n.length;c++){var l=document.createElement("li");l.className="dot",o.append(l)}var i=document.querySelectorAll(".dot");i[0].className="dot slick-active";var r=function(e,t,n){e[t].classList.remove(n)},a=function(e,t,n){e[t].classList.add(n)},d=function(){r(n,s,"active-main-slide"),r(i,s,"slick-active"),++s>=n.length&&(s=0),a(n,s,"active-main-slide"),a(i,s,"slick-active")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(d,t)};t.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".slider-arrow, .dot")&&(r(n,s,"active-main-slide"),r(i,s,"slick-active"),t.matches(".next")?s++:t.matches(".prev")?s--:t.matches(".dot")&&i.forEach((function(e,n){e===t&&(s=n)})),s>=n.length?s=0:s<0&&(s=n.length-1),a(n,s,"active-main-slide"),a(i,s,"slick-active"))})),t.addEventListener("mouseover",(function(t){(t.target.matches(".slider-arrow")||t.target.matches(".dot"))&&clearInterval(e)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&u()})),u()}(),e=document.querySelector(".services-slider"),t=e.querySelectorAll(".slide"),n=e.querySelectorAll(".slider-arrow"),o=1,s=5,c=function(){o=0,window.innerWidth>=1200?s=5:window.innerWidth<1200&&window.innerWidth>=767?s=4:window.innerWidth<767&&window.innerWidth>=479?s=2:window.innerWidth<479&&(s=1);for(var e=0;e<t.length;e++)t[e].classList.remove("active-services-slide");for(var n=0;n<s;n++)t[n].classList.add("active-services-slide");l()},l=function(){n.forEach((function(e){e.style.backgroundColor="#f4c71b"})),o===t.length-s&&(n[1].style.backgroundColor="#cabf97"),0===o&&(n[0].style.backgroundColor="#cabf97")},document.addEventListener("click",(function(e){var n,c,i,r=e.target;r.closest(".next")&&(o<t.length-s&&(i="active-services-slide",(n=t)[(c=o)+s].classList.add(i),n[c].classList.remove(i),o++),l()),r.matches(".prev")&&(o>0&&o--,function(e,t,n){e[t].classList.add(n),e[t+s].classList.remove(n)}(t,o,"active-services-slide"),l())})),window.addEventListener("resize",(function(){c()})),function(){for(var e=0;e<s;e++)t[e].classList.add("active-services-slide");c()}()})();