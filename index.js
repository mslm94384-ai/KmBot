import { Client } from 'meowsab';
import { group, access } from "./system/control.js";
import UltraDB from "./system/UltraDB.js";
import sub from './sub.js';

/* =========== Client ========== */
const client = new Client({
  phoneNumber: '201044013292', // Bot number (تم التحديث)
  prefix: [".", "/", "!"],
  fromMe: true, // عشان البوت يرد على نفسه (تم التحديث)
  owners: [
  // Owner 1 - فليكس
    { name: "Flex", lid: "247579682029763@lid", jid: "201224565250@s.whatsapp.net" },
  // Owner 2 - سوكونا
    { name: "Sukuna", lid: "221307316789354@lid", jid: "201044013292@s.whatsapp.net" },
  // Owner 3 - ÄĻÏ MËĐȞÄȚ
    { name: "ÄĻÏ MËĐȞÄȚ", jid: "201276395524@s.whatsapp.net", lid: "50414477168824@lid" },
  // Owner 4 - ايرن
   { name: "Erin", jid: "201227812859@s.whatsapp.net", lid: "51664513925368@lid" }
  ],
  settings: { noWelcome: false },
  commandsPath: './plugins'
});

client.onGroupEvent(group);
client.onCommandAccess(access);

/* =========== Database ========== */
if (!global.db) {
    global.db = new UltraDB();
}

/* =========== Config ========== */
const { config } = client;
config.info = { 
  nameBot: "♡ 𝙀𝙍𝙄𝙉 🧛‍♂️ 〈", // تم التغيير من بومني لـ Erin
  nameChannel: "𝐄𝐫𝐢𝐧 𝐁𝐨𝐭 🧛‍♂️🧟‍♀️", // تم التغيير
  idChannel: "120363225356834044@newsletter",
  urls: {
    repo: "https://github.com/deveni0/Pomni-AI",
    api: "https://emam-api.web.id",
    channel: "https://whatsapp.com/channel/0029Vb3UUKz3QxS3bgWmTc3x" // رابط قناتك الجديدة
  },
  copyright: { 
    pack: '𝐄𝐑𝐈𝐍 🦇', // تم التغيير
    author: 'Erin' // تم التغيير
  },
  images: [
    "https://i.pinimg.com/originals/11/26/97/11269786cdb625c60213212aa66273a9.png",
    "https://i.pinimg.com/originals/e2/21/20/e221203f319df949ee65585a657501a2.jpg",
    "https://i.pinimg.com/originals/bb/77/0f/bb770fad66a634a6b3bf93e9c00bf4e5.jpg"
  ]
};

/* =========== Start ========== */
client.start();

setTimeout(async () => {
if (client.commandSystem) { 
sub(client)
  }
}, 2000);


/* =========== Catch Errors ========== */
process.on('uncaughtException', (e) => {
    if (e.message.includes('rate-overlimit')) {}
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err)
});


/* 
=========== Memory Monitor ========== 

setInterval(() => {
    const used = process.memoryUsage().rss / 1024 / 1024
    if (used > 800) {
        console.log(`🔄 Bot memory full (${used.toFixed(1)}MB), restarting...`)
        process.exit(1) 
    }
}, 300_000) 

*/
