let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) conn.sendBut(m.chat, `_*ยก๐ฝ๐ ๐๐๐ข ๐๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐ ๐๐๐๐๐!*_\n\n*${usedPrefix}asistencia* - ๐๐๐๐๐ฃ๐๐ ๐๐๐๐๐๐๐๐๐๐`, wm, 'แดแดแดแดแดขแดส', '.asistencia', m)
    delete conn.absen[id]
    m.reply(`๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐ ๐๐๐๐๐!`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
module.exports = handler
