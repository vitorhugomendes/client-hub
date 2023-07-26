/*
  Warnings:

  - The `register_date` column on the `contacts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `register_date` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "register_date",
ADD COLUMN     "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "register_date",
ADD COLUMN     "register_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
