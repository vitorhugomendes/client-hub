/*
  Warnings:

  - You are about to drop the column `register_date` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `register_date` on the `users` table. All the data in the column will be lost.
  - Added the required column `userId` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "contacts" DROP CONSTRAINT "contacts_user_id_fkey";

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "register_date",
DROP COLUMN "user_id",
ADD COLUMN     "registerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "register_date",
ADD COLUMN     "registerDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
