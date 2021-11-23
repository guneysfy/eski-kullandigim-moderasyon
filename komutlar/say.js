  const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {

  if (!message.member.roles.cache.has("everyone_rol_id") && !message.member.hasPermission("MANAGE_MESSAGES") ) 

   return message.channel.send(hata).then(m =>m.delete({timeout:10000}))
    const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.memberCount.toString().replace(/ /g, "    ")
    var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
    '0': `0`,
    '1': `1`,
    '2': `2`,
    '3': `3`,
    '4': `4`,                       
    '5': `5`,
    '6': `6`,
    '7': `7`,
    '8': `8`,
    '9': `9`}[d];
      })
    }/////////////////////////////
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
    '0': `0`,
    '1': `1`,
    '2': `2`,
    '3': `3`,
    '4': `4`,                       
    '5': `5`,
    '6': `6`,
    '7': `7`,
    '8': `8`,
    '9': `9`}[d];
      })
    }

  /////////////////////////////////////////
 const rol = 'tagrolü' //tag rolü buraya !!!!
const sayı = msg.guild.roles.cache.get(rol).members.size
if (!sayı) {
var taglıkisi = '0'
} else {
var taglıkisi = sayı
}
  //////////////////////////////////////////
  var onlayn = message.guild.members.cache.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= onlayn.match(/([0-9])/g)
  onlayn = onlayn.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
    '0': `0`,
    '1': `1`,
    '2': `2`,
    '3': `3`,
    '4': `4`,                       
    '5': `5`,
    '6': `6`,
    '7': `7`,
    '8': `8`,
    '9': `9`}[d];
      })
    }

  ///verhain farkıyla bebeğim
const emoji1 = client.emojis.cache.get("emojiid");

 var embed1 = new MessageEmbed()
 .setColor('#random')
 .setAuthor('Verhain #4004 ')
 .setDescription(`${emoji1} **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n ${emoji1} **Sunucumuzda Toplam** ${onlayn} **Çevrimiçi üye bulunmakta.** \n\n ${emoji1} **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n ${emoji1} **Tagımızda Toplam ** ${taglıkisi} **Kişi bulunmakta.**`)
 .setFooter(`${message.author.username}`)
 
     var hata = new MessageEmbed()
    .setColor('#random')
    .setAuthor(`Hata`)
    .setDescription(`**Bu komutu kullanmaya hakkınız yoktur!**`)
 
  msg.channel.send(embed1);
  
  /*client.setInterval(() => {
  let channel = client.channels.get("kanalid"); 
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ / Çevrimiçi üye: ${onlayn}`); //kanal açıklama oto 
}, 10000);*/
  }
exports.conf = { ///verhain
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
    description: 'Sunucuyu sayar',
  name: 'say'
}