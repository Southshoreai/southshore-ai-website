# South Shore AI - Business Website

## Overview
Marketing and lead-generation website for South Shore AI, an AI strategy and digital transformation consultancy. Full-stack application with Express backend and React frontend.

## Architecture
- **Frontend**: React + Vite + TailwindCSS + Framer Motion
- **Backend**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Routing**: wouter (client-side)

## Pages
- `/` - Home (company overview, services, testimonials)
- `/services` - Growth Engine service details
- `/packages` - Three service tiers
- `/about` - Team and company background
- `/blog` - Blog articles (fetched from database)
- `/contact` - Lead capture / booking page

## API Endpoints
- `GET /api/blog-posts` - List published blog posts
- `GET /api/blog-posts/featured` - Get featured blog post
- `GET /api/blog-posts/:id` - Get single blog post
- `POST /api/blog-posts` - Create blog post
- `PATCH /api/blog-posts/:id` - Update blog post
- `DELETE /api/blog-posts/:id` - Delete blog post
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - List contact submissions

## Database Tables
- `users` - Authentication (varchar UUID primary key)
- `blog_posts` - Blog articles (integer serial primary key)
- `contact_submissions` - Lead capture (integer serial primary key)

## External Integrations
- GoHighLevel/LeadConnector: Newsletter popup form (iframe embed)
- GoHighLevel Chat Widget: AI assistant chatbot
- Calendly: Meeting scheduling links

## Key Files
- `shared/schema.ts` - Drizzle schema definitions
- `server/routes.ts` - API route handlers
- `server/storage.ts` - Database storage interface
- `server/db.ts` - Database connection
- `client/src/App.tsx` - Frontend routing
- `client/src/pages/` - Page components
