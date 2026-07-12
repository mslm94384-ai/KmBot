const handler = async (m, { conn, command }) => {
  if (command === "اقفل يبني") {
    await conn.groupSettingUpdate(m.chat, 'announcement');
    m.reply('🔒 *تم قفل البار* 🔒');
  } else if (command === "افتح يبني") {
    await conn.groupSettingUpdate(m.chat, 'not_announcement');
    m.reply('🔓 *تم فتح البار* 🔓');
  }
};

handler.usage = ["اقفل يبني", "افتح يبني"];
handler.category = "admin";
handler.command = ["اقفل يبني", "افتح يبني"];
handler.admin = true;
handler.botAdmin = true;

export default handler;
