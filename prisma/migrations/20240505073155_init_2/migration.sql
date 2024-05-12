-- DropIndex
DROP INDEX "Collectable_id_key";

-- DropIndex
DROP INDEX "UserCallectableAction_id_key";

-- AlterTable
CREATE SEQUENCE collectable_id_seq;
ALTER TABLE "Collectable" ALTER COLUMN "id" SET DEFAULT nextval('collectable_id_seq'),
ADD CONSTRAINT "Collectable_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE collectable_id_seq OWNED BY "Collectable"."id";

-- AlterTable
CREATE SEQUENCE usercallectableaction_id_seq;
ALTER TABLE "UserCallectableAction" ALTER COLUMN "id" SET DEFAULT nextval('usercallectableaction_id_seq'),
ADD CONSTRAINT "UserCallectableAction_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE usercallectableaction_id_seq OWNED BY "UserCallectableAction"."id";
