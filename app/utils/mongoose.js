import mongoose, { connect, connection } from "mongoose";
import dns from "node:dns";



const conn = { isConnected: false };

export async function connectDB() {
  if (conn.isConnected) return;

  try {
    const db = await connect(process.env.MONGODB_URI, {
      dbName: process.env.MONGODB_DB || undefined,
    });

    conn.isConnected = db.connections[0].readyState;

    console.log("🔗 Conectado a la base de datos:", mongoose.connection.name);
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error);
    throw error;
  }
}

connection.on("connected", () => {
  console.log("✅ Conexión establecida con MongoDB");
});

connection.on("error", (err) => {
  console.error("❌ Error en la conexión a MongoDB:", err);
});