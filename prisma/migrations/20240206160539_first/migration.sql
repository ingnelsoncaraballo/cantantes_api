-- CreateTable
CREATE TABLE "Cantantes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "genero_musical" TEXT,

    CONSTRAINT "Cantantes_pkey" PRIMARY KEY ("id")
);
