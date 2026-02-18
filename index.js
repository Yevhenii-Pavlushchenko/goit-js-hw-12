import{a as w,S as M,i as f}from"./assets/vendor--6n4cVRZ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const b="https://pixabay.com/api",O="54685682-80977b0b5ca1319a1902ced87",C=15;w.defaults.baseURL=b;async function S(o,e){return(await w({url:b,method:"get",params:{key:O,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:C}})).data}const q=document.querySelector(".gallery"),v=document.querySelector(".gallery-btn"),$=document.querySelector(".loader");let m=null;function P(o){const e=o.map(({webformatURL:r,largeImageURL:d,tags:t,likes:s,views:a,comments:B,downloads:E})=>`
            <li class="list-item">
                <a href="${d}"><img src="${r}" alt="${t}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${s}</p>
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
        `).join("");q.insertAdjacentHTML("beforeend",e),m?m.refresh():m=new M(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function L(){q.innerHTML=""}function T(){$.classList.remove("is-hidden")}function l(){$.classList.add("is-hidden")}function x(){v.classList.remove("is-hidden")}function c(){v.classList.add("is-hidden")}const h=document.querySelector(".form"),g=document.querySelector(".output-total"),p=document.querySelector("#scrollToTop");h.addEventListener("submit",R);v.addEventListener("click",k);let u="",i=1,y=0,n=0;l();async function R(o){o.preventDefault(),n=0,i=1,c(),L(),u=h.elements["search-text"].value.trim();try{if(u===""){f.warning({title:"warning",position:"topRight",message:"Please enter a search query!"}),g.textContent="",c(),l(),L();return}T();const{hits:e,totalHits:r}=await S(u,i);if(y=Math.ceil(r/C),n+=e.length,n>r&&(n=r),g.textContent=`Total images: ${n}/${r}`,!e||e.length===0){console.log(e),f.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#4e75ff",messageColor:"#ffffff",position:"topRight"}),l();return}P(e),i<y&&x()}catch(e){c(),console.log(e.message)}finally{h.elements["search-text"].value="",l()}}async function k(){T(),c();try{i+=1;const{hits:o,totalHits:e}=await S(u,i);n+=o.length,n>e&&(n=e),g.textContent=`Total images: ${n}/${e}`,i<y?x():(f.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4e75ff",messageColor:"#ffffff",position:"topRight"}),c()),P(o),D()}catch(o){console.log(o),f.error({message:o.message,backgroundColor:"#4e75ff",messageColor:"#ffffff",position:"topRight"})}finally{l()}}function D(){const o=document.querySelector(".gallery");if(!o.firstElementChild)return;const{height:e}=o.firstElementChild.getBoundingClientRect();scrollBy({top:e*2,behavior:"smooth"})}p.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{window.scrollY>500?p.classList.add("is-visible"):p.classList.remove("is-visible")});
//# sourceMappingURL=index.js.map
