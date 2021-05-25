module.exports = {
    name: "ping",
    aliases: ["pong"],
    usage: "ping",
    description: "Get the bot's ping!",
    
    run: async (client, message, args) => {

     let start = Date.now();
  
  message.channel.send({embed: {description: "Looks like the bot is slow.", color: "00fff8"}}).then(m => {
    
    let end = Date.now();
    
    let embed = new discord.MessageEmbed()
    .setAuthor("Ping!", message.author.avatarURL())
    .addField("API Latency", Math.round(client.ws.ping) + "ms", true)
    .addField("Message Latency", end - start + "ms", true)
    .setColor("00fff8");
    m.edit(embed).catch(e => message.channel.send(e))
    
  })

    }
};
