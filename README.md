

# 🐱 KittyTrack Frontend

A **React Native (Expo)** mobile app for KittyTrack—a group expense tracking application with smart LLM input support.

-----

## 🚀 Features

  * **Group Management**: Easily create and view shared expense groups.
  * **Expense Tracking**: Keep tabs on expenses and how they're split among members.
  * **LLM-Powered Input**: Add expenses using natural language, parsed intelligently by the backend.
  * **Simplified Debt Calculation**: Quickly see who owes what to whom.
  * **Modern Navigation**: Built with **Expo Router** and **React Navigation**.

-----

## 📦 Tech Stack

  * **React Native** (via **Expo**)
  * **Expo Router** (File-based navigation for a streamlined development experience)
  * **Axios**: For efficient communication with the KittyTrack backend API.
  * **React Native Paper**: Provides beautiful and customizable UI components.

-----

## 🗂️ Project Structure

```
app/
├── (tabs)/             # Defines the tab layout and routes
│   ├── index.tsx       # Home tab (lists groups)
│   ├── group.tsx       # Group detail screen
│   ├── add-expense.tsx # Manual expense entry screen
│   ├── llm.tsx         # Smart input (LLM) screen
│   └── profile.tsx     # User profile screen
├── screens/            # Implementations of individual screens
│   ├── HomeScreen.tsx
│   ├── GroupScreen.tsx
│   ├── AddExpenseScreen.tsx
│   ├── LLMInputScreen.tsx
│   └── ProfileScreen.tsx
├── services/           # API communication setup
│   └── api.ts
├── _layout.tsx         # Root layout for Expo Router
└── +not-found.tsx      # 404 fallback screen
```

-----

## 🧰 Prerequisites

Make sure you have **Node.js** and **npm** installed. Then, install the Expo CLI globally:

```bash
npm install -g expo-cli
```

-----

## 🧪 Run the App

To start the development server, navigate to the project directory and run:

```bash
npx expo start
```

You'll then have options to run the app:

  * **iOS Simulator**: Press `i` in the terminal.
  * **Android Emulator**: Press `a` in the terminal.
  * **Real Device**: Scan the QR code displayed in the terminal using the **Expo Go** app on your phone.
  * **Web**: Press `w` to open in your web browser.

-----

## 🌐 API Setup

Before running the app, you'll need to configure the backend API URL. Edit `app/services/api.ts` and replace the `baseURL` with your machine's local IP address where the backend is running:

```typescript
const api = axios.create({
  baseURL: 'http://192.168.0.X:3000', // Replace with your machine's IP (e.g., 192.168.1.100)
});
```

**Important**: When testing on a real device, **do not** use `localhost`; always use your machine's actual local IP address.

-----

## 🧠 Smart Input (LLM)

Navigate to the **Smart Input** tab within the app and try entering a natural language prompt like this:

```
"John paid €50 for dinner with Alice and Bob"
```

The backend's LLM will process this and return a structured expense payload, ready to be added to your group.

-----

## 🧪 Web Testing

If you prefer to test the app in a web browser, use:

```bash
npx expo start --web
```

**Note**: For web requests to succeed, you might need to ensure CORS is properly enabled on your backend server.

-----

## 🗺️ Roadmap

Here are some features planned for future development:

  * Login/Authentication (JWT)
  * Push Notifications
  * Offline Support
  * Dark Mode

-----

## 📄 License

This project is licensed under the **MIT License**. Built with ❤️ to make group expenses painless\!
