let handler = async (m, { conn, text }) => {
  try {
    if (!text) {
      console.error("Texto no proporcionado");
      return await conn.reply(
        m.chat,
        '*_Debes proporcionar un texto después de ".siono._*"\n*Ejemplo: .siono ¿Hoy es Lunes?*',
        null,
        m
      );
    }

    const opciones = ["Sí. ✅", "No. ❌"];
    const respuesta = opciones[Math.floor(Math.random() * opciones.length)];

    const pregunta = text.trim(); // Eliminar espacios en blanco adicionales
    const mensajeRespuesta = `${respuesta}`;

    console.log("Mensaje:", mensajeRespuesta); // Agregado para verificar el contenido de mensajeRespuesta

    await conn.reply(m.chat, mensajeRespuesta, "markdown", { quoted: m });
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    throw error;
  }
};

handler.help = ["siono"];
handler.tags = ["games"];
handler.command = /^(siono)$/i;

export default handler;
