# 📄 Transcript Summarizer

An AI-powered full-stack web app that takes long meeting transcripts and generates concise, useful summaries.

Built with **React + Tailwind (Frontend)** and **Node.js + Express (Backend)**, powered by the **Groq API**.

🚀 **Live Demo:** [Transcript Summarizer](https://transcript-summary.vercel.app)  
⚡ **Backend API:** [Render API](https://transcriptsummary.onrender.com)

---

## ✨ Features

- 📝 **Paste or upload** meeting transcripts
- 🎯 **Custom prompts** (choose how summaries are generated)
- ⚡ **Fast summarization** with **Groq API**
- 📋 **Copy, edit, or download** the summary
- 📧 **Email summaries** directly from the UI
- 🌐 **Fully deployed** (Vercel + Render)

---

## 📂 Project Structure

```
TranscriptSummary/
│
├── Backend/                  # Express.js API server
│   ├── server.js             # Main server file
│   ├── package.json
│   └── ...config & utils
│
├── Frontend/                 # React + Tailwind frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # Pages (Home, Summary)
│   │   ├── App.jsx           # Root component
│   │   └── main.jsx          # React entry
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── README.md                 # Project documentation
└── .gitignore
```

---

## ⚙️ Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/SyeedBilal/TranscriptSummary.git
cd TranscriptSummary
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

Create a `.env` file:

```env
FRONTEND_URL=http://localhost:5173
GROQ_API_KEY=your_groq_api_key_here
```

Run the backend:

```bash
npm start   # runs on http://localhost:3000
```

### 3. Frontend Setup

```bash
cd ../Frontend
npm install
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Run the frontend:

```bash
npm run dev   # runs on http://localhost:5173
```

---

## 🚀 Deployment

- **Frontend (Vercel):** [https://transcript-summary.vercel.app](https://transcript-summary.vercel.app)
- **Backend (Render):** [https://transcriptsummary.onrender.com](https://transcriptsummary.onrender.com)

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Vercel** - Deployment

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **Groq API** - AI summarization
- **Render** - Deployment

---

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/summarize` | Generate summary from transcript |
| `POST` | `/api/email` | Send summary via email |

---

## 🔧 Environment Variables

### Backend (.env)
```env
FRONTEND_URL=your_frontend_url
GROQ_API_KEY=your_groq_api_key
PORT=3000
```

### Frontend (.env)
```env
VITE_BACKEND_URL=your_backend_url
```

---

## 📦 Dependencies

### Backend
- `express` - Web framework
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
- `groq-sdk` - Groq API integration
- `nodemailer` - Email functionality

### Frontend
- `react` - UI library
- `tailwindcss` - CSS framework
- `lucide-react` - Icons
- `axios` - HTTP requests

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Groq** for providing fast AI inference
- **Vercel** for seamless frontend hosting
- **Render** for reliable backend deployment
- **React** and **Tailwind CSS** communities

---

## 📞 Contact

**Developer:** Syeed Bilal  
**GitHub:** [@SyeedBilal](https://github.com/SyeedBilal)  
**Project Link:** [https://github.com/SyeedBilal/TranscriptSummary](https://github.com/SyeedBilal/TranscriptSummary)

---

<div align="center">

### ⭐ Star this repo if you found it helpful!

[🌟 Give it a star](https://github.com/SyeedBilal/TranscriptSummary) • [🐛 Report Bug](https://github.com/SyeedBilal/TranscriptSummary/issues) • [💡 Request Feature](https://github.com/SyeedBilal/TranscriptSummary/issues)

</div>
