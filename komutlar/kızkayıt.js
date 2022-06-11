const Discord = require("discord.js");
const db = require('quick.db');
const client = require("..");

exports.run = async (bot, message, args) => {
  if (!message.member.roles.cache.find(x=>x.id==="YETKILI ID"))
  return message.channel.send(
    'Bu komudu kullacak kadar yetkili değilsin üzgünüm.'
  );
  let member = message.mentions.members.first();
  let isim = args[1]
  let yas = args[2]
  if (!member) return message.reply("..birini etiketlemedin??");
  if (!isim) return message.reply("..isim yazmadın? isimsiz mi bu kişi??");
  if (!yas  ) return message.reply("..yaşını yazmadın??");
  member.setNickname(`${isim} | ${yas}`);
  member.roles.remove("KAYITSIZ ID")
  member.roles.add("KIZ ID")

let yetkili = message.member

  db.add(`toplamayit_${yetkili.id}`,1)

  const kız = new Discord.MessageEmbed()
  .setDescription(`${member}, kayıt edildi!`)
  .setColor("RANDOM")
  message.channel.send({ embeds: [kız] }); 

  db.add(`kızkayit_${yetkili.id}`,1)
let sohbetkanalid = "984809133024870400"
client.channels.cache.get(sohbetkanalid).send(`${member} az önce kayıt edildiii`)
    }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
};
exports.help = {
  name: "kız",
  description: "Kayıt Sistemi",
  usage: "kız"
};