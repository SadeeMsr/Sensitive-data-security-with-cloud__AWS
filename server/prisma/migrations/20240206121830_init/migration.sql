-- CreateTable
CREATE TABLE "Hospital" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hospital_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "Branch" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "hospital_id" INTEGER NOT NULL,
    "user_type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    CONSTRAINT "User_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "Hospital" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Logbook" (
    "form_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "doctor_id" INTEGER NOT NULL,
    "trainee_id" INTEGER NOT NULL,
    "patient_record_id" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "patient_name" TEXT NOT NULL,
    "diagnosis_details" TEXT NOT NULL,
    "procedures" TEXT NOT NULL,
    "follow_up" TEXT NOT NULL,
    "history" TEXT NOT NULL,
    "updates" TEXT NOT NULL,
    "personal_reflections" TEXT NOT NULL,
    "approval_status" BOOLEAN NOT NULL DEFAULT false,
    "submitted_to" INTEGER NOT NULL,
    CONSTRAINT "Logbook_trainee_id_fkey" FOREIGN KEY ("trainee_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
