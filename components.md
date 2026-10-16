# Component Reuse Rules

- Inspect existing components before creating new ones.
- Prefer existing TailAdmin patterns for layout, navigation, cards, tables, forms, and dashboards.
- Reuse shadcn/ui primitives already installed, such as buttons, inputs, dialogs, dropdowns, selects, and alerts.
- Follow actual import aliases, file locations, and naming conventions; do not assume paths.
- Create shared abstractions only when multiple real use cases benefit. Avoid hypothetical abstractions.
- Keep Admin, artist-team, and buyer permissions clear; do not merge role-specific behavior into a confusing generic component.
- Hiding UI is not security. Protected actions must be authorized by the backend/API.
- Do not add a package for functionality already available in the project.
- When changing a shared component, inspect its usages for side effects.
- Do not replace the existing design system or rewrite unrelated components.
