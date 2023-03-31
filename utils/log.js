const chalk = require('chalk');
module.exports = (data, option) => {
	switch (option) {
		case "warn":
				console.log(chalk.bold.hex("#ff0000").bold('» Lỗi « ') + data);
			break;
		case "error":
			console.log(chalk.bold.hex("#ff0000").bold('» Lỗi « ') + data);
			break;
		default:
				console.log(chalk.bold.hex("#03e2ff").bold(`${option} » `) + data);
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.hex("#00FF7F").bold('»𝐙𝐞𝐮𝐬 🐦« ') + data);
			break;
		case "error":
		console.log(chalk.bold.hex("#FFFF00").bold('»𝐓𝐫𝐢𝐞̣̂𝐮 𝐓𝐚̀𝐢 𝐓𝐚̂𝐧« ') + data);
			break;
		default:
			console.log(chalk.bold.hex("#00FF7F").bold(`»𝐙𝐞𝐮𝐬 🐦«  `) + data);
			break;
	}
}