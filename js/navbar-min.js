(()=>{let d=[{title:"Tokio",href:"gallerytokyo.html"},{title:"Scandinavia",href:"galleryscandinavia.html"},{title:"Macro",href:"gallerymacro.html"},],a=document.querySelector(".nav-toggle"),e=document.querySelector(".links"),b=document.querySelector(".dropdown-btn"),c=document.querySelector(".dropdown-content");function f(b){let a=b.map(a=>`<a href=${a.href}>${a.title}</a>`);a=a.join(""),c.innerHTML=a}window.addEventListener("DOMContentLoaded",()=>{f(d)}),a.addEventListener("click",()=>{e.classList.toggle("show-links")}),[b,c].forEach(a=>{a.addEventListener("mouseover",()=>{c.style.overflow="visible",c.style.height="8rem"}),a.addEventListener("mouseout",()=>{c.style.overflow="hidden",c.style.height="0rem"})})})()