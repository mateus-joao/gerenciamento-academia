// server.js
import app from './src/app.js';
import env from './src/config/env.js';
import { connectDatabase } from './src/config/database.js';

const startServer = async () => {
  // 1. Conecta ao MongoDB Atlas
  await connectDatabase();

  // 2. Inicia o servidor HTTP
  app.listen(env.port, () => {
    console.log(`Servidor rodando na porta ${env.port}`);
  });
};

startServer();