import{a as d,S as p}from"./assets/vendor-D9n0vVsu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="51685894-420173baf9b205d39b44ad1de",m="https://pixabay.com/api/";async function y(i){const r={q:i,key:f,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:r})).data}const n=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new p(".gallery a",{captionData:"alt",captionDelay:250});function h(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:l,downloads:u})=>`<li class="gallery-item">
    <a href="${a}">
    <img src="${o}" alt="${e}" />
    </a>
    <div class="info">
    <p>Likes:${t}</p>
    <p>Views:${s}</p>
    <p>Comments:${l}</p>
    <p>Downloads:${u}</p>
    </div>
    </li>`).join("");n.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){n.innerHTML=""}function b(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}const q=document.querySelector(".form");q.addEventListener("submit",async i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){iziToast.warning({title:"Attention",message:"Please enter a search query!",position:"topRight"});return}L(),b();try{const o=await y(r);if(o.hits.length===0){iziToast.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}catch{iziToast.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
