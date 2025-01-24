import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';
import { ThemeProvider } from './context/Context'; // Ensure this is imported

function App() {
  const [themeMode, setThemeMode] = useState('Light');

  const LightTheme = () => setThemeMode('Light');
  const darkTheme = () => setThemeMode('dark');

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('Light', 'dark');
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, LightTheme, darkTheme }}>
      <div className="flex flex-wrap items-center min-h-screen">
        <div className="w-full">
          <div className="flex justify-end w-full max-w-sm mx-auto mb-4">
            <ThemeBtn /> {/* Ensure this component is implemented and functional */}
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card /> {/* Ensure this component is implemented and functional */}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
