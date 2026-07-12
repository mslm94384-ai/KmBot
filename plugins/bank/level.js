export default async function before(m, { conn }) {
    if (!global.db?.users[m.sender]) return false;
    
    const user = global.db.users[m.sender];
    let xp = user.xp || 0;
    let level = user.level || 0;
    let nameLevel = user.nameLevel || '🧛 زومبي مبتدئ';
    
    const levels = [
        { min: 0, max: 99, name: '🧛 زومبي مبتدئ' },
        { min: 100, max: 249, name: '🧟 غول جائع' },
        { min: 250, max: 499, name: '🦇 مصاص دماء متدرب' },
        { min: 500, max: 799, name: '🧛 مصاص دماء متقدم' },
        { min: 800, max: 1199, name: '🧟 غول الظلام' },
        { min: 1200, max: 1699, name: '🦇 أمير الظلام' },
        { min: 1700, max: 2299, name: '🧛 مرعب الليل' },
        { min: 2300, max: 2999, name: '🧟 سيد الغول' },
        { min: 3000, max: 3799, name: '🦇 ملك مصاصي الدماء' },
        { min: 3800, max: 4699, name: '🧛 إمبراطور الظلام' },
        { min: 4700, max: 5699, name: '🧟 كابوس الغول' },
        { min: 5700, max: 6799, name: '🦇 حارس المقبرة' },
        { min: 6800, max: 7999, name: '🧛 سيد الموتى' },
        { min: 8000, max: 9299, name: '🧟 ملك الغيلان' },
        { min: 9300, max: 10699, name: '🦇 أسطورة الليل' },
        { min: 10700, max: 12199, name: '🧛 أمير الأبدية' },
        { min: 12200, max: 13799, name: '🧟 غول العالم السفلي' },
        { min: 13800, max: 15499, name: '🦇 إله الظلام' },
        { min: 15500, max: 17499, name: '🧛 سيد الأكفان' },
        { min: 17500, max: 19999, name: '🧟 ملك الزومبي' },
        { min: 20000, max: Infinity, name: '🌀 الأبدي الأوحد' }
    ];
    
    let newLevel = level;
    let newNameLevel = nameLevel;
    let levelUp = false;
    let oldLevel = level;
    
    for (const lvl of levels) {
        if (xp >= lvl.min && xp <= lvl.max) {
            const currentLevelNum = levels.findIndex(l => l.min === lvl.min);
            if (currentLevelNum !== level) {
                newLevel = currentLevelNum;
                newNameLevel = lvl.name;
                levelUp = true;
                oldLevel = level;
            }
            break;
        }
    }
    
    if (levelUp) {
        user.level = newLevel;
        user.nameLevel = newNameLevel;
        
        const msg = `╭─┈─┈─┈─⟞🧛⟝─┈─┈─┈─╮
┃ *🦇 تـرقـيـة فـي عـالـم الظـلام 🧟*
╰─┈─┈─┈─⟞🦇⟝─┈─┈─┈─╯

┃ @${m.sender.split('@')[0]}
┃ المستوى السابق: *${oldLevel}*
┃ المستوى الجديد: *${newLevel}*

┃ 🏷️ *لقبك الجديد:*
┃ ✦ ${newNameLevel} ✦

╭─┈─┈─┈─⟞🧛⟝─┈─┈─┈─╮
┃ *الظلام لسه مخلصش يا مخلد* 🌙
╰─┈─┈─┈─⟞🧟⟝─┈─┈─┈─╯`;
        
        await conn.sendMessage(m.chat, {
            text: msg,
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
                    body: "تـرقـيـة فـي عـالـم الظـلام",
                    thumbnailUrl: "https://i.pinimg.com/originals/81/89/fd/8189fd909bbae4ba4e8f1d940f500a60.jpg",
                    sourceUrl: '',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: reply_status });
    }
    
    return false;
         }
