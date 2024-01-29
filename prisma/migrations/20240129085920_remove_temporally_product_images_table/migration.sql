/*
  Warnings:

  - You are about to drop the `products_images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products_images" DROP CONSTRAINT "products_images_product_id_fkey";

-- DropTable
DROP TABLE "products_images";
