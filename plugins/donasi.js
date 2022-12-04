let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Telkomsel [081225179060]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/fahrigz
│ • Gopay [081225179060]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
