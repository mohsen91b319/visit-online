
exports.handler = async (event) => {

const d = JSON.parse(event.body || "{}");

await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
chat_id: process.env.CHAT_ID,
text:"📎 NEW DOCUMENT RECEIVED: " + (d.name || "")
})
});

return {statusCode:200, body:JSON.stringify({ok:true})};
};
