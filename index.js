const Client = require('./Struct/Client.js');

new Client({ ws: { intents: ["GUILD_MEMBERS ", "GUILD_PRESENCES"] } })
	.connect();

