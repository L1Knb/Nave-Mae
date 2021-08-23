const config        = require("../config.json");
const commands      = require("./CommandsReader.js")(config.prefix);
const unknowCommand = require("./unknowCommand");


module.exports = async (client, msg) => {
  client.on("message", (msg) => {

  if(!msg.author.bot && msg.guild)
  {
        if(config.debug) console.log(`${msg.author.username}: ${msg.content}`);

        const args = msg.content.split(" ");

        if(commands[args[0]])
        {

            if(verificarPermissao(msg.member,args[0]))
            {
              commands[args[0]](client,msg, args);
            }
            
            else msg.reply("você não tem permissão para executar esse comando!");
            
        }
        
        else if(args[0].startsWith(config.prefix)) unknowCommand(client,msg);

        if (msg.content == 'BOM DIA') {
            msg.reply(`BOM DIA VAGABUNDO`);
          }
      
          else if (msg.content == 'BOA TARDE') {
            msg.reply(`BOA TARDE PORRA`);
          }
      
          else if (msg.content == 'BOA NOITE') {
            msg.reply(`BOA NOITE CARALHO`);
          }
      
          else {
      
            const menssagem = msg.content.toLowerCase();
      
            if (menssagem == 'oi') {
            msg.reply(`oiiieeee :3 (oi cringe)`);
          }
        
            if (menssagem == 'bom dia') {
              msg.reply(`Bom dia`);
            }
        
            else if (menssagem == 'boa tarde') {
              msg.reply(`Boa tarde`);
            }
          
            else if (menssagem == 'boa noite') {
              msg.reply(`Boa noite`);
            }
      
          }
    }
  });  
}      