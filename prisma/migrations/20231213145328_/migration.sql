/*
  Warnings:

  - You are about to drop the column `founded_in` on the `brand` table. All the data in the column will be lost.
  - You are about to drop the column `performance` on the `model` table. All the data in the column will be lost.
  - Added the required column `year` to the `brand` table without a default value. This is not possible if the table is not empty.
  - Added the required column `performance` to the `version` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "brand" DROP COLUMN "founded_in",
ADD COLUMN "year" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "model" DROP COLUMN "performance";

-- AlterTable
ALTER TABLE "version" ADD COLUMN "performance" TEXT NOT NULL;
