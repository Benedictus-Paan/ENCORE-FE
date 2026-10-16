# Testing & Verification

## Workflow
1. Inspect `package.json`, lockfile, and test configuration.
2. Run only scripts and tools that actually exist.
3. Choose checks relevant to the change: lint, type-check, tests, build, or focused manual verification.
4. For role-based changes, verify intended UI behavior and backend authorization when possible.
5. For purchase flows, a frontend success screen is not proof that payment works; verify the real API/payment flow as far as available.
6. Report exact commands and distinguish Passed, Failed, Not run, and Blocked.
7. Never invent test results or claim full coverage without evidence.

## Possible checks (only if configured)
- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run build`

These are examples, not assumptions. Inspect `package.json` first.

## Manual checklist
When relevant:
- Page renders without runtime errors.
- Loading, empty, error, and success states work.
- Forms validate input and show understandable feedback.
- Admin, artist-team, and buyer roles see only intended actions.
- Backend/API authorization is enforced independently of UI visibility.
- Layout works on desktop and mobile.
- Shared component changes do not break other pages.
