ALTER TABLE "orders" ADD COLUMN "createAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN "createdAt";--> statement-breakpoint
ALTER TABLE "orders" DROP COLUMN "stripePaymentIntentId";