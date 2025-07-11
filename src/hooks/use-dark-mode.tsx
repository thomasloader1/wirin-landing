import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    // Verificar si el navegador soporta matchMedia
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      // Establecer el estado inicial
      setIsDarkMode(mediaQuery.matches);
      
      // Función para manejar cambios en el tema
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      // Agregar listener para cambios
      mediaQuery.addEventListener('change', handleChange);
      
      // Cleanup
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  }, []);

  return isDarkMode;
}