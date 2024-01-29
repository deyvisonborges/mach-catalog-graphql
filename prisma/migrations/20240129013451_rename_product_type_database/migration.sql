/*
  Warnings:

  - You are about to drop the `ProductType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "products" DROP CONSTRAINT "products_product_type_id_fkey";

-- DropTable
DROP TABLE "ProductType";

-- CreateTable
CREATE TABLE "products_types" (
    "id" TEXT NOT NULL,
    "name" "ProductTypeEnum" NOT NULL,

    CONSTRAINT "products_types_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_product_type_id_fkey" FOREIGN KEY ("product_type_id") REFERENCES "products_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
