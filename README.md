# 🧠 DataMind 2.0 – Frontend

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Fast-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![CSS](https://img.shields.io/badge/CSS-Modern-blue?logo=css3)
![Dark Mode](https://img.shields.io/badge/Dark%20Mode-Supported-black)
![Deployment](https://img.shields.io/badge/Deployed-Vercel-success?logo=vercel)

---

### Backend Github repo : [Go to](https://github.com/Pritam216/DataMind-2.0)

---

## 🌐 Live Demo

🔗 **Live App:** https://datamind-agent.vercel.app/

🎥 **Demo Video:** [![DataMind Frontend App](https://github.com/user-attachments/assets/2d4ed6cd-0b60-48e1-a920-ac56c2f509bb)](https://youtu.be/xN4UpiGVheg)


---
## 🚀 Overview

**DataMind 2.0 Frontend** is a modern, responsive web interface for an AI-powered Exploratory Data Analysis (EDA) and conversational analytics platform.

It allows users to:

* Upload CSV datasets
* Trigger automated EDA
* View AI-generated insights in Markdown
* Interact with data via a chat interface
* Toggle between light and dark themes
* Navigate clean documentation

---

## 🖥️ Tech Stack

* **React (Vite)**
* **React Router DOM**
* **React Markdown**
* **Fetch API**
* **Modern CSS (Theme Variables)**
* **Light / Dark Mode Toggle**

---

## ✨ Key Features

* 📤 CSV upload with EDA trigger
* 📊 Markdown-based AI summary rendering
* 💬 Dataset-aware chat interface
* 🌓 Global light/dark theme support
* 🔒 Chat lock until data is uploaded
* 📄 Dedicated documentation page
* 📱 Fully responsive layout

---

## 🧩 Core Pages & Components

### Pages

* **Try Now** – Upload data, view EDA summary, chat with AI
* **Docs** – Full project documentation rendered via Markdown

### Components

* `UploadCard`
* `EDASummary`
* `ChatPanel`
* `ChatMessages`
* `ChatInput`
* `Navbar`
* `Footer`

---

## 🔗 Backend Integration

The frontend communicates with the DataMind backend via REST APIs.

```js
const API_BASE = "https://datamind-20-production.up.railway.app";
```

### Main Endpoints Used

* `POST /run-eda` – Upload dataset & generate EDA
* `POST /chat` – Conversational analysis using `run_id`

---

## 🌓 Theme System

* Global theme state controlled via Navbar toggle
* Uses CSS variables for consistent theming
* Works across **all pages**, including Docs

---

## 📦 Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/datamind-frontend.git

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🏗️ Build for Production

```bash
npm run build
```

---

## 🚀 Deployment

Deployed using **Vercel**

Supports environment-based API configuration.


## 📌 Project Status

✅ Actively maintained

✅ Production-ready

🚧 Open for enhancements

---

## 👤 Author

**Pritam Kumar Roy**

Built with ❤️ for data-driven intelligence

---
