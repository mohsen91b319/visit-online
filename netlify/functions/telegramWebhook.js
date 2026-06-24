
exports.handler = async (event) => {

const update = JSON.parse(event.body || "{}");

if(!update.callback_query){
return {statusCode:200, body:"ok"};
}

const cb = update.callback_query;
const data = cb.data;
const chatId = cb.message.chat.id;

let text = "Unknown";

if(data === "acc") text = "✅ Accepted";
if(data === "rej") text = "❌ Rejected";
if(data === "time") text = "📅 Set Time Requested";

await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
chat_id: chatId,
text
})
});

return {statusCode:200, body:"ok"};
};
