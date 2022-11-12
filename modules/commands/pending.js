module.exports.config = {
    name: "pending",
    version: "1.0.6",
    credits: "CatalizCS mod by Kadeer",
    hasPermssion: 2,
    description: "Quản lý tin nhắn chờ của bot",
    commandCategory: "Admin",
    usages: "[u] [t] [a]",
    cooldowns: 5
};

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
        }
        return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] Đã 𝗧ừ 𝗖𝗵ố𝗶 𝗧𝗵à𝗻𝗵 𝗖ô𝗻𝗴 !`, threadID, messageID);
    }
    else {

        const index = body.split(/\s+/);
        const fs = require("fs");       
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(`${singleIndex} Không phải là một con số hợp lệ`, threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by Kadeer" : global.config.BOTNAME}`, handleReply.pending[singleIndex - 1].threadID, api.getCurrentUserID());
            api.sendMessage("", event.threadID, () => api.sendMessage({body:`━━━━━━━━━━━━━━━━━━
𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚
━━━━━━━━━━━━━━━━━━
[🎊] 𝗗𝘂̀𝗻𝗴 /𝗺𝗲𝗻𝘂 Đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́
[🎶] 𝗡𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁 𝗹𝗲̣̂𝗻𝗵 𝗱𝘂̀𝗻𝗴 !𝗺𝗲𝗻𝘂 + 𝘁𝗲̂𝗻 𝗹𝗲̣̂𝗻𝗵 
[📱] 𝗱𝘂̀𝗻𝗴 𝗮𝗱𝗺𝗶𝗻 Đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗮𝗱𝗺𝗶𝗻
[💌] /𝗰𝗮𝗹𝗹𝗮𝗱 Đ𝗲̂̉ 𝗹𝗶𝗲̂𝗻 𝗵𝗼̂̃ 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 Đ𝘂̛𝗼̛̣𝗰 𝗵𝗼̂̉ 𝘁𝗿𝗼̛̣ 𝗻𝗵𝗲́
[👤] 𝗟𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻 Đ𝗲̂̉ Đ𝘂̛𝗼̛̣𝗰 𝗱𝘂𝘆𝗲̣̂𝘁 𝗯𝗼𝘅 𝗻𝗵𝗲́
[🌐] 𝗙𝗯 𝗮𝗱𝗺𝗶𝗻: https://www.facebook.com/profile.php?id=1712332674`, attachment: fs.createReadStream(__dirname + "/cache/joinbox/join.mp4")} ,handleReply.pending[singleIndex - 1].threadID));
            count+=1;
            
        }
        return api.sendMessage(`[ 𝗠𝗢𝗗𝗘 ] Đã 𝗣𝗵ê 𝗗𝘂𝘆ệ𝘁 𝗧𝗵à𝗻𝗵 𝗖ô𝗻𝗴 ✓`, threadID, messageID);
    }
}

module.exports.run = async function({ api, event, args, permission, handleReply }) {
        if (args.join() == "") {api.sendMessage("[ 𝗠𝗢𝗗𝗘 ] 𝗕ạ𝗻 𝗰ó 𝘁𝗵ể 𝗱ù𝗻𝗴 𝗽𝗲𝗻𝗱𝗶𝗻𝗴:                [ 𝗠𝗢𝗗𝗘 ] 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝘂𝘀𝗲𝗿: 𝗛à𝗻𝗴 𝗰𝗵ờ 𝗻𝗴ườ𝗶 𝗱ù𝗻𝗴:                                                              [ 𝗠𝗢𝗗𝗘 ] 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝘁𝗵𝗿𝗲𝗮𝗱: 𝗛à𝗻𝗴 𝗰𝗵ờ 𝗻𝗵ó𝗺:   [ 𝗠𝗢𝗗𝗘 ] 𝗣𝗲𝗻𝗱𝗶𝗻𝗴 𝗮𝗹𝗹:𝗧ấ𝘁 𝗰ả 𝗵à𝗻𝗴 𝗰𝗵ờ",event.threadID, event.messageID);
    }
        const content = args.slice(1, args.length);   
     switch (args[0]) {
    case "user":
    case "u":
    case "-u":
    case "User": {
    if (!permission.includes(event.senderID)) return api.sendMessage("Cút?", event.threadID, event.messageID);
    const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("Không thể lấy danh sách đang chờ!", threadID, messageID) }

      const list = [...spam, ...pending].filter(group => group.isGroup == false);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`»「PENDING」«\n❯ Tổng số người dùng cần duyệt: ${list.length} người dùng ❮\n⥥⥥⥥ Reply số thư tự bên dưới để duyệt ⥥⥥⥥\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("»「PENDING」«\n❯ Hiện tại không có người dùng nào trong hàng chờ ❮", threadID, messageID);
}
    case "thread":
    case "-t":
    case "t":
    case "Thread": {
        const permission = ["1712332674"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Cút?", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("Không thể lấy danh sách đang chờ!", threadID, messageID) }

    const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`»「PENDING」«\n❯ Tổng số nhóm cần duyệt: ${list.length} nhóm ❮\n⥥⥥⥥ Reply số thư tự bên dưới để duyệt ⥥⥥⥥\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("»「PENDING」«\n❯ Hiện tại không có nhóm nào trong hàng chờ ❮", threadID, messageID);
        }
    case "all":
    case "a":
    case "-a":
    case "al": {
        const permission = ["1712332674"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Cút?", event.threadID, event.messageID);
     const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;
    
    try {
        var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
        var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
    } catch (e) { return api.sendMessage("Không thể lấy danh sách đang chờ!", threadID, messageID) }

            const listThread = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);
        const listUser = [...spam, ...pending].filter(group => group.isGroup == false)
    const list = [...spam, ...pending].filter(group => group.isSubscribed);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(`»「PENDING」«\n❯ Tổng số User & Thread cần duyệt: ${list.length} User & Thread ❮\n⥥⥥⥥ Reply số thư tự bên dưới để duyệt ⥥⥥⥥\n${msg}`, threadID, (error, info) => {
        global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
    }, messageID);
    else return api.sendMessage("»「PENDING」«\n❯ Hiện tại không có User & Thread nào trong hàng chờ ❮", threadID, messageID);
        }
    }       
}