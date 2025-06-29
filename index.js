import{a as d,S as p,i as s}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="51095206-3d2c267d5ed47484eb05d633a",m="https://pixabay.com/api/";async function y(a){return(await d.get(m,{params:{key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const g=document.querySelector(".gallery"),c=document.querySelector(".loader");let h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const r=a.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:i,comments:l,downloads:u})=>`
        <li class="gallery-item">
          <a href="${n}">
            <img src="${o}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t}</p>
            <p><b>Views:</b> ${i}</p>
            <p><b>Comments:</b> ${l}</p>
            <p><b>Downloads:</b> ${u}</p>
          </div>
        </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",r),h.refresh()}function L(){g.innerHTML=""}function S(){c.classList.remove("is-hidden")}function q(){c.classList.add("is-hidden")}const w=document.querySelector(".form");document.querySelector(".gallery");w.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){s.warning({message:"Please enter a search query.",position:"topRight"});return}L(),S();try{const o=await y(r);if(o.hits.length===0){s.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}catch(o){s.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}finally{q()}});
//# sourceMappingURL=index.js.map
