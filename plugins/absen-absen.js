let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendBut(m.chat, `Β‘π½π πππ’ ππππππππππ ππ ππππ πππππ!`, wm, 'α΄α΄α΄α΄α΄’α΄Κ', `${usedPrefix}asistencia`, m)
        throw false
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw 'Β‘π΄ππππ πππππππ!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `β ${i + 1}.  @${v.split`@`[0]}`).join('\n')
    let caption = `
π΅ππππ: ${date}
${conn.absen[id][2]}
βγ π»πΈπππ° π³π΄ π°ππΈπππ΄π½π²πΈπ° γ
β Total: ${absen.length}
${list}
βββββ`.trim()
    await conn.send2But(m.chat, caption, wm, 'πΏπππππππ', `${usedPrefix}absen`, 'α΄Κα΄Η«α΄Ιͺα΄Κ', `${usedPrefix}cekabsen`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['presente']
handler.tags = ['absen']
handler.command = /^(absen|presente)$/i

module.exports = handler
