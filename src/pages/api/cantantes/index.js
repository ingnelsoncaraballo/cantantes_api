import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  // READ ALL DATA
  if (req.method === 'GET') {
    const cantantes = await prisma.cantantes.findMany();
    res.json(cantantes);
  } 
  // CREATE DATA
  else if (req.method === 'POST') {
    const { nombre, edad, genero_musical } = req.body;
    
    const cantante = await prisma.cantantes.create({
      data: {
        nombre,
        edad,
        genero_musical
      },
    });

    res.json(cantante);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}