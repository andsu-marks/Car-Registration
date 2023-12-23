/*
  Warnings:

  - The primary key for the `brand` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `brand` table. All the data in the column will be lost.
  - The primary key for the `model` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `version` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "model" DROP CONSTRAINT "model_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "version" DROP CONSTRAINT "version_model_id_fkey";

-- AlterTable
ALTER TABLE "brand" DROP CONSTRAINT "brand_pkey",
DROP COLUMN "name",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "brand_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "brand_id_seq";

-- AlterTable
ALTER TABLE "model" DROP CONSTRAINT "model_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "brand_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "model_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "model_id_seq";

-- AlterTable
ALTER TABLE "version" DROP CONSTRAINT "version_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "model_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "version_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "version_id_seq";

-- AddForeignKey
ALTER TABLE "model" ADD CONSTRAINT "model_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "version" ADD CONSTRAINT "version_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
