const handler = async (m, { conn, command, text }) => {
    if (!global.db?.users[m.sender]) {
        global.db.users[m.sender] = {};
    }
    
    const user = global.db.users[m.sender];
    
    if (command === "تسجيل") {
        if (!text) {
            return m.reply(`🧛 *طريقة التسجيل في عالم الظلام:* 🦇\n\nتسجيل الاسم|العمر\n\nمثال:\nتسجيل إيرن|20`);
        }
        
        const [name, age] = text.split('|').map(s => s.trim());
        
        if (!name || !age) {
            return m.reply(`🧟 *خطأ:* يجب كتابة الاسم والعمر مفصولين بـ |\n\nمثال:\nتسجيل إيرن|20`);
        }
        
        if (isNaN(age) || age < 1 || age > 30) {
            return m.reply(`🦇 *خطأ:* العمر يجب أن يكون رقماً بين 1 و 30`);
        }
        
        user.name = name;
        user.age = parseInt(age);
        
        const profilePic = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/originals/11/26/97/11269786cdb625c60213212aa66273a9.png');
        
        const msg = `╭─┈─┈─┈─⟞🧛⟝─┈─┈─┈─╮
┃ *✅ تـم الـتـسـجـيـل فـي الـظـلام*
╰─┈─┈─┈─⟞🦇⟝─┈─┈─┈─╯

┃ @${m.sender.split('@')[0]}
┃ 🏷️ *الاسـم:* ${name}
┃ 📅 *الـعـمـر:* ${age} سنة

╭─┈─┈─┈─⟞🧛⟝─┈─┈─┈─╮
┃ *أهـلاً وسـهـلاً فـي عـالـم الـظـلام* 🌙
╰─┈─┈─┈─⟞🧟⟝─┈─┈─┈─╯`;

        await conn.sendMessage(m.chat, {
            image: { url: profilePic },
            caption: msg,
            contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 1,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '0029VbCoE0P8aKvPbZf8hU1D@newsletter',
                    newsletterName: '𝐄𝐒𝟕 🧛',
                    serverMessageId: 0
                },
                externalAdReply: {
                    title: "𝐄𝐒𝟕 🧛 | عالم الظلام",
                    body: "تـسـجـيـل جـديـد فـي عـالـم الـظـلام",
                    thumbnailUrl: profilePic,
                    sourceUrl: '',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: reply_status });
    }
    
    else if (command === "حذف_تسجيلي") {
        if (!user.name && !user.age) {
            return m.reply(`🦇 *ليس لديك تسجيل في عالم الظلام لحذفه*\n\nاكتب .تسجيل اسم|عمر للتسجيل`);
        }
        
        delete user.name;
        delete user.age;
        
        const profilePic = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/originals/11/26/97/11269786cdb625c60213212aa66273a9.png');
        
        const msg = `╭─┈─┈─┈─⟞🗑️⟝─┈─┈─┈─╮
┃ *✅ تـم حـذف الـتـسـجـيـل*
╰─┈─┈─┈─⟞🦇⟝─┈─┈─┈─╯

┃ @${m.sender.split('@')[0]}
┃ 🏷️ تم حذف بياناتك من الظلام

╭─┈─┈─┈─⟞🧛⟝─┈─┈─┈─╮
┃ *يـمـكـنـك الـتـسـجـيـل مـرة أخـرى* 🌙
╰─┈─┈─┈─⟞🧟⟝─┈─┈─┈─╯`;

        await conn.sendMessage(m.chat, {
            image: { url: profilePic },
            caption: msg,
            contextInfo: {
                mentionedJid: [m.sender],
                isForwarded: true,
                forwardingScore: 1,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '0029VbCoE0P8aKvPbZf8hU1D@newsletter',
                    newsletterName: '𝐄𝐒𝟕 🧛',
                    serverMessageId: 0
                },
                externalAdReply: {
                    title: "𝐄𝐒𝟕 🧛 | عالم الظلام",
                    body: "تـم حـذف الـتـسـجـيـل",
                    thumbnailUrl: profilePic,
                    sourceUrl: '',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: reply_status });
    }
};

handler.usage = ["تسجيل", "حذف_تسجيلي"];
handler.category = "bank";
handler.command = ["تسجيل", "حذف_تسجيلي"];

export default handler;
