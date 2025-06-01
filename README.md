# AcePrep – AI-Powered Mock Interview Platform

AcePrep is a next-generation web application designed to help users prepare for job interviews using AI-powered voice simulations. It allows users to conduct mock interviews with realistic agents, receive detailed feedback based on their performance, and track progress over time.

##  Features

-  **AI Voice Interviewer:** Simulates real-time job interviews using voice agents (Vapi AI).
-  **Feedback Analysis:** Automatically generates detailed, categorized feedback using AI.
-  **Interview History:** View previous sessions and review feedback scores.
-  **Secure Authentication:** Firebase-based sign-up/sign-in flow.
-  **Responsive Design:** Optimized for desktop and mobile.
-  **Custom Interview Types:** Choose your role, level, type, and tech stack.

---

##  Tech Stack

- **Next.js 15** – React Framework
- **Firebase** – Authentication and Firestore DB
- **Vapi AI** – Voice interview agent
- **Google Gemini (Generative AI)** – Feedback generation
- **Tailwind CSS** – UI Styling
- **React Hook Form + Zod** – Form handling and validation
- **Lucide-react, Shadcn/ui** – UI components

---

## Quick Start
Follow these steps to set up the project locally on your machine.

**Cloning the Repository**
```bash
git clone https://github.com/KhushCanCode/AcePrep.git
```
**Installation**

Install the project dependencies using npm:
```bash
npm install
```

**Environment Variables**

Before running the project, create a `.env.local` file and include the following:

```env
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=
```

**Running**
```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the project.