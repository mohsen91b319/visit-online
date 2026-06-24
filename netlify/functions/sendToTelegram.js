exports.handler = async (event) => {
  if(event.httpMethod !== "POST"){
    return { statusCode: 405, body: "Only POST allowed" };
  }

  try {
    const data = JSON.parse(event.body || "{}");

    const text = `📩 ویزیت آنلاین
👤 نام: ${data.name || "-"}
📞 شماره: ${data.phone || "-"}
💬 پیام: ${data.message || "-"}`;

    const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`;

    await fetch(url, {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({
        chat_id: process.env.CHAT_ID,
        text
      })
    });

    return { statusCode:200, body: JSON.stringify({ok:true}) };

  } catch(e){
    return { statusCode:500, body: e.message };
  }
};
