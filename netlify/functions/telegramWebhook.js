
exports.handler = async (event) => {
 const update = JSON.parse(event.body || "{}");

 if(update.callback_query){
   const data = update.callback_query.data;

   let msg = "Unknown action";

   if(data === "acc") msg = "Appointment Accepted";
   if(data === "rej") msg = "Appointment Rejected";
   if(data === "time") msg = "Set time requested";

   return {
     statusCode:200,
     body: JSON.stringify({ok:true})
   };
 }

 return {statusCode:200, body:"ok"};
};
