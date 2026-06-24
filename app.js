
function setLang(l){
localStorage.setItem('lang',l);
document.getElementById('lang').classList.add('hidden');
document.getElementById('app').classList.remove('hidden');
}

function appointment(){
const name = prompt('Name');
const phone = prompt('Phone');
const msg = prompt('Message');

fetch('/.netlify/functions/sendAppointment',{
method:'POST',
headers:{'Content-Type':'application/json'},
body: JSON.stringify({name,phone,msg})
});

alert('Sent');
}

function documentReq(){
const name = prompt('Name');
const phone = prompt('Phone');
const file = prompt('File URL');

fetch('/.netlify/functions/sendDocument',{
method:'POST',
headers:{'Content-Type':'application/json'},
body: JSON.stringify({name,phone,file})
});

alert('Sent');
}
