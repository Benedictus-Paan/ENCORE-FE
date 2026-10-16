# Agent Workflow & Boundaries

## Product context
This repository is the frontend for a ticket-selling agency that works with artists and their teams. Visitors browse artists/events and buyers can purchase tickets.

There are three roles:
- **Admin (our organization):** adds/manages artist entries and provides an artist-side account to a designated representative.
- **Artist account / artist team:** the “Artist” role is operated by the artist's staff/team, not necessarily the performer. The designated representative manages staff and permitted artist-side information.
- **Buyer:** browses public pages and purchases tickets through implemented flows.

The real-world partnership and negotiation process happens offline. Do not invent negotiation, contracts, partnership requests, or partnership-approval flows.

## Required workflow
1. Understand the task and identify the relevant page/component.
2. Inspect existing routes, code, data flow, package scripts, dependencies, and conventions before editing.
3. Make the smallest change that solves the task. Preserve existing working behavior.
4. Reuse existing TailAdmin patterns and installed shadcn/ui components.
5. Check loading, empty, error, validation, responsive, and accessibility states where relevant.
6. Run only checks actually configured in the repository.
7. For changes to code, config, dependencies, tests, or documentation, create a new report using `audit/TEMPLATE.md` and follow `audit/README.md`. Never overwrite an older report.
8. Respond in Indonesian with a clear summary, reasons, beginner-friendly code explanation, checks actually run, risks, and audit path.

## Boundaries
- Do not add offline partnership workflows to the website.
- Do not assume Admin manages artist staff unless the requirements or existing code say so.
- Do not assume the Artist account belongs to the performer personally.
- Do not invent payment providers, refunds, commissions, QR check-in, event approval, or financial reports.
- Do not bypass authentication, authorization, server validation, or API checks.
- Hiding a button in the frontend is not authorization; the backend must enforce protected actions.
- Never expose secrets, credentials, privileged tokens, or private buyer data.
- Do not silently change API contracts, database schemas, roles, routes, or dependencies.
- Do not replace TailAdmin or add a competing design system.
- Never claim a test/build passed unless it was actually run and succeeded.

## Technical context
The discussed stack is Next.js, React, TypeScript, Tailwind CSS, TailAdmin, and existing shadcn/ui components for the frontend; Go/Fiber for the API; PostgreSQL/Supabase for data/auth; and Cloudinary for images. Treat the repository as the source of truth and verify what is actually installed or implemented.

Brand colors: red `#c31432`, deep purple `#240b36`. Prefer existing theme tokens where available.

## Final response
Use clear, casual Indonesian and include:
- Yang berubah
- Kenapa
- Penjelasan kode untuk pemula
- Pengecekan yang benar-benar dijalankan
- Risiko / pekerjaan tersisa
- Laporan audit: `audit/<file>.md`
