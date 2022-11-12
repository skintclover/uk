module.exports.config = {
	name: "leaveNoti",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "HĐGN",
	description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "𝐓𝐮̛̣ 𝐑𝐨̛̀𝐢" : "𝐁𝐢̣ 𝐐𝐮𝐚̉𝐧 𝐓𝐫𝐢̣ 𝐕𝐢𝐞̂𝐧 𝐊𝐢𝐜𝐤";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `${threadID}.gìf`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

	(typeof data.customLeave == "undefined") ? msg = "[👤] {name} 𝐕𝐮̛̀𝐚 {type} 𝐊𝐡𝐨̉𝐢 𝐁𝐨𝐱 𝐃𝐨 𝐍𝐠𝐡𝐢𝐞̣̂𝐩 𝐂𝐡𝐮̛𝐨̛́𝐧𝐠 𝐐𝐮𝐚́ 𝐍𝐚̣̆𝐧𝐠. 𝐂𝐡𝐮́𝐜 {name} 𝐂𝐨̂́ 𝐆𝐚̆́𝐧𝐠 𝐆𝐢𝐚̉𝐢 𝐍𝐠𝐡𝐢𝐞̣̂𝐩. 𝐒𝐚𝐲 𝐆𝐨𝐨𝐝𝐁𝐲𝐞 𝐕𝐚̀ 𝐊𝐡𝐨̂𝐧𝐠 𝐇𝐞̣𝐧 𝐆𝐚̣̆𝐩 𝐋𝐚̣𝐢💞\n" : msg = data.customLeave;
	msg = msg
  .replace(/\{name}/g, name)
  .replace(/\{type}/g, type);

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

	if (existsSync(gifPath)) formPush = { body: msg, attachment: createReadStream(gifPath) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}