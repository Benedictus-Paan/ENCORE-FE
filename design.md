# Design Rules

## Product context
The website lets visitors discover artists/events and buyers purchase tickets. Artist-side dashboards are used by staff/team members. Partnership discussions happen offline.

## Rules
- Preserve existing TailAdmin layout, navigation, typography, spacing, and component patterns.
- Reuse existing theme variables/design tokens when available.
- Brand colors: red `#c31432`, deep purple `#240b36`. Avoid scattering hard-coded colors or inventing near-duplicates.
- Use existing shadcn/ui components where installed and consistent with the current design.
- Keep layouts responsive, readable, and keyboard-accessible.
- Forms should have labels, validation feedback, loading/disabled states, and understandable errors.
- Add loading, empty, success, and error states where relevant.
- Public pages should show real API-backed artist/event/ticket information. Never present fake price, stock, payment, or purchase status as real.
- Artist-team pages should identify the artist being managed and show only permitted actions.
- Admin pages should focus on actual admin responsibilities; do not add negotiation or contract UI.
- Avoid unrelated redesigns during a focused task.

## Before editing
1. Inspect neighboring screens and current UI patterns.
2. Identify the role using the screen.
3. Confirm the data and actions actually available.
4. Make the smallest consistent change.
