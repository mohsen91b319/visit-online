
exports.handler = async (event) => {

const d = JSON.parse(event.body || "{}");

const text =
`📅 NEW APPOINTMENT
Name: ${d.name || "-"}
Phone: ${d.phone || "-"}
Msg: ${d.msg || "-"}`;

await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
chat_id: process.env.CHAT_ID,
text
})
});

return {statusCode:200, body:JSON.stringify({ok:true})};
};
