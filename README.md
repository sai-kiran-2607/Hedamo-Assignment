# Hedamo - Disclosure Registry Frontend

This repository contains the frontend implementation for **Hedamo**, a production-quality product listing interface designed for a disclosure-based platform.

## Design Philosophy

Hedamo operates on a **"Declared by Producer"** model. The UI is strictly designed to avoid any implication of verification, certification, or endorsement.

-   **Institutional Aesthetics**: Calm, neutral colors (grays/off-whites) with a subtle teal accent to convey professionalism without "selling".
-   **Transparency First**: Prominent disclaimers and clear "Declared by" labelling.
-   **No Verification Claims**: Words like "verified", "certified", and "approved" are strictly forbidden.

## Tech Stack

-   **Framework**: [React](https://react.dev/) (v19)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: Vanilla CSS with CSS Variables (No external UI libraries like Tailwind or Bootstrap).
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Utilities**: `clsx` for conditional class joining.

## Project Structure

```
src/
├── components/      # Reusable UI primitives (Badge, Button, Card, Input)
├── data/            # Mock data and accessors
├── features/        # Feature-specific views (ProductList, ProductDetail)
├── styles/          # Design system implementation
│   ├── variables.css  # Global tokens (colors, spacing, typography)
│   ├── components.css # Component-specific styles
│   └── utilities.css  # Utility classes (layout, spacing)
├── App.jsx          # Main application layout and routing logic
└── main.jsx         # Entry point
```

## Setup & Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
1.  Clone the repository (if applicable) or navigate to the project folder.
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally
To start the development server:
```bash
npm run dev
```
Open your browser to `http://localhost:5173` (or the URL shown in the terminal).

### building for Production
To create a production-ready build:
```bash
npm run build
```
This generates static files in the `dist/` directory.

## Implementation Notes

### CSS Architecture
Instead of using a heavy CSS-in-JS library or utility framework, I utilized **CSS Variables** for theming. This ensures:
-   **Consistency**: Colors and spacing are defined once in `variables.css`.
-   **Maintainability**: Easy to update the "Institutional" theme globally.
-   **Performance**: Zero runtime overhead for styles.

### Assumed Data Structure
The application uses mock data located in `src/data/mockData.js`.
-   **Products**: Include `id`, `name`, `category`, `producerId`, `status`, `lastUpdated`, and `versions`.
-   **Version History**: An array of historical states (`draft`, `submitted`, `published`) to demonstrate the "Disclosure" lifecycle.
-   **Evidence**: Represented as a simple count (`evidenceCount`), assuming these would link to uploaded documents in a real backend.

### Compliance
-   **Status Badges**: Colors are muted to denote workflow stage, not quality (e.g., Green is "Published", not "Good").
-   **Disclaimer**: A hard-coded warning appears on the Product Detail page to satisfy the "Transparency Notice" requirement.
