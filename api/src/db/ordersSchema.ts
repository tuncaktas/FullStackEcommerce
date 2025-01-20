import { doublePrecision, integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "./usersSchema.js";
import { productsTable } from "./productSchema.js";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";


export const ordersTable = pgTable('orders', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    createAt: timestamp().notNull().defaultNow(),
    status: varchar({ length: 50 }).notNull().default('New'),

    userId: integer().references(() => usersTable.id).notNull(),

});

export const orderItemsTable = pgTable('order_items', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    orderId: integer().references(() => ordersTable.id).notNull(),
    productId: integer().references(() => productsTable.id).notNull(),
    quantity: integer().notNull(),
    price: doublePrecision().notNull(),
});

export const insertOrderSchema = createInsertSchema(ordersTable).omit({
     /* @ts-ignore */
    id: true,
    userId: true,
    status: true,
    createAt: true,
});

export const InsertOrderItemsSchema = createInsertSchema(orderItemsTable).omit({
     /* @ts-ignore */
    id: true,
    orderId: true,
})

export const insertOrderWithItemsSchema = z.object({
    order: insertOrderSchema,
    items: z.array(InsertOrderItemsSchema),
});

export const updateOrderSchema = createInsertSchema(ordersTable).pick({
    status: true,
  });