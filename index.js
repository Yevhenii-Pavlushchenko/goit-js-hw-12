import{a as u,S as h,i as n}from"./assets/vendor--6n4cVRZ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d="https://pixabay.com/api",g="54685682-80977b0b5ca1319a1902ced87";u.defaults.baseURL=d;function y(o){return u({url:d,method:"get",params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>console.log(r))}const f=document.querySelector(".gallery");document.querySelector(".loader");let c=null;function v(o){const r=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:a,comments:m,downloads:p})=>`
            <li class="list-item">
                <a href="${i}"><img src="${s}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${t}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${a}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${m}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${p}</p>
                    </div>
                </div>
            </li>
        `).join("");f.innerHTML=r,c?c.refresh():c=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function L(){f.innerHTML=""}function b(){var o;(o=document.querySelector(".loader"))==null||o.classList.remove("is-hidden")}function w(){var o;(o=document.querySelector(".loader"))==null||o.classList.add("is-hidden")}const l=document.querySelector(".form");l.addEventListener("submit",S);function S(o){o.preventDefault();const r=new FormData(l).get("search-text").trim();if(r===""){n.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"});return}L(),b(),y(r).then(({hits:s})=>{if(!s||s.length===0){n.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"});return}v(s)}).catch(s=>{console.log(s.message),n.show({message:"Sorry, but there was an error processing your request. Please try again.",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"})}).finally(()=>{w(),l.reset()})}
//# sourceMappingURL=index.js.map
