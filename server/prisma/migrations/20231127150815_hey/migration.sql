-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "user_type" TEXT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "TraineeApplication" (
    "application_id" SERIAL NOT NULL,
    "trainee_id" INTEGER NOT NULL,
    "application_status" TEXT NOT NULL,

    CONSTRAINT "TraineeApplication_pkey" PRIMARY KEY ("application_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "TraineeApplication" ADD CONSTRAINT "TraineeApplication_trainee_id_fkey" FOREIGN KEY ("trainee_id") REFERENCES "User"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
