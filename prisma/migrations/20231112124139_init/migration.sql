-- CreateTable
CREATE TABLE "Email" (
    "id" TEXT NOT NULL,
    "companyUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "customField" TEXT,
    "email" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "phone" TEXT,
    "imageId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);
