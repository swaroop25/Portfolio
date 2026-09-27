# Sai Swaroop Portfolio

A responsive Next.js App Router portfolio using React, TypeScript, Tailwind CSS v4, Framer Motion and Lucide. Original portrait preserved in `public/profile.png`.

## Development

`npm install` then `npm run dev`. Build a static export with `npm run build`; output is in `out/`. Run `npm run typecheck` for TypeScript validation.

## Editing

- Experience: `lib/experience.ts`; projects: `lib/content.ts`.
- Sections: individual files in `components/`.
- Design tokens and responsive styling: `app/globals.css`.
- Contact details: `components/ContactDetails.tsx` and `components/Contact.tsx`; project inquiry email in `components/Projects.tsx`.
- Resume: `public/Sai-Swaroop-Resume.pdf` is the supplied original PDF, linked from Hero and Contact.
- GitHub is omitted because the supplied PDF contains a placeholder username.
- Project artwork is conceptual, not a representation of confidential production dashboards or actual metrics.

The supplied headshot is unmodified. Reduced motion preferences are respected. Experience impact lists expand using native keyboard-accessible disclosure controls.
