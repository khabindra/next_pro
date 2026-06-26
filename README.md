# Restaurant Website - Next.js

A modern restaurant website built with Next.js, React, and Tailwind CSS.

## Features

- **Home Page** - Hero section, features, popular dishes, and call-to-action
- **About Page** - Restaurant story, values, chef profiles, and statistics
- **Menu Page** - Filterable menu with categories (appetizers, main course, desserts, beverages)
- **Gallery Page** - Photo gallery with category filtering and lightbox modal
- **Reservation Page** - Complete reservation form with date/time selection
- **Contact Page** - Contact form, business information, hours, and social media links
- **Privacy Policy Page** - Comprehensive privacy policy content
- **404 Page** - Custom error page for not found routes

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: React Server & Client Components

## Project Structure

```
/workspace
├── app/
│   ├── layout.tsx          # Root layout with Navbar and Footer
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── menu/
│   │   └── page.tsx        # Menu page
│   ├── gallery/
│   │   └── page.tsx        # Gallery page
│   ├── reservation/
│   │   └── page.tsx        # Reservation page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   └── privacy/
│       └── page.tsx        # Privacy policy page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   └── Footer.tsx          # Footer component
├── public/
│   └── images/             # Image assets
├── globals.css             # Global styles
├── layout.tsx              # Root HTML layout
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd /workspace
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Pages Overview

### Home (`/`)
- Hero section with call-to-action buttons
- Features section highlighting restaurant strengths
- Popular dishes showcase
- Reservation CTA

### About (`/about`)
- Restaurant story and history
- Core values
- Chef team profiles
- Statistics counter

### Menu (`/menu`)
- Category filter (All, Appetizers, Main Course, Desserts, Beverages)
- Menu items with descriptions and prices
- Dietary information notice

### Gallery (`/gallery`)
- Photo grid with category filtering
- Lightbox modal for image viewing
- Categories: Interior, Food, Events, Chefs

### Reservation (`/reservation`)
- Complete booking form
- Date and time selection
- Guest count selector
- Special occasion and requests fields
- Form validation
- Success confirmation

### Contact (`/contact`)
- Contact form with subject selection
- Business address, phone, email
- Opening hours
- Social media links
- Map placeholder

### Privacy Policy (`/privacy`)
- Comprehensive privacy policy
- Information collection details
- User rights information
- Contact information

### 404 (`not-found.tsx`)
- Custom error page
- Navigation back home or to contact

## Customization

### Branding
Update the restaurant name in:
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `app/page.tsx`

### Colors
The primary color is orange (`text-orange-500`, `bg-orange-500`). Modify in Tailwind config or use custom colors.

### Images
Add your images to `/public/images/` folders:
- `/chefs/` - Chef photos
- `/gallery/` - Gallery images
- `/hero/` - Hero section backgrounds
- `/menu/` - Menu item photos
- `/icons/` - Icon assets

### Content
Edit page content directly in each page component file under `/app/`.

## Additional Features to Implement

1. **Backend Integration**: Connect forms to a backend API for:
   - Reservation submissions
   - Contact form handling
   - Newsletter subscriptions

2. **Admin Panel**: Create an admin dashboard for:
   - Managing reservations
   - Viewing contact messages
   - Updating menu items
   - Managing gallery images

3. **Authentication**: Add user authentication for:
   - Admin access
   - Customer accounts
   - Loyalty programs

4. **Database**: Integrate with a database (PostgreSQL, MongoDB) for:
   - Storing reservations
   - Managing menu items
   - Saving contact messages

5. **Email Notifications**: Set up email service for:
   - Reservation confirmations
   - Contact form notifications
   - Marketing emails

## License

This project is open source and available for personal and commercial use.
