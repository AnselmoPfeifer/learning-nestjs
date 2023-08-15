/*
  Warnings:

  - You are about to drop the column `desciption` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Category` DROP COLUMN `desciption`,
    ADD COLUMN `description` TEXT NULL;
