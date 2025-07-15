# Gemini Frontend Clone 💬✨

A modern, responsive, and accessible frontend clone of Google’s Gemini conversational AI, built using **Next.js 15**, **Tailwind CSS**, **Zustand**, and **React Hook Form**.  
This project fulfills the full assignment requirement — including OTP-based login, chatroom simulation, dark mode, modern UI patterns, accessibility, and local data storage.

---

## 📌 Objective

To build a responsive, modular frontend for a conversational AI application that includes:

- OTP-based login/signup with country code selector
- Chatroom creation, deletion, and persistence
- AI message simulation with typing delay
- A beautiful, animated, responsive UI using Tailwind
- Full dark mode support, accessibility, and smooth UX

---

## 🚀 Features Breakdown

### 🔐 OTP Authentication
- OTP login simulation using `setTimeout`
- Country code selector fetched from `restcountries.com`
- Validated with **React Hook Form** + **Zod**
- Controlled form fields and client-side error handling

### 💬 Chatroom System
- Zustand-managed state for storing multiple chatrooms
- Create/delete chatrooms with confirmation toasts
- Throttled AI replies with simulated typing effect
- Infinite scroll-like UI for past messages (reverse scrolling)
- Auto-scroll to latest message on user send

### 📷 Chat UI Features
- Glassmorphism-based chat bubbles
- Image upload support via base64 preview (no backend)
- Copy-to-clipboard on hover
- Message timestamps and sender identification
- Typing indicator with `setTimeout` simulation

### 🌙 Global UX/UI
- Dark mode via `class` toggle (`useTheme` hook)
- Custom scrollbar, gradient backgrounds, blur layers
- Keyboard navigation (focus-visible outlines)
- Debounced search bar for filtering chatrooms
- LocalStorage persistence (chat, auth state)
- Loading skeletons & transition animations

---

## 🧰 Tech Stack

| Layer | Tools |
|-------|-------|
| **Framework** | Next.js 15 (App Router) |
| **Styling** | Tailwind CSS, glassmorphism, gradients |
| **State Management** | Zustand |
| **Form Handling** | React Hook Form + Zod |
| **Toasts** | react-hot-toast |
| **Image Upload** | Local preview URL |
| **Theme** | class-based dark mode |
| **Icons** | Lucide React |

---

## 📸 Screenshots

![login](Screenshot 2025-07-15 223318.png)

