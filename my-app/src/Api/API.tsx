// Importe o express para criar a sua API
import express, { Request, Response } from 'express';
const router = express.Router();

// Rota para a página Estufa
router.get('/estufa', (req: Request, res: Response) => {
  // Lógica para obter dados da Estufa
  const data = { /* seus dados aqui */ };
  res.json(data);
});

// Rota para a página Robô
router.get('/robo', (req: Request, res: Response) => {
  // Lógica para obter dados do Robô
  const data = { /* seus dados aqui */ };
  res.json(data);
});

// Rota para a página IDES
router.get('/turma/ides', (req: Request, res: Response) => {
  // Lógica para obter dados da IDES
  const data = { /* seus dados aqui */ };
  res.json(data);
});

export default router;
