-- AlterTable
ALTER TABLE "products_types" ADD COLUMN     "active" BOOLEAN DEFAULT false,
ADD COLUMN     "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3);
