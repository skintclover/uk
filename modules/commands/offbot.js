module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 3,
	credits: "HTHB",
	description: "Tắt Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("[⚜️] 𝐓𝐫𝐢𝐞̣̂𝐮 𝐓𝐚̀𝐢 𝐓𝐚̂𝐧 [⚜️]\n[🔰𝙊𝙁𝙁𝘽𝙊𝙏🔰] Bye cậu chủ nha em đi ngủ đây:33",event.threadID, () =>process.exit(0))