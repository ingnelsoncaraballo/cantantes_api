import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const cantantesId = parseInt(req.query.id);
  // READ ONE DATA
  if (req.method === "GET") {
    const cantantes = await prisma.cantantes.findFirst({
      where: { id: cantantesId },
    });
    res.json(cantantes);
  }
  // UPDATE DATA
  else if (req.method === 'PUT') {
    const { title, description, } = req.body;

    const updatedCantantes = await prisma.cantantes.update({
      where: { id: cantantesId },
      data: {
        title,
        description,
      },
    });

    res.json(updatedCantantes);
  } 
  // DELETE DATA
  else if (req.method === 'DELETE') {
    const deletedCantantes = await prisma.cantantes.delete({
      where: { id: cantantesId },
    });

    res.json(deletedCantantes);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}