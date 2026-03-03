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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2ZKiSBT9l3zFaEGQxYiKGBZBtEREcamJfmBJIGWtTBaxw3/vwKrq6oeZnpq35CZ5z7n3nHt/gKJEBK5gD2Y/QIVR69VwONZ9BcEMKE0UQQxGIPRqD8yAaMj6ivXyZ9iWKy6imWvoMK7pt9Z+Q6SA20/4rpCWcawHT+A+AlXjZyj4Q0JqIpmkiWPfYdPF69jOee3FpseCclTxmmMP5fyETdNlBU18Avcho4cwKuJ5lcAcYi9bwd72EP4a/U49Gka3co83mtNRe2ypwsqdnbJJTWfcahrLhzdEzMvGPX+NfqnQLveMg82rnt90cUNV12uypLil6bEHc97M174/lnvk3uQ3+gTFBQzNEBY1qvsv911eP5/PyOTMIi3P5mI+9ZcWJllHBZvdoqNrVoSh9dqte1r8GnFHEHYTVdLXzmtG5m50yxUhVqrKT6eTzrLFa8dCautnCVP+TtzGH15J/0/fj/Nun0P/2qltLyyxcWzSRH7xUbJ4jUt7EyzG2ZTTMv2YftE2h/xKhUZc8EJqrMuksd1gonVjsR/r675znLa5aBZ7rIIb/Unfqxv8J5bFJm+wzE7lZNmtmPWSasUta/WMlWvZ1JTw9TiRnPlpfdiV2TndNlJcBoervecvvOqZO6esTkvedZnSkZ1JW9Xlony5bJ8eFaWwN0MwY+4jgGGMSI29GpXFIyYJI+CF7Q4GGNaP9gKO5Bqi+0Pn9oF7tYImV6hK0yi7NtLtNBzfHAoXxpzZdfETGIEKlwEkBIYLROoS92tIiBdDAmZ/fx+BAl7rN+EGOJYZgQhhUrtFU2WlF36o+nHpBUHZFPWuLwJ1OEAMZvRnGNY1KmIy9LEpPBwkqIVq4tUEzCIvI/BXhRDDEMxq3MBfU6uW4dB49cTq0nLLghHIH4KgEMzAhOUkhudESZwKwkwS/iLfuiGvV1XfCliDESi8/KFbSQgYgezxairwE57heJ4Xpxw3PBvi9198h/QhrD2UkQHZfN68Cp0yt1BcBLRhyGYsq7EMPuv7MMqbEG4qIkuHZkVs7HTbjWSmJr9no/JgXabjpMNxuTJWh4LW6Kd/SDJAipSqb00HaeokQSol6pWyGT8rHlq40osgk73CLNesYMHT6UxfcAbn+ZrG/W1n8XttvaL2O5FJVkkkVJxoH9hGkHW1exrQQtiiAP4ONm5v2Ogjcmsm6gIKL2pY3hLEos5Y8Adsb311HKpUXhUHSRde7WPUP0OpNWT5XEvp7drk5t7kxpKS5cIB7xBtFbWC3i38GKHsfXWhh7kG5YbPCMHHJngX6L+VfGM+OI6+j35L8r5c/mVAlcPSNi/OCa18jaeDudbuluomlVhe35+piAtW3EpNUPYiyRK437+PQJV5dVTiHMwAyX0PjAAum8G/ZhGVf0BSZdeU49ga6s48UsufM7FHOSS1l1dgxgjCZCpMBF54+8vGZbXwSDLskpxVfHD/CVwJC95gBwAA',
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
  
