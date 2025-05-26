import{a as y,S as g,i}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="50496804-e1c6d45c14416878311a59d2c",b="https://pixabay.com/api/";async function L(n){const r={key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12};return(await y.get(b,{params:r})).data}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),S=new g(".gallery a",{captionsData:"alt",captionDelay:250});function q(n){const r=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:a,comments:p,downloads:m})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${p}</p>
          <p><b>Downloads:</b> ${m}</p>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",r),S.refresh()}function v(){u.innerHTML=""}function w(){d.classList.add("visible")}function l(){d.classList.remove("visible")}const f=document.querySelector(".form"),P=f.querySelector('input[name="search-text"]'),c=document.querySelector(".loading-text");f.addEventListener("submit",async n=>{n.preventDefault();const r=P.value.trim();if(!r){i.warning({title:"Warning",message:"Please enter a search query!"});return}v(),w(),c.hidden=!1;try{const o=await L(r);if(l(),c.hidden=!0,o.hits.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"});return}q(o.hits)}catch(o){l(),c.hidden=!0,i.error({title:"Error",message:"Something went wrong. Please try again later."}),console.error(o)}});
//# sourceMappingURL=index.js.map
