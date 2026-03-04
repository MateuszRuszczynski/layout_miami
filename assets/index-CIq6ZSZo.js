(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const c=()=>{window.location.hash==="#menu"?document.body.classList.add("page__body--with-menu"):document.body.classList.remove("page__body--with-menu")};window.addEventListener("hashchange",c);c();const i=document.getElementById("contact-form");i&&i.addEventListener("submit",function(r){r.preventDefault();const o=document.querySelector(".contact");o.innerHTML=`
    <div style="text-align: left; animation: fadeIn 0.5s;">
      <h2 class="title">Thank you!</h2>
      <p style="font-family: Inter, sans-serif; margin-top: 10px;">
        Your message has been sent. We will get back to you soon.
      </p>
    </div>
  `});
