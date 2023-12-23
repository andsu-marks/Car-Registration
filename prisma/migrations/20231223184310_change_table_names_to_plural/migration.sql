/*
  Warnings:

  - You are about to drop the `brand` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `model` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `version` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "model" DROP CONSTRAINT "model_brand_id_fkey";

-- DropForeignKey
ALTER TABLE "version" DROP CONSTRAINT "version_model_id_fkey";

-- DropTable
DROP TABLE "brand";

-- DropTable
DROP TABLE "model";

-- DropTable
DROP TABLE "version";

-- CreateTable
CREATE TABLE "brands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "headquarter" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "models" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "base_price" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "engine" TEXT NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "brand_id" TEXT NOT NULL,

    CONSTRAINT "models_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "versions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "model_id" TEXT NOT NULL,

    CONSTRAINT "versions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "models" ADD CONSTRAINT "models_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "versions" ADD CONSTRAINT "versions_model_id_fkey" FOREIGN KEY ("model_id") REFERENCES "models"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
