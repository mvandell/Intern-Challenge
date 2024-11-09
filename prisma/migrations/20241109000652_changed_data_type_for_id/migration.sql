/*
  Warnings:

  - The primary key for the `Drone` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Drone" DROP CONSTRAINT "Drone_pkey",
ALTER COLUMN "image_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Drone_pkey" PRIMARY KEY ("image_id");
