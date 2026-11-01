# IEEE CS AI/ML Bootcamp 2026
**Learn AI. Understand machine learning. Build something real.**

Organized by the **IEEE Computer Society Premier University Student Branch Chapter**.

---

## Overview

The IEEE CS AI/ML Bootcamp 2026 is a hands-on, beginner-friendly program designed to take undergraduate students from their first lines of Python code all the way to building and deploying a live machine learning application.

### Two-Phase Structure (8 Sessions)
- **Phase 1: Foundation (Online, 3 sessions)**
  - Session 1: Introduction to Python
  - Session 2: Python for data handling (NumPy, Pandas)
  - Session 3: Data analysis and visualization (Matplotlib, Seaborn)
- **Phase 2: Practical (In person at Premier University, 5 sessions)**
  - Session 4: Introduction to AI and ML
  - Session 5: Machine learning fundamentals & Scikit-learn
  - Session 6: Practical ML project & evaluation
  - Session 7: Deployment (Streamlit, Git, GitHub)
  - Session 8: Final project showcase & certificate distribution

---

## Configuration & Source of Truth

All dates, fees, seat counts, and organizer information are centralized in:
```
config/event.ts
```
Update values in this file to propagate changes across the entire site (Home, Curriculum, Apply, FAQ, metadata, and footer).

---

## Design Tokens

- **Background:** `#000000` (Pure Black)
- **Surface:** `#141414`
- **Lines & Borders:** `#2b2b2b`
- **Text:** `#ffffff`
- **Muted Text:** `#a8a8a8`
- **Accent Orange:** `#FF6A13`
- **Headings Font:** Sora
- **Body Font:** IBM Plex Sans
- **Code Cell Font:** IBM Plex Mono

---

## Project Structure & Pages

- `/` — Home page matching `aiml-bootcamp-2026-design-reference.html` with interactive notebook cell animation.
- `/curriculum` — Detailed 8-session curriculum breakdown and lab syllabus.
- `/apply` — Application process explanation with embedded Google Form and disclaimer.
- `/faq` — Comprehensive frequently asked questions.
- `/sitemap.xml` — Dynamically generated search engine sitemap.
- `/robots.txt` — Search engine crawler instructions.

---

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```
