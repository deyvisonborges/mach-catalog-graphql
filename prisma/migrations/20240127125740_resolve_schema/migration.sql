/*
  Warnings:

  - Added the required column `product_type_id` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ProductTypeEnum" AS ENUM ('SIMPLE_PRODUCT', 'VIRTUAL_PRODUCT');

-- AlterTable
ALTER TABLE "products" ADD COLUMN     "product_type_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ProductType" (
    "id" TEXT NOT NULL,
    "name" "ProductTypeEnum" NOT NULL,

    CONSTRAINT "ProductType_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products_images" ADD CONSTRAINT "products_images_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_product_type_id_fkey" FOREIGN KEY ("product_type_id") REFERENCES "ProductType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
