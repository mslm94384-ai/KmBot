const handler = async (m, { conn, text, bot }) => {
if (!text) return m.reply("⚔️ ~ حط نص جنب الأمر يا جندي ~ 🔥")
const { api } = bot.config.info.urls
const url = api + `/home/sections/Ai/api/Ai/CustomPrompt?q=${text}`;
const response = await fetch(url)
const { data } = await response.json()

await conn.sendMessage(m.chat, {
    text: data,
    contextInfo: {
        isForwarded: true,
        forwardingScore: 1,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '0029VbCoE0P8aKvPbZf8hU1D@newsletter',
            newsletterName: '𝐄𝐒𝟕 🧛',
            serverMessageId: 0
        }
    }
}, { quoted: m })
};

handler.usage = ["اوبن"];
handler.category = "ai";
handler.command = ["اوبن"];

export default handler;
