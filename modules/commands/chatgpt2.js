module.exports.config = {
  name: "chatgpt2",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "npham",
  description: "Chat với chatgpt",
  commandCategory: "Search",
  cooldowns: 0,
  dependencies: {
    "axios": ""
  }
};
 
module.exports.run = async ({ api, event, args }) => {
  try {
    const axios = global.nodemodule["axios"];
    const { threadID, messageID} = event;
    const text = args.join(" ");
    if (!text) return api.sendMessage('[⚜️] Cậu vui lòng nhập câu hỏi cần trả lời!', event.threadID, event.messageID);
    const headers = {
  'User-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.0.0',
  'Content-Type': 'application/json'
};
const data = JSON.stringify({"prompt":text});
 
 
    const res = await axios.post('https://www.teach-anything.com/api/generate', data, { headers });
    api.sendMessage(res.data, event.threadID, event.messageID);
  } catch (err) {
    console.log(err)
    return api.sendMessage("[⚜️] Không thể xử lý yêu cầu của cậu!", event.threadID);
  }
}