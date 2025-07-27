# 🌍 Maybank Assessment - React Frontend

A scalable and modern web app built with **Next.js**, **TypeScript**, and **Redux Toolkit**, allowing users to search for locations using **Google Places Autocomplete**, view them on a map, track search history, and mark favorite places via an optional backend API.

The project is live at [https://maybank-assesment-react-fe.vercel.app/](https://maybank-assesment-react-fe.vercel.app/) (Will be taken down in 1 week).

-   For login, use username `user1` and password `password123`.
-   Backend might be a bit slow, running on free tier.

## ✨ Features

-   🔍 Google Places **Autocomplete** with real-time suggestions.
-   🗺️ Display selected location on an interactive **Google Map**.
-   🧠 Track and persist **search history** using Redux Toolkit.
-   ⭐ Mark places as **favorites** (triggering a web service call to Java Spring Boot backend).
-   🎨 Built with **Tailwind CSS** and **shadcn/ui** for clean, accessible UI components.
-   🧩 Modular and scalable architecture using **React hooks**, **functional components**, and **Redux Thunk** middleware.

## 🛠 Tech Stack

-   Framework: Next.js (App Router)
-   Language: TypeScript
-   State Management: Redux Toolkit, Redux Thunk
-   UI: Tailwind CSS, shadcn/ui
-   Map Integration: Places API
-   Backend (Optional): Java Spring Boot

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Configure Google Maps API key

Create a `.env.local` file in the root directory:

```
NEXT_PUBLIC_GOOGLE_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_BACKEND_URL=http://localhost:8080 (or your backend url)
```

Don't have a Google Maps API key? Try the deployed version at [Vercel](https://maybank-assesment-react-fe.vercel.app/)

Make sure the following Google Cloud APIs are enabled if you use your own key:

-   Maps JavaScript API
-   Places API

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 4. (Optional) Run the backend server

This part is optional, but recommended to be able to save favorites. [see README](https://github.com/HaziqSabtu/maybank-assesment-spring-be).
