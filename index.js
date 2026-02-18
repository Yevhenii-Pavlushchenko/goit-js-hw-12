import{a as L,S as B,i as m}from"./assets/vendor--6n4cVRZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const w="https://pixabay.com/api",T="54685682-80977b0b5ca1319a1902ced87",b=15;L.defaults.baseURL=w;async function x(s,e){return(await L({url:w,method:"get",params:{key:T,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:b}})).data}const S=document.querySelector(".gallery"),y=document.querySelector(".gallery-btn"),$=document.querySelector(".loader");let f=null;function q(s){const e=s.map(({webformatURL:r,largeImageURL:c,tags:t,likes:o,views:a,comments:M,downloads:O})=>`
            <li class="list-item">
                <a href="${c}"><img src="${r}" alt="${t}" /></a>
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
                        <p class="count-comments">${M}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${O}</p>
                    </div>
                </div>
            </li>
        `).join("");S.insertAdjacentHTML("beforeend",e),f?f.refresh():f=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function v(){S.innerHTML=""}function C(){$.classList.remove("is-hidden")}function l(){$.classList.add("is-hidden")}function P(){y.classList.remove("is-hidden")}function d(){y.classList.add("is-hidden")}const h=document.querySelector(".form"),p=document.querySelector(".img-total");h.addEventListener("submit",D);y.addEventListener("click",E);let u="",i=1,g=0,n=0;l();async function D(s){s.preventDefault(),n=0,i=1,d(),v(),u=h.elements["search-text"].value.trim();try{if(u===""){m.warning({title:"warning",position:"topRight",message:"Please enter a search query!"}),p.textContent="",d(),l(),v();return}C();const{hits:e,totalHits:r}=await x(u,i);if(g=Math.ceil(r/b),n+=e.length,n>r&&(n=r),p.textContent=`Total images: ${n}/${r}`,!e||e.length===0){console.log(e),m.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#4e75ff",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),l();return}q(e),i<g&&P()}catch(e){d(),console.log(e.message)}finally{h.elements["search-text"].value="",l()}}async function E(){C();try{i+=1;const{hits:s,totalHits:e}=await x(u,i);n+=s.length,n>e&&(n=e),p.textContent=`Total images: ${n}/${e}`,i<g?P():(m.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4e75ff",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),d()),q(s),R(),l()}catch(s){console.log(s)}}function R(){window.scrollBy({top:1200,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
