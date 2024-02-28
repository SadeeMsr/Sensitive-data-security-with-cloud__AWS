-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "user_type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "EncryptedSymmetricKey" TEXT
);

-- CreateTable
CREATE TABLE "Logbook" (
    "form_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "employeeId" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "patient_name" TEXT NOT NULL,
    "diagnosis_details" TEXT,
    "procedures" TEXT,
    "follow_up" TEXT,
    "history" TEXT,
    "updates" TEXT,
    "personal_reflections" TEXT,
    CONSTRAINT "Logbook_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_EncryptedSymmetricKey_key" ON "User"("EncryptedSymmetricKey");
