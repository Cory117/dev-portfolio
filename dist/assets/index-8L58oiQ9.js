(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const d=o=>{o.key==="Tab"&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",d),window.addEventListener("mousedown",a))},a=()=>{document.body.classList.remove("user-is-tabbing"),window.removeEventListener("mousedown",a),window.addEventListener("keydown",d)};window.addEventListener("keydown",d);const i=document.querySelector(".back-to-top");let r=!1,l=o=>{i.style.visibility=o?"visible":"hidden",i.style.opacity=o?1:0,i.style.transform=o?"scale(1)":"scale(0)"};window.addEventListener("scroll",()=>{window.scrollY>700?(r=!0,l(r)):(r=!1,l(r))});
