-- CreateTable
CREATE TABLE "FollwerFollowee" (
    "id" SERIAL NOT NULL,
    "followerId" TEXT NOT NULL,
    "followeeId" TEXT NOT NULL,

    CONSTRAINT "FollwerFollowee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FollwerFollowee" ADD CONSTRAINT "FollwerFollowee_followeeId_fkey" FOREIGN KEY ("followeeId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FollwerFollowee" ADD CONSTRAINT "FollwerFollowee_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "User"("clerkId") ON DELETE RESTRICT ON UPDATE CASCADE;
