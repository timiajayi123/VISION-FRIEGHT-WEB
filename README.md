# Vision Freight and Services Nigeria Limited

Responsive corporate website for Vision Freight and Services Nigeria Limited, built with Next.js App Router, TypeScript, Tailwind CSS and Lucide icons.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

## Company information

Update contact details, the WhatsApp number and message, email, office address, map links, website URL and services in `data/company.ts`.

The enquiry form is frontend-only in this first version. Connect the marked handler in `components/contact-form.tsx` to Resend, Formspree, Web3Forms or a custom endpoint when the preferred submission service is selected.

The project can be imported directly into Vercel as a standard Next.js application.

Primary production domain: `https://www.visionfreight.com.ng`
