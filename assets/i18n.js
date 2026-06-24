
const t = {
 fa:{title:"انتخاب زبان",visit:"ویزیت آنلاین",docs:"ارسال مدارک"},
 en:{title:"Select Language",visit:"Online Visit",docs:"Upload Documents"},
 ar:{title:"اختيار اللغة",visit:"زيارة",docs:"رفع ملفات"}
};

function setLang(lang){
 localStorage.setItem("lang",lang);
 document.body.dir = lang==="en"?"ltr":"rtl";
 location.href="app.html";
}

function apply(){
 const lang = localStorage.getItem("lang") || "fa";
 document.querySelectorAll("[data-i18n]").forEach(el=>{
   el.innerText = t[lang][el.dataset.i18n];
 });
}
