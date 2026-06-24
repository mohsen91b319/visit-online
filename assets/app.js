
function openVisit(){
 const name = prompt("Name");
 const phone = prompt("Phone");
 const msg = prompt("Message");

 fetch('/.netlify/functions/sendAppointment',{
 method:'POST',
 headers:{'Content-Type':'application/json'},
 body: JSON.stringify({name,phone,msg})
 });

 alert("Sent");
}

async function openDocs(){
 const file = document.getElementById("fileInput").files[0];
 if(!file) return alert("No file");

 const reader = new FileReader();
 reader.onload = async function(){
   const base64 = reader.result;

   fetch('/.netlify/functions/sendDocument',{
     method:'POST',
     headers:{'Content-Type':'application/json'},
     body: JSON.stringify({file:base64})
   });

   alert("Uploaded");
 };

 reader.readAsDataURL(file);
}
