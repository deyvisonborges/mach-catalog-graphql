/*
  Warnings:

  - You are about to drop the column `productId` on the `products_images` table. All the data in the column will be lost.
  - Added the required column `product_id` to the `products_images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `products_simple` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `products_virtual` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "products_images" DROP CONSTRAINT "products_images_productId_fkey";

-- DropForeignKey
ALTER TABLE "products_simple" DROP CONSTRAINT "products_simple_id_fkey";

-- DropForeignKey
ALTER TABLE "products_virtual" DROP CONSTRAINT "products_virtual_id_fkey";

-- AlterTable
ALTER TABLE "products_images" DROP COLUMN "productId",
ADD COLUMN     "product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products_simple" ADD COLUMN     "product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "products_virtual" ADD COLUMN     "product_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "products_simple" ADD CONSTRAINT "products_simple_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_virtual" ADD CONSTRAINT "products_virtual_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
