import{a as L,S as M,i as m}from"./assets/vendor--6n4cVRZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const b="https://pixabay.com/api",O="54685682-80977b0b5ca1319a1902ced87",x=15;L.defaults.baseURL=b;async function S(s,e){return(await L({url:b,method:"get",params:{key:O,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:x}})).data}const q=document.querySelector(".gallery"),v=document.querySelector(".gallery-btn"),$=document.querySelector(".loader");let f=null;function C(s){const e=s.map(({webformatURL:r,largeImageURL:c,tags:t,likes:o,views:a,comments:B,downloads:E})=>`
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
                        <p class="count-comments">${B}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${E}</p>
                    </div>
                </div>
            </li>
        `).join("");q.insertAdjacentHTML("beforeend",e),f?f.refresh():f=new M(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function w(){q.innerHTML=""}function P(){$.classList.remove("is-hidden")}function l(){$.classList.add("is-hidden")}function T(){v.classList.remove("is-hidden")}function d(){v.classList.add("is-hidden")}const h=document.querySelector(".form"),p=document.querySelector(".img-total");h.addEventListener("submit",k);v.addEventListener("click",D);let u="",n=1,g=0,i=0;l();async function k(s){s.preventDefault(),i=0,n=1,d(),w(),u=h.elements["search-text"].value.trim();try{if(u===""){m.warning({title:"warning",position:"topRight",message:"Please enter a search query!"}),p.textContent="",d(),l(),w();return}P();const{hits:e,totalHits:r}=await S(u,n);if(g=Math.ceil(r/x),i+=e.length,i>r&&(i=r),p.textContent=`Total images: ${i}/${r}`,!e||e.length===0){console.log(e),m.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#4e75ff",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),l();return}C(e),n<g&&T()}catch(e){d(),console.log(e.message)}finally{h.elements["search-text"].value="",l()}}async function D(){P();try{n+=1;const{hits:s,totalHits:e}=await S(u,n);i+=s.length,i>e&&(i=e),p.textContent=`Total images: ${i}/${e}`,n<g?T():(m.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4e75ff",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),d()),C(s),R(),l()}catch(s){console.log(s)}}function R(){window.scrollBy({top:1200,behavior:"smooth"})}const y=document.querySelector("#scrollToTop");y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{window.scrollY>500?y.classList.add("is-visible"):y.classList.remove("is-visible")});
//# sourceMappingURL=index.js.map
