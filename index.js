const Discord = require('discord.js');
    const fs = require('fs');
    
    const { Client, Intents } = require('discord.js');
    
    const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
    
    let rawdata = fs.readFileSync('config.json');
    let config = JSON.parse(rawdata);
    
    const TOKEN = config.token
    const prefix = config.prefix
    const interacao = require("./scripts/interation.js");
    
    client.once('ready', () => {
        console.log(`Logado com o bot ${client.user.tag}`);
        interacao(client);
    
    });

client.login(TOKEN);