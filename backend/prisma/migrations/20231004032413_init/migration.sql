-- CreateTable
CREATE TABLE "following" (
    "id" SERIAL NOT NULL,
    "users" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "following_pkey" PRIMARY KEY ("id")
);
