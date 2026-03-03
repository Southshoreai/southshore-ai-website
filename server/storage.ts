import { eq, desc } from "drizzle-orm";
import { db } from "./db";
import {
  users,
  blogPosts,
  contactSubmissions,
  type User,
  type InsertUser,
  type BlogPost,
  type InsertBlogPost,
  type ContactSubmission,
  type InsertContactSubmission,
} from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getFeaturedBlogPost(): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;

  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return db.select().from(blogPosts).where(eq(blogPosts.published, true)).orderBy(desc(blogPosts.publishedAt));
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return post;
  }

  async getFeaturedBlogPost(): Promise<BlogPost | undefined> {
    const [post] = await db
      .select()
      .from(blogPosts)
      .where(eq(blogPosts.featured, true))
      .orderBy(desc(blogPosts.publishedAt))
      .limit(1);
    return post;
  }

  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [created] = await db.insert(blogPosts).values(post).returning();
    return created;
  }

  async updateBlogPost(id: number, post: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [updated] = await db.update(blogPosts).set(post).where(eq(blogPosts.id, id)).returning();
    return updated;
  }

  async deleteBlogPost(id: number): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id)).returning();
    return result.length > 0;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [created] = await db.insert(contactSubmissions).values(submission).returning();
    return created;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.submittedAt));
  }
}

export const storage = new DatabaseStorage();
