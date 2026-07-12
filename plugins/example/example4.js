const example = async (m, { conn }) => {

await conn.sendCarousel(m.chat, {
  headerText: '🦇 معرض الظلام 🧛',
  globalFooterText: 'اسحب لترى المزيد → 🌙',
  cards: [
    {
      imageUrl: 'https://g.top4top.io/p_3700yob0b1.jpg',
      bodyText: '*🧟 مخلود 1*',
      footerText: '🦇 ساكن الليل',
      buttons: [
        { name: 'quick_reply', params: { display_text: '👍 يعجبني', id: 'like1' } },
        { name: 'cta_url', params: { display_text: '🔗 تحميل', url: 'https://example.com/img1' } }
      ]
    },
    {
      imageUrl: 'https://h.top4top.io/p_37009f24s1.jpg',
      bodyText: '*🧟 مخلود 2*',
      footerText: '🌙 سيد الظلام',
      buttons: [
        { name: 'quick_reply', params: { display_text: '❤️ حب', id: 'love2' } },
        { name: 'cta_copy', params: { display_text: '📋 نسخ الرابط', copy_code: 'https://example.com/img2' } }
      ]
    },
{
      mediaUrl: 'https://qu.ax/x/6GwxA.mp4',
      mediaType: 'video',
      bodyText: '🧛 فيديو الظلام',
      buttons: [
        { name: 'cta_url', params: { display_text: 'تفاصيل', url: 'https://example.com/details' } }
      ]
    },
    {
      imageUrl: 'https://i.top4top.io/p_37000qovy1.jpg',
      bodyText: '*🧟 مخلود 3*',
      footerText: '🦇 فنان الظلام',
      buttons: [
        { 
          name: 'single_select', 
          params: { 
            title: '📁 خيارات إضافية',
            sections: [{
              title: 'اختر الإجراء',
              rows: [
                { title: 'حفظ في المعرض', id: 'save3' },
                { title: 'مشاركة مع صديق', id: 'share3' },
                { title: 'الإبلاغ عن الصورة', id: 'report3' }
              ]
            }]
          } 
        }
      ]
    }
  ],
  mentions: [m.sender],
  newsletter: {
      name: '𝐄𝐒𝟕 🧛',
      jid: '0029VbCoE0P8aKvPbZf8hU1D@newsletter'
    },
}, m)

};
example.usage = ["تست4"]
example.category = "example";
example.command = ["تست4"]
export default example;
