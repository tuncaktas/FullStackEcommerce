import { doublePrecision, integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { usersTable } from "./usersSchema";
import { productsTable } from "./productSchema";
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
    id: undefined as never, 
    userId: true,
    status: true,
    createAt: true,
});

export const InsertOrderItemsSchema = createInsertSchema(orderItemsTable).omit({
    id: undefined as never, 
    orderId: true,
})

export const insertOrderWithItemsSchema = z.object({
    order: insertOrderSchema,
    items: z.array(InsertOrderItemsSchema),
});