import { useTheme } from "./context/theme/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <main className="h-screen w-full flex items-center justify-center p-4 text-primary">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-heading mb-4">
          Portfolio
          <span className="block w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></span>
        </h1>
        <p className="text-xl mt-6">Full Stack Developer | React Specialist</p>

        <button
          className="btn-primary mt-8"
          type="button"
          onClick={toggleTheme}
        >
          Change Theme
          <span className="ml-2">{theme === "dark" ? "🌞" : "🌙"}</span>
        </button>
      </div>
    </main>
  );
}

export default App;
