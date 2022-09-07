(()=>{let c=document.querySelector(".image-gallery"),d=document.getElementById("myModal"),e=document.getElementById("full-img"),a=document.getElementById("close-modal");function f(b){let a=b.map(function(a){return`<li>
                <img src=${a.img} alt=${a.title} id="myImg"/>
                <div class="item-info">
                  <span>${a.title}</span>
                </div>
              </li>`});a=a.join(""),c.innerHTML=a;let f=document.querySelectorAll("#myImg");f.forEach(function(a){a.addEventListener("click",()=>{d.style.display="flex",e.src=a.src})})}function b(){return!1}document.oncontextmenu=b,window.addEventListener("DOMContentLoaded",()=>{f(gallery)}),a.addEventListener("click",()=>{d.style.display="none"})})()