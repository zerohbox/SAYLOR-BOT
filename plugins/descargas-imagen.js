import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB['smsAvisoMG']()}𝙐𝙎𝙀 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙈𝘼𝙉𝙀𝙍𝘼\n*${usedPrefix + command} Gata*\n\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙆𝙀 𝙏𝙃𝙄𝙎\n*${usedPrefix + command} Cat*`
const prohibited = ['hnfxsgppy']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('⚠️😾')      
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendFile(m.chat, link, 'error.jpg', `𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 *de*: ${text}`, m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 1
handler.money = 0
export default handler
