import { useContext } from "react";
import { ThemeContext } from "./context/themeContext";
import MainLayout from "./layouts/MainLayout";
function App() {
  const theme = useContext(ThemeContext);
  return (
    <MainLayout>
      <div>
        <h1 className='text-4xl text-blue-500 dark:text-white'>Vite Project</h1>
        <button onClick={theme?.toggleTheme}>
          Toggle
        </button>
      </div>
    </MainLayout>
  )
}

export default App;