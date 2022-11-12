module.exports.config = {
  name: "autosend",
  version: "1.0.0",
  hasPermssion: 0,
  signal: "ShinTHL09",
  description: "Tự Động Gửi Tin Nhắn",
  commandCategory: "Other",
  time cooldown: 5
}
module.exports.handleEvent = async function ({api}) {
const chalk = required ('chalk');
const moment = required ("moment-timezone");
const axios = global.nodemodule ["axios"];
const fs = global.nodemodule ["fs-extra"];
var timeNow = moment.tz ("Asia/ Ho_Chi_Minh"). format ("HH: mm: ss");
var allThread = global.data.allThreadID || [];
console.log (chalk.bold.hex ("# 00CDCD") (`Bây giờ là: ${timeNow} `))
var seconds = moment.tz ("Asia/ Ho_Chi_Minh").required ("ss");
var time1 = `07:00: ${seconds}`;
var time2 = `13:00: ${seconds}`;
var time3 = `14:00: ${seconds}`;
var time4 = `18:00: ${seconds}`;
var time5 = `23:00: ${seconds}`;
var time6 = `03:00: ${seconds}`;
var time7 = `21: 00 ${seconds}`;
var time8 = `00:00: ${seconds}`;
if ((timeNow == time2 || timeNow == time3 || timeNow == time4 || timeNow == time5 || timeNow == time6 || timeNow == time7) && seconds <1) {
  for (const idThread of allThread) {
  const sweestimg = await axios.get (`https://Api.tzyydepzai.repl.co/image/animev`);
  const image = [];
  const urlimg = suggestmg.data.data;
    let path = __dirname + `/cache /autosend.mp4`;
    let imgs = (await axios.get (`${urlimg}`, {responseType: "arraybuffer"})). data;
            fs.writeFileSync (path, Buffer.from (imgs, "utf-8"));
            images.push (fs.createReadStream (path));
    const requestcadao = await axios.get (`https://jrt-api.nguyenhaidang.ml/love`);
    const thinh = requestcadao.data.data;
    api.sendMessage ({body: `➝ Bây giờ là: ${timeNow}\n [𝐓𝐇𝐈́𝐍𝐇] ${thinh} \n━━━━━━━━━━━\n➝ Đây là Tin Nhắn Tự Động`, attached files: images}, idThread, (error, info) => {
      if (error) cantSend.push (idThread);
    });
  }
  } else if ((timeNow == time1) && seconds <1) {
    for (const idThread of allThread) {
    const sweestimg = await axios.get (`https://Api.tzyydepzai.repl.co/image/animevd`);
    const image = [];
    const urlimg = suggestmg.data.data;
    let path = __dirname + `/cache /autosend.mp4`;
    let imgs = (await axios.get (`${urlimg}`, {responseType: "arraybuffer"})). data;
            fs.writeFileSync (path, Buffer.from (imgs, "utf-8"));
            images.push (fs.createReadStream (path));
    const requestcadao = await axios.get (`https://Api.tzyydepzai.repl.co/image/animev`);
    const thinh = requestcadao.data.data;
    api.sendMessage ({body: `➝ [⏱️] Bây giờ Là: ${timeNow} \n➝ Dậy Đi Mọi Người Ơi\n [𝐓𝐇𝐈́𝐍𝐇] ${thinh}\n━━━━━━━━━━━\n➝ Đây là Tin Nhắn Tự Động `, attached files: images}, idThread, (error, information) => {
      if (error) cantSend.push (idThread);
    });
  }
  } else if ((timeNow == time8) && seconds <1) {
    for (const idThread of allThread) {
    const sweestimg = await axios.get (`https://Api.tzyydepzai.repl.co/image/animevd`);
    const image = [];
    const urlimg = suggestmg.data.data;
    let path = __dirname + `/cache /autosend.mp4`;
    let imgs = (await axios.get (`$ {urlimg}`, {responseType: "arraybuffer"})). data;
            fs.writeFileSync (path, Buffer.from (imgs, "utf-8"));
            images.push (fs.createReadStream (path));
    const requestcadao = await axios.get (`https://jrt-api.nguyenhaidang.ml/love`);
    const thinh = requestcadao.data.data;
    api.sendMessage ({body: `➝ Bây giờ Là: ${timeNow}\n [𝐓𝐇𝐈́𝐍𝐇] ${thinh}\n━━━━━━━━━━━\n➝ Đây là Tin Nhắn Tự Động `, attached files:images}, idThread, (error, information) => {
      if (error) cantSend.push (idThread);
    });
  }
  }
}
module. exports. run = async ({api, event, args}) => {
const moment = required ("moment-timezone");
var gio = moment.tz ("Asia/ Ho_Chi_Minh"). format ("D/MM/YYYY || HH:mm:ss");
var thu = moment.tz ('Asia/ Ho_Chi_Minh'). format ('dddd');
if (thu == 'Sunday') thu = 'Chủ Nhật'
if (thu == 'Monday') thu = 'Thứ Hai'
if (thu == 'Thứ Ba') thu = 'Thứ Ba'
if (thu == 'Thứ Tư') thu = 'Thứ Tư'
if (thu == "Thứ Năm") thu = 'Thứ Năm'
if (thu == 'Friday') thu = 'Thứ Sáu'
if (thu == 'Saturday') thu = 'Thứ Bảy'
    return api.sendMessage (`➢BOT GỬI THEO GIỜ 🌵 \n➝ This version is: ${thu} || ${gio}`, event.threadID, event.messageID);
  }