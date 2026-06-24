function setLang(l){
localStorage.setItem('lang',l);
document.getElementById('lang').classList.add('hidden');
document.getElementById('app').classList.remove('hidden');
}

function appointment(){
const name=prompt('name');
const phone=prompt('phone');
const msg=prompt('message');

fetch('/.netlify/functions/sendAppointment',{
method:'POST',
body:JSON.stringify({name,phone,msg})
});

alert('sent');
}

function documentReq(){
const name=prompt('name');
const phone=prompt('phone');
const file=prompt('file url');

fetch('/.netlify/functions/sendDocument',{
method:'POST',
body:JSON.stringify({name,phone,file})
});

alert('sent');
}
