document.addEventListener("DOMContentLoaded",(()=>{fetch("config.json").then((e=>e.json())).then((e=>{!function(e){const t=document.getElementById("progressBar"),n=document.getElementById("progressLabel");let o=0;const r=setInterval((()=>{o+=1,t.value=o,n.textContent=o+"%",o>=e&&clearInterval(r)}),20)}(e.percentage)})).catch((e=>{console.error("Error fetching data:",e)}))}));