/*
  Warnings:

  - You are about to drop the column `approved_by` on the `Logbook` table. All the data in the column will be lost.
  - Added the required column `submitted_to` to the `Logbook` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Logbook" DROP COLUMN "approved_by",
ADD COLUMN     "submitted_to" INTEGER NOT NULL;
