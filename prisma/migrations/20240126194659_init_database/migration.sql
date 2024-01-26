-- CreateEnum
CREATE TYPE "ProductType" AS ENUM ('SIMPLE_PRODUCT', 'CONFIGURABLE_PRODUCT', 'GROUPED_PRODUCT', 'VIRTUAL_PRODUCT', 'BUNDLE_PRODUCT', 'DOWNLOADABLE_PRODUCT', 'GIFT_CARD');

-- CreateTable
CREATE TABLE "products_images" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "products_images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "sale_price" DOUBLE PRECISION NOT NULL,
    "cost_price" DOUBLE PRECISION NOT NULL,
    "promotional_price" DOUBLE PRECISION NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "type" "ProductType" NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_simple" (
    "id" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,
    "material" TEXT NOT NULL,

    CONSTRAINT "products_simple_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products_virtual" (
    "id" TEXT NOT NULL,
    "download_link" TEXT NOT NULL,

    CONSTRAINT "products_virtual_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "products_images" ADD CONSTRAINT "products_images_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_simple" ADD CONSTRAINT "products_simple_id_fkey" FOREIGN KEY ("id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products_virtual" ADD CONSTRAINT "products_virtual_id_fkey" FOREIGN KEY ("id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
