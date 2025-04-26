# TaskSphere - Task Management App

**TaskSphere** is a modern and intuitive task management application designed to streamline task tracking, scheduling, and collaboration. With features such as Google Calendar integration for managing timelines and scheduling meetings, TaskSphere aims to enhance productivity and make task management seamless.

## 🚀 Technologies Used

- **Frontend**: Vue.js (Composition API)
- **Styling**: Tailwind CSS
- **Integration**: Google Calendar API (for managing task timelines and scheduling)

## 📂 File Structure

Below is the proposed file structure for the TaskSphere frontend:

```
├── public/
│   └── assets/           # Static assets like images
├── src/
│   ├── components/       # Reusable Vue components
│   ├── pages/            # Main application views/pages
│   ├── layouts/          # Shared layouts for pages
│   ├── store/            # Vuex or Pinia state management
│   ├── router/           # Vue Router configurations
│   ├── styles/           # Tailwind CSS configuration and global styles
│   ├── utils/            # Utility functions
│   ├── App.vue           # Root Vue component
│   ├── main.js           # Application entry point
│   ├── index.html        # Entry point for the app
│   └── services/         # API integration and Google Calendar service
├── .env                  # Environment variables
├── package.json          # Dependency manager configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🛠️ How to Run TaskSphere Locally

Follow these steps to set up and run TaskSphere on your local machine:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/slimzyBoom/TaskSphere.git
   cd zig-task
   ```

2. **Install Dependencies**
   Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed.
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**
   - Create a `.env` file in the root directory.
   - Add the necessary variables, e.g., your Google Calendar API key:
     ```
     VITE_GOOGLE_CALENDAR_API_KEY=your-api-key
     ```

4. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The app will be accessible at `http://localhost:5173`.

5. **Build for Production**
   To create an optimized build for production, run:
   ```bash
   npm run build
   # or
   yarn build
   ```


## 📝 Guidelines for Contribution

1. Follow the [Vue.js Style Guide](https://vuejs.org/style-guide/).
2. Write meaningful commit messages.
3. Test your code thoroughly before submitting pull requests.
4. Adhere to the file structure and naming conventions.

