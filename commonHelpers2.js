/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();const l=document.querySelector(".burger-navbar"),i=document.querySelector(".burger-navbar-btn");i.addEventListener("click",()=>{l.classList.toggle("active")});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".overlay-block"),o=document.querySelector(".container-hero"),c=o.querySelectorAll("button, a");function r(e){e?document.body.style.overflow="hidden":document.body.style.overflow=""}localStorage.getItem("heroClicked")?n.style.display="none":r(!0),c.forEach(e=>{e.addEventListener("click",()=>{localStorage.setItem("heroClicked","true"),n.style.display="none",r(!1)})}),new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&!localStorage.getItem("heroClicked")?(n.classList.add("visible"),r(!0)):(n.classList.remove("visible"),r(!1))})},{threshold:.5}).observe(o)});
//# sourceMappingURL=commonHelpers2.js.map
