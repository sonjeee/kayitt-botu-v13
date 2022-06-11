const Discord = require("discord.js");
const db = require('quick.db');
const client = require("..");

exports.run = async (bot, message, args) => {
  if (!message.member.roles.cache.find(x=>x.id==="YETKILI ID"))
  return message.channel.send(
    'Bu komudu kullacak kadar yetkili değilsin üzgünüm.'
  );
  let yetkili = message.member

 let toplam = db.get(`toplamayit_${yetkili.id}`)
 if (toplam === null) toplam = 0;

 let kiz = db.get(`kızkayit_${yetkili.id}`)
 if (kiz === null) kiz = 0;

  let erkek = db.get(`erkekkayit_${yetkili.id}`)
  if (erkek === null) erkek = 0;

  const kayıt = new Discord.MessageEmbed()
  .setDescription(`
  Yetkili: ${yetkili}
  Toplam: ${toplam}
  Kız: ${kiz}
  Erkek: ${erkek}
  `)
  .setColor("RANDOM")
  message.channel.send({ embeds: [kayıt] }); 

    }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
};
exports.help = {
  name: "kayıtsay",
  description: "Kayıt Sistemi",
  usage: "kayıtsay"
};