
const lang = {
 fa:{dashboard:"داشبورد"},
 en:{dashboard:"Dashboard"},
 ar:{dashboard:"لوحة التحكم"}
};

function setLang(l){
localStorage.setItem("lang",l);
}

function apply(){
const l = localStorage.getItem("lang") || "fa";
document.querySelectorAll("[data-i18n]").forEach(e=>{
e.innerText = lang[l][e.dataset.i18n];
});
}

window.onload = apply;
