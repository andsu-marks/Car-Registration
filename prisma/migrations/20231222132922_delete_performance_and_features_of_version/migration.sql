/*
  Warnings:

  - You are about to drop the column `features` on the `version` table. All the data in the column will be lost.
  - You are about to drop the column `performance` on the `version` table. All the data in the column will be lost.
  - Changed the type of `year` on the `brand` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `year` on the `model` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "brand" DROP COLUMN "year",
ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "model" DROP COLUMN "year",
ADD COLUMN     "year" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "version" DROP COLUMN "features",
DROP COLUMN "performance";
