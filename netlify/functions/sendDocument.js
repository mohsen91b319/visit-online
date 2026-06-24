
exports.handler = async (event) => {
const data = JSON.parse(event.body);

const TOKEN = process.env.BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
method:'POST',
headers:{'Content-Type':'application/json'},
body: JSON.stringify({
chat_id: CHAT_ID,
text:`#DOCUMENT\nName:${data.name}\nPhone:${data.phone}\nFile:${data.file}`
})
});

return {statusCode:200, body:JSON.stringify({ok:true})};
};
