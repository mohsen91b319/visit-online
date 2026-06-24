
exports.handler = async (event) => {
 const d = JSON.parse(event.body);

 const TOKEN = process.env.BOT_TOKEN;
 const CHAT_ID = process.env.CHAT_ID;

 const text = `📅 NEW APPOINTMENT\nName:${d.name}\nPhone:${d.phone}\nMsg:${d.msg}`;

 await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
 method:'POST',
 headers:{'Content-Type':'application/json'},
 body: JSON.stringify({
 chat_id: CHAT_ID,
 text,
 reply_markup:{
   inline_keyboard:[
     [
       {text:"✅ Accept", callback_data:"acc"},
       {text:"❌ Reject", callback_data:"rej"}
     ],
     [{text:"📅 Set Time", callback_data:"time"}]
   ]
 }
 })
 });

 return {statusCode:200, body:JSON.stringify({ok:true})};
};
