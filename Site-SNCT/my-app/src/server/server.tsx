// server.tsx
import express from 'express';
import path from 'path';
import apiRoutes from '@/Api/API';

const app = express();

app.use(express.json());

// Roteamento da API
app.use('/api', apiRoutes);

// Configuração de rota para o aplicativo React (assumindo que seu aplicativo React está na pasta 'client/build')
app.use(express.static('client/build'));

// Rota de fallback para o React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
