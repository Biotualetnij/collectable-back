-- CreateEnum
CREATE TYPE "EnumType" AS ENUM ('Monthly', 'Dayly', 'Weekly');

-- CreateTable
CREATE TABLE "Collectable" (
    "id" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "type" "EnumType" NOT NULL,
    "queueNumber" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "UserCallectableAction" (
    "id" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "EnumType" NOT NULL,
    "dateOfCollect" TIMESTAMP(3) NOT NULL,
    "queueNumber" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Collectable_id_key" ON "Collectable"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserCallectableAction_id_key" ON "UserCallectableAction"("id");
