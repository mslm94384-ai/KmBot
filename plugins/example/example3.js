const example = async (m, { conn }) => {

await conn.sendButton(m.chat, {
  imageUrl: "https://i.pinimg.com/736x/f3/5d/2e/f35d2ed376e03aa254e7f34b4b94992e.jpg",
  bodyText: "🧛 مرحباً بك في عالم الظلام 🦇",
  footerText: "𝐄𝐒𝟕 🧛",
  buttons: [
    // 1. Quick Reply
    { name: "quick_reply", params: { display_text: "👍 تمام", id: "quick1" } },
    { name: "quick_reply", params: { display_text: "👎 مش عاجبني", id: "quick2" } },
    
    // 2. URL Button
    { name: "cta_url", params: { display_text: "🔗 قناتي", url: "https://whatsapp.com/channel/0029VbCoE0P8aKvPbZf8hU1D" } },
    
    // 3. Call Button
    { name: "cta_call", params: { display_text: "📞 اتصل بيا", phone_number: "201234567890" } },
    
    // 4. Copy Button
    { name: "cta_copy", params: { display_text: "📋 انسخ الكود", copy_code: "𝐄𝐒𝟕" } },
    
    // 5. Single Select Menu
    { name: "single_select", params: { 
      title: "📋 اختار من القائمة",
      sections: [{
        title: "الخيارات",
        rows: [
          { title: "خيار 1", description: "وصف الخيار الأول", id: "opt1" },
          { title: "خيار 2", description: "وصف الخيار الثاني", id: "opt2" }
        ]
      }]
    }},
    
    // 6. Call Permission Request
    { name: "call_permission_request", params: { 
      display_text: "📞 طلب اتصال",
      phone_number: "201234567890",
      duration: 60
    }}
  ],
  mentions: [m.sender],
  newsletter: {
      name: '𝐄𝐒𝟕 🧛',
      jid: '0029VbCoE0P8aKvPbZf8hU1D@newsletter'
    },
  interactiveConfig: {
    buttons_limits: 1, // لازم تبقي واحد
    list_title: "𝐄𝐒𝟕 🧛",
    button_title: "اضغط هنا",
    canonical_url: "https://example.com"
  }
}, m);


};
example.usage = ["تست3"]
example.category = "example";
example.command = ["تست3"]
export default example;
