/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2349164898577','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Boss-Bot', 'Israel'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Boss-Bot',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUa4+iSBT9L/VVM6LyEJJOBvABPhAVn5v5UEIB1WCBVQWIE//7Brt7erLJzvZ+Kwo499xzzr0/AckwQzNUA+0nyCkuIUfNkdc5AhowijBEFLRBADkEGsAmZjWJ2W46kNTrIjy1zDJtdTJLzCaHYi1h1cxXeRUbe/YCHm2QF+cU+38AHAXFyPDSsT31M2lrDgcqXlieUXFDmE1r4xbn0Hu14Xa2E1/Ao0GEmGISjfIYXRCF6QzVLsT0a/T1SVcc3iWxtKK9Z6aJKxD7VR6OzhNdDfcp6cUesQNRTVLha/RdaXfX53VcxIF1cuROUlnZunNwknM/J/0Fmx02N29+iIWt/kaf4YigwA4Q4ZjXX9Z9s3S6CxX57OpMW/Xm5JTG2WP6VpwNFGSF1nabLCtJ53L6Rd2NV8nvhobSCUcOREXlLA+tzr23Wc2P0d0/D3BPUna3XuXto9+Ju/QjK8n/0X1lHlaBFOSSd7xCd1iUAi6381mL5vZ6mZ/W80uvb49vkjNefY3++r6TW2UWKa2+7zPH2OSufH9NE2GnR8nJtGaXlbxP3GNo2Z/0IS/on1hej/ue6Kpk6K6dhbHubElH3fFVQU/QspWwkg/m4iDTYHCXLLNclvJdbqFkcMiu+1lrfugTspPXEuKGN+mb7EwCXSmG0cuzowTVdgC07qMNKIow4xRynJHnnSS3AQzKDfIp4k95wTRfel0adPvxwkiU5MquZtfaqsuzJWDnNFy7VJXhkXYmifAC2iCnmY8YQ4GFGc9ovUCMwQgxoP31ow0IuvE345py/W4bhJgyviVFnmYw+HD14yX0/awgfFMT32wOiAJN+LxGnGMSsUbHgkDqx7hEZgw5A1oIU4Z+dYgoCoDGaYF+Ta2ZBY3wK9cbjY/WCrTB5WkIDoAGen1R7criQB1IiqJ1v7NvVQML8/wbQRy0AYGXp20ZY6AN0udPkiL35K4oy/JAEkWt+725fvxi24AHiEOcMqAB03aXV6UyRvNJTXxhMtFHkW5GOvjs7iMmbzZskwF2xsjOmUvX1Wqp2okte/0w2zmvUieuaJTNJrMdEYZPG/4JAjQAVVZMxnrgUSqQKiGiMuVyb9g/9faqvpbKTW67gqcHc3GWVETaTKXaDPSbxAZqXHviai+0zmNu7lf51Dr2ig7K1ZupvzTVAlRiH/1ebK3vkBVXFjf2jmwZxmVss41wmPj3yytG9V22d9skNTsuuVR78bgpM+Ps4mF/MuBHtj8Hcm2w87q79C+JMW/drbt12xj6W4CfA5S+Ly78jFbjW/MYYvTcA+/+/KePb8SbuAmP9m8Y75vl3zbWburar+sDnp2HsuCPhuVmai4TtS+PvWMrFP2ZODNjnJ5UXQWPx482yFPIw4xegAbY5QxBG9CsaMJrkzD7QyVT39p6FDlN2ylkXP8cCA9fEOPwkgOtqyg9SZGEZmSar1ya5RZkMdAAufSNM3j8DQqjXYBdBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
