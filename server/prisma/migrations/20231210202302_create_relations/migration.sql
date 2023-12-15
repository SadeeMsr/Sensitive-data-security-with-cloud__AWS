/*
  Warnings:

  - The primary key for the `Hospital` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `hospital_id` on the `Hospital` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Hospital` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Submission_Approval` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `doctor_id` to the `Logbook` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hospital_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Hospital" DROP CONSTRAINT "Hospital_pkey",
DROP COLUMN "hospital_id",
DROP COLUMN "user_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Hospital_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Logbook" ADD COLUMN     "approval_status" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "approved_by" INTEGER,
ADD COLUMN     "doctor_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "user_id",
ADD COLUMN     "hospital_id" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Submission_Approval";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "Hospital"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Logbook" ADD CONSTRAINT "Logbook_trainee_id_fkey" FOREIGN KEY ("trainee_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
