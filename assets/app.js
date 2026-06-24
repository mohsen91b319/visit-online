
function goApp(){
window.location.href="app.html";
}

function showVisitForm(){
document.getElementById("visitForm").classList.toggle("hidden");
}

async function sendAppointment(){

const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const msg = document.getElementById("msg").value;

await fetch("/.netlify/functions/sendAppointment",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({name,phone,msg})
});

alert("Sent");
}

async function uploadFile(e){

const file = e.target.files[0];
if(!file) return;

const reader = new FileReader();

reader.onload = async function(){

await fetch("/.netlify/functions/sendDocument",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
file:reader.result,
name:file.name
})
});

alert("Uploaded");
};

reader.readAsDataURL(file);
}
