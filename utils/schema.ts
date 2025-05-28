import { pgTable, serial, varchar, text, boolean } from "drizzle-orm/pg-core";

export const AIOutput = pgTable('aiOutput', {
  id: serial('id').primaryKey(),
  formData: varchar('formData', { length: 1000 }).notNull(),
  aiResponse: text('aiResponse'),
  templateSlug: varchar('templateSlug', { length: 255 }).notNull(),
  createdBy: varchar('createdBy', { length: 255 }).notNull(),
  createdAt: varchar('createdAt', { length: 255 })
});


export const UserSubscription = pgTable('userSubscription', {
  id:serial('id').primaryKey(),
  email:varchar('email'),
  userName:varchar('userName'),
  active:boolean('active'),
  paymentId:varchar('paytmentId'),
  joinDate:varchar('joinDate')
});