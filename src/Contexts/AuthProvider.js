import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  dados: [],
  isLoading: false,
});

export default function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDados([
        
      ]);
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <AuthContext.Provider value={{ dados, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
