import{a as y,S as B,i as l}from"./assets/vendor--6n4cVRZ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const v="https://pixabay.com/api",M="54685682-80977b0b5ca1319a1902ced87",L=15;y.defaults.baseURL=v;async function w(s,t){return(await y({url:v,method:"get",params:{key:M,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:L}})).data}const b=document.querySelector(".gallery"),p=document.querySelector(".gallery-btn"),x=document.querySelector(".loader");let m=null;function C(s){const t=s.map(({webformatURL:i,largeImageURL:c,tags:e,likes:o,views:a,comments:P,downloads:E})=>`
            <li class="list-item">
                <a href="${c}"><img src="${i}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${o}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${a}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${P}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${E}</p>
                    </div>
                </div>
            </li>
        `).join("");b.insertAdjacentHTML("beforeend",t),m?m.refresh():m=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function g(){b.innerHTML=""}function S(){x.classList.remove("is-hidden")}function n(){x.classList.add("is-hidden")}function q(){p.classList.remove("is-hidden")}function d(){p.classList.add("is-hidden")}const h=document.querySelector(".form");h.addEventListener("submit",R);p.addEventListener("click",$);let u="",r=1,f=0;n();async function R(s){s.preventDefault(),r=1,d(),g(),u=h.elements["search-text"].value.trim();try{if(u===""){l.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),d(),n(),g();return}S();const{hits:t,totalHits:i}=await w(u,r);if(f=Math.ceil(i/L),!t||t.length===0){console.log(t),l.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),n();return}C(t),r<f&&q()}catch(t){d(),console.log(t.message),l.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"})}finally{h.elements["search-text"].value="",n()}}async function $(){S();try{r+=1;const{hits:s}=await w(u,r);r<f?q():r===f&&(l.show({message:"Sorry!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),d()),C(s),k(),n()}catch(s){console.log(s)}}function k(){window.scrollBy({top:1080,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
