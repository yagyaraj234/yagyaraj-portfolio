import {
  pgTable,
  serial,
  integer,
  text,
  boolean,
  timestamp,
  unique,
} from "drizzle-orm/pg-core";

/*
|--------------------------------------------------------------------------
| USERS TABLE (OAuth users)
|--------------------------------------------------------------------------
*/

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: text("name").notNull(),

  email: text("email").notNull().unique(),

  image: text("image"),

  provider: text("provider").notNull(), // google | github

  providerUserId: text("provider_user_id").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/*
|--------------------------------------------------------------------------
| BLOG TABLE
|--------------------------------------------------------------------------
*/

export const blog = pgTable("blog", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),

  slug: text("slug").notNull().unique(),

  title: text("title").notNull(),

  content: text("content").notNull(),

  published: boolean("published").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/*
|--------------------------------------------------------------------------
| BLOG COMMENTS TABLE
| supports:
| - logged-in users
| - anonymous users
|--------------------------------------------------------------------------
*/

export const blogComments = pgTable("blog_comments", {
  id: serial("id").primaryKey(),

  blogId: integer("blog_id")
    .notNull()
    .references(() => blog.id, { onDelete: "cascade" }),

  // nullable → allows anonymous comments
  userId: integer("user_id").references(() => users.id, {
    onDelete: "cascade",
  }),

  // anonymous fallback
  guestName: text("guest_name"),

  guestEmail: text("guest_email"),

  text: text("text").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
});

/*
|--------------------------------------------------------------------------
| BLOG LIKES TABLE
| tracks which user liked which blog
|--------------------------------------------------------------------------
*/

export const blogLikes = pgTable(
  "blog_likes",
  {
    id: serial("id").primaryKey(),

    blogId: integer("blog_id")
      .notNull()
      .references(() => blog.id, { onDelete: "cascade" }),

    userId: integer("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),

    // max 25 claps per user per blog
    clapCount: integer("like_count").default(1).notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),

    updatedAt: timestamp("updated_at").defaultNow().notNull(),
  },
  (table) => ({
    uniqueUserBlog: unique().on(table.blogId, table.userId),
  }),
);
