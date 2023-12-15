-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "user_type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Hospital" (
    "hospital_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "hospital_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "Branch" TEXT NOT NULL,

    CONSTRAINT "Hospital_pkey" PRIMARY KEY ("hospital_id")
);

-- CreateTable
CREATE TABLE "Submission_Approval" (
    "approval_id" SERIAL NOT NULL,
    "form_id" INTEGER NOT NULL,
    "Supervisor_id" INTEGER NOT NULL,
    "approval_status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Submission_Approval_pkey" PRIMARY KEY ("approval_id")
);

-- CreateTable
CREATE TABLE "Logbook" (
    "form_id" SERIAL NOT NULL,
    "trainee_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "patient_name" TEXT NOT NULL,
    "patient_record_id" INTEGER NOT NULL,
    "diagnosis_details" TEXT NOT NULL,
    "procedures" TEXT NOT NULL,
    "follow_up" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "updates" TEXT NOT NULL,
    "personal_reflections" TEXT NOT NULL,

    CONSTRAINT "Logbook_pkey" PRIMARY KEY ("form_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
