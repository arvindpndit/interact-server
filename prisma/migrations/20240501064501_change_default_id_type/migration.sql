/*
  Warnings:

  - The primary key for the `Interaction` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Interaction` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Interaction" DROP CONSTRAINT "Interaction_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Interaction_pkey" PRIMARY KEY ("id");
