CREATE TYPE "products_status" AS ENUM (
  'out_of_stock',
  'in_stock',
  'running_low'
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "created_at" timestamp,
  "full_name" varchar,
  "email" email,
  "phone" phone,
  "location" varchar,
  "profile_url" varchar
);

CREATE TABLE "meeting_schedule" (
  "id" int PRIMARY KEY,
  "id_exhibitor" int,
  "id_user" int,
  "meeting_url" varchar,
  "start_datetime" datetime,
  "end_datetime" datetime,
  "is_happened" boolean
);

CREATE TABLE "publication" (
  "id" int,
  "product_id" int,
  "quantity" int DEFAULT 1
);

CREATE TABLE "orders" (
  "id" int PRIMARY KEY,
  "user_id" int UNIQUE NOT NULL,
  "product_id" int,
  "merchant_id" int,
  "quantity" int DEFAULT 1,
  "status" varchar,
  "created_at" varchar
);

CREATE TABLE "products" (
  "id" int PRIMARY KEY,
  "merchant_id" int NOT NULL,
  "name" varchar,
  "description" varchar,
  "price" int,
  "status" products_status,
  "created_at" datetime DEFAULT (now())
);

CREATE TABLE "exhibitor" (
  "id" int,
  "name" varchar,
  "email" varchar,
  "category" varchar,
  "location" varchar,
  "website" varchar,
  "profile_url" varchar,
  "phone" phone,
  "about" varchar
);

CREATE TABLE "gallery" (
  "id" int PRIMARY KEY,
  "exhibitor_id" int,
  "url" varchar,
  "mimetype" varchar
);

CREATE TABLE "analytics" (
  "id" int PRIMARY KEY,
  "id_exhibitor" int,
  "visits" int
);

CREATE TABLE "webinars" (
  "id" int PRIMARY KEY,
  "title" varchar,
  "category" varchar,
  "video_url" varchar,
  "is_live" boolean,
  "thumbnail" varchar
);

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "meeting_schedule" ("id_user");

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "orders" ("user_id");

ALTER TABLE "publication" ADD FOREIGN KEY ("id") REFERENCES "exhibitor" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("id") REFERENCES "orders" ("product_id");

ALTER TABLE "exhibitor" ADD FOREIGN KEY ("id") REFERENCES "analytics" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("merchant_id") REFERENCES "exhibitor" ("id");

ALTER TABLE "exhibitor" ADD FOREIGN KEY ("id") REFERENCES "meeting_schedule" ("id_exhibitor");

ALTER TABLE "exhibitor" ADD FOREIGN KEY ("id") REFERENCES "orders" ("merchant_id");

ALTER TABLE "exhibitor" ADD FOREIGN KEY ("id") REFERENCES "gallery" ("id");

CREATE INDEX "product_status" ON "products" ("merchant_id", "status");

CREATE UNIQUE INDEX ON "products" ("id");

COMMENT ON COLUMN "orders"."created_at" IS 'When order created';
