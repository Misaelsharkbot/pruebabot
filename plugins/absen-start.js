let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*π°ππ πππ’ πππππππππ ππ ππππ ππππ!*_\n\n*${usedPrefix}hapusabsen* - πΏπππ ππππππ πππ πππππππππ `
    }
    conn.absen[id] = [
        conn.sendBut(m.chat, `πΈπππππ πππ ππ‘πππ\n\n*${usedPrefix}presente* - π΄ππππ πΏπππππππ\n*${usedPrefix}cekabsen* - πΏπππ πππππππππ ππ ππππππππππ\n*${usedPrefix}hapusabsen* - πΏπππ ππππππ πππ πππππ ππ ππππππππππ`, wm, 'πΏπππππππ', '.presente', m),
        [],
        text
    ]
}
handler.help = ['asistencia [teks]']
handler.tags = ['absen']
handler.command = /^(start|asis)tencia$/i
handler.group = true
handler.admin = true
module.exports = handler
